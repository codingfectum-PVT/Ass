import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Sections/S1_Header'
import About from '../../Sections/S2_About'
import Gallery from '../../Sections/S2_Gallery'
import WhyWeLoveAss from '../../Sections/S3_WhyWeLoveAss'
import HowToBuy from '../../Sections/S4_HowToBuy'
import JoinUs from '../../Sections/S6_JoinUs'
import Footer from '../../Sections/S7_Footer'
import Testimonial from '../../Sections/S5_Testimonials'

const MainPage = (props) => {
  return (
    <PageWrapper>
        <Header />
        <About />
        <Gallery />
        <WhyWeLoveAss />
        <HowToBuy />
        <Testimonial />
        <JoinUs />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage