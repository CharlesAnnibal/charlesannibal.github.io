import React, { Component } from 'react';
import { Wrapper, Label, Input } from './style';

export default class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empty: true,
            value: props.value,
            labelOnTop: false
        }

        this.validateLength = this.validateLength.bind(this)
        this.getFocus = this.getFocus.bind(this)
        this.lostFocus = this.lostFocus.bind(this)
        this.changeValue = this.changeValue.bind(this)

        this.inputRef = React.createRef()

    }

    componentDidMount() {
        if (this.props.select)
            this.setState({ labelOnTop: true })

        if (this.props.value && this.props.value.length > 0) {
            this.setState({ labelOnTop: true })
        }
    }

    getFocus() {
        this.setState({ labelOnTop: true })
    }

    lostFocus() {
        if (this.state.empty && (this.props.maxWidth >= 80 || !this.props.maxWidth))
            this.setState({ labelOnTop: false })
    }

    validateLength(value) {
        const inputValue = value.length === 0 ? true : false

        this.setState({ empty: inputValue }, () => {
            if (this.props.maxWidth <= 80) {
                this.setState({ labelOnTop: !stateValue })
            }
        })
    }

    changeValue(event) {
        this.setState({ value: event.target.value })
        if (this.props.onChange)
            this.props.onChange(this.state.value)
        this.validateLength(event.target.value)
    }

    render() {
        const select = this.props.select ? this.props.select : ''
        return (
            <Wrapper shadow={this.props.shadow} hasSelect={this.props.select}>
                {select}
                <Input
                    ref={this.inputRef}
                    width={this.props.maxWidth}
                    shadow={this.props.shadow}
                    hasSelect={this.props.select}
                    name={this.props.name}
                    id={this.props.id}
                    type={this.props.type}
                    onFocus={this.getFocus}
                    onBlur={this.lostFocus}
                    value={this.state.value}
                    onChange={this.changeValue}
                    onKeyUp={this.changeValue} />
                <Label select={this.props.select} labelOnTop={this.state.labelOnTop}>{this.props.children}</Label>
            </Wrapper>
        )
    }
}