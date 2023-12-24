import React, { useRef, useState} from 'react'
import {useResponsive} from "../hooks/useResponsive.js";
import InformativeDesktop from "../component/MainComponent/InformativeComponent/InformativeDesktop.jsx";
import InformativeMobile from "../component/MainComponent/InformativeComponent/InformativeMobile.jsx";

function InformativePage() {
  const isMobile = useResponsive(640);
  const [searchQuery, setSearchQuery] = useState("");

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    className: "me-5",
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
      console.log("What is the current slide : " + currentSlide);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {isMobile ? (
        <InformativeMobile
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          settings={settings}
          next={next}
          previous={previous}
          currentSlide={currentSlide}
          sliderRef={sliderRef}
        />
      ) : (
        <InformativeDesktop
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          settings={settings}
          next={next}
          previous={previous}
          currentSlide={currentSlide}
          sliderRef={sliderRef}
        />
      )}
    </>
  );
}

export default InformativePage;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div />;
}
