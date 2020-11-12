import React, { useRef, useEffect, useState } from 'react';
import { HomeBannerSection, BgMask, FirstSectionGrid, Header1, Header2, MatrixMask } from './style'


const HomeBanner = () => {



  // Setting up the draw function
  /*function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
  }*/
  const [valDrop, setValDrop] = useState(1);

  // Setting up the letters
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
  //letters = 'PHP JS C# JQUERY WEBPACK JAVA SQL LARAVEL WORDPRESS'
  letters = letters.split('');

  const canvasMatrixRef = useRef(null)

  useEffect(() => {

    // Setting up the drops

    const canvas = canvasMatrixRef.current
    const context = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var fontSize = 10,
      columns = canvas.width / fontSize;
    var drops = [];
    for (var i = 0; i < columns; i++) {
      console.log("aaa")
      drops[i] = 1;
    }
    let requestId;
    const render = () => {
      context.fillStyle = 'rgba(0, 0, 0, .2)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      console.log("sss", drops.length)
      context.font = "40px Verdana";
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        context.fillStyle = '#090';
        context.fillText(text, i * fontSize, drops[i] * (fontSize / 3));
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > .99) {
          drops[i] = 0;
        }
      }

      requestId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(requestId);
    };
  })

  return (
    <HomeBannerSection className="test">
      <BgMask className="bgMask">
        <FirstSectionGrid>
          <Header1>
            Let´s create amazing solutions together
          </Header1>
          <Header2>
            Charles Santos - Software Developer
          </Header2>
          <MatrixMask ref={canvasMatrixRef} >

          </MatrixMask>
        </FirstSectionGrid>
      </BgMask>
    </HomeBannerSection>
  );
};
export default HomeBanner;

