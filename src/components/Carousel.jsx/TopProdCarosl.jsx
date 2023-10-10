import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../Cards/ProductCard";
import TopCard from "../Cards/TopCard";
import Title from "../Title";

const TopProdCarosl = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <style>
        {`
              
             .carousel-item {
            padding: 10px !important;
            // height: 300px !important;
          }

          .carousel-container {
            position: relative;
           ;
          }

          .custom-dot-list-style {
            position: absolute;
           
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) ;
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .react-multi-carousel-dot  {
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .react-multi-carousel-dot .active {
            background-color: #007bff;
          }
          .react-multiple-carousel__arrow--left{
            z-index:10
          }
          .react-multiple-carousel__arrow--right{
            z-index:10
          }

`}
      </style>
      <div className="w-full  mt-10">
        <Title
          heading={`Master Cleanse Reliac Heirloom`}
          para={`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.`}
        />
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          sliderClass=""
          slidesToSlide={1}
          // autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item"
        >
          <TopCard val={"47"} />
          <TopCard val={"45"} />
          <TopCard val={"465"} />
          <TopCard val={"654"} />
          <TopCard val={"47"} />
          <TopCard val={"48"} />
          <TopCard val={"45"} />
          <TopCard val={"64"} />
          <TopCard val={"43"} />
          <TopCard val={"74"} />
          <TopCard val={"49"} />
          <TopCard val={"49"} />
          <TopCard val={"465"} />
          <TopCard val={"465"} />
        </Carousel>
      </div>
      ;
    </>
  );
};

export default TopProdCarosl;
