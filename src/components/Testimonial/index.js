import React from 'react'
import quote from "../../images/Testimonial/Quote Mark.svg"
import Slider from "react-slick"
import test1 from "../../images/Testimonial/Group 13.svg"
import test2 from "../../images/Testimonial/Group 11.svg"
import test3 from "../../images/Testimonial/Group 12.svg"
import test4 from "../../images/Testimonial/Group 13.svg"


import "./style.scss"


let data = [
    {
        image: test1
    },
    {
        image: test2
    },
    {
        image: test3
    },
    {
        image: test4
    },
    {
        image: test2
    },
    {
        image: test3
    },
    {
        image: test1
    },
    {
        image: test4
    },
]
data=[...data, ...data, ...data, ...data, ...data]

const Testimonial = () => {

    const [currentMember, setCurrentMember] = React.useState(0)

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }


  var settings={
    useTransform: true,
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll:0.0399 ,
    autoplay: true,
    autoplaySpeed:0.999,
    centerMode: false,
    cssEase: "linear",
    centerPadding: "-10%",
    arrows: false,
    slide: "div",

    
    responsive: [
        {
            breakpoint: 540,
            settings: {
              slidesToShow: 1.5,
              centerPadding: 0,
            },
        },
        {
            breakpoint: 380,
            settings: {
              slidesToShow: 1,
              centerPadding: 0,
            },
        }
    ]
  }



    return (
        <div className="test" id="About">
            <div className="test-container">
                <div className="test-part1">
                    <img src={quote} alt="quote" />
                    <h2 className="test-part1-text">What People Are Saying</h2>
                </div>


                
                <div className="test-part2">
<Slider className="test-slider" {...settings} afterChange={handleChange}>
    {data.map((element, index)=>{
        return index % 2 == 0 ? (
            <div className="slider-content" key={`${"test" + index}`}>
                <img className="evenTest" src={element.image} alt="image" />
            </div>
        ) : (
            <div className="slider-content" key={`${"test" + index}`}>
            <img className="oddTest" src={element.image} alt="image" />
        </div>
        )
    })}
</Slider>
                </div>



            </div>

        </div>
    )
}

export default Testimonial
