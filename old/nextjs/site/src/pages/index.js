import Link from 'next/link'
import Template from '../components/Templates/template'
import Banner from '../components/Banner/index'
import PresentationSection from '../components/PresentationSection/index'
import JobMatcher from '../components/JobMatcher/JobMatcher'
function HomePage() {
    return (
      <Template>
        <Banner/>
        <PresentationSection/>
        <JobMatcher/>
      </Template>
      
    )
  }
  
  export default HomePage