import Slider from "react-slick";

export default function GallerySlide({dataImage}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return (
    <>
      <Slider {...settings}>
        {dataImage.map((image, index) => (
          <div key={index}>
            <img 
              src={image.imageUrl}
              alt={image.name}
              className="rounded-md max-w-full"
            />
          </div>
        ))}
      </Slider>
    </>
  )
}