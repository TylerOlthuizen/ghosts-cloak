import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Nft1 from "@assets/gifs/nft-1.gif";
import Nft2 from "@assets/gifs/nft-2.gif";
import Nft3 from "@assets/gifs/nft-3.gif";
import Nft4 from "@assets/gifs/nft-4.gif";
import Nft5 from "@assets/gifs/nft-5.gif";
import Nft6 from "@assets/gifs/nft-6.gif";
import Nft7 from "@assets/gifs/nft-7.gif";
import Nft8 from "@assets/gifs/nft-8.gif";
import Nft9 from "@assets/gifs/nft-9.gif";
import Nft10 from "@assets/gifs/nft-10.gif";
import Nft11 from "@assets/gifs/nft-11.gif";
import Nft12 from "@assets/gifs/nft-12.gif";
import "./styles.css";

export const NftCarousel = () => {
  const images = [
    Nft1,
    Nft2,
    Nft3,
    Nft4,
    Nft5,
    Nft6,
    Nft7,
    Nft8,
    Nft9,
    Nft10,
    Nft11,
    Nft12,
  ];

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      itemClass="carousel-item"
      showDots={false}
    >
      {images.map((img, idx) => (
        <img key={idx} src={img} alt={`NFT ${idx + 1}`} />
      ))}
    </Carousel>
  );
};
