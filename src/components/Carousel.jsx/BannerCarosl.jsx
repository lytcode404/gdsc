import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import "../../../public/assets"
const images = [
  "https://dummyimage.com/480x260",
  "https://dummyimage.com/620x260",
  "https://dummyimage.com/520x260",
  "https://dummyimage.com/320x260",
];

const BannerCarosl = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <style>
          {`
                  .carousel .thumb img {
              width: 10rem !important;
              height: 5rem !important;
            }

            .carousel .slide img {
              max-height: 400px;
              max-width: fit !important;
              cursor: pointer !important;
            }

            .carousel .slide li {
              max-height: 400px;
              max-width: fit !important;
              cursor: pointer !important;
            }

            .carousel-root {
              max-width: 100%;
              margin: 0 auto;
            }


`}
        </style>
      </Head>

      <div className="w-full flex justify-center items-center">
        <Carousel
          showStatus={true}
          showArrows={true}
          autoPlay={true}
          swipeable={true}
          interval={3000}
          infiniteLoop={true}
          swipeScrollTolerance={50}
          preventMovementUntilSwipeScrollTolerance={true}
          emulateTouch={true}
          dynamicHeight={true}
          thumbWidth={150}
          showThumbs={true}
          centerMode={false}
          onClickItem={(e) => router.push(`/${e}`)}
        >
          {images ? (
            images.map((image, index) => {
              return (
                <Link href={`/filter`} key={index} className="carosl-item">
                  {" "}
                  <Image
                    alt=""
                    src={image}
                    width={1944}
                    height={944}
                    className=""
                  />
                </Link>
              );
            })
          ) : (
            <Image />
          )}
        </Carousel>
      </div>
    </>
  );
};

export default BannerCarosl;
