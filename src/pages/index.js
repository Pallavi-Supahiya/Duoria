import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"

import Hero from "../components/Hero"
import Icons from "../components/Icons"
import HowItWorks from "../components/HowItWorks"
import Merchants from "../components/Merchants"
import Save from "../components/Save"
import Testimonial from "../components/Testimonial"
import FAQ from "../components/faq"
import Join from "../components/Join"
import Footer from "../components/Footer"


const IndexPage = () => (
  <div>
 
   <Hero />
   <Icons />
   <HowItWorks />
   <Merchants />
   <Save />
   <Testimonial/>
   <FAQ />
   <Join />
   <Footer />
  </div>
)

export default IndexPage
