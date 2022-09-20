import Slider from "react-slick";

export default function SliderUcapan() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div style={{width: '95%'}}>
      <Slider {...settings}>
        <div className="p-3">
          <div className="shadow-lg p-3 rounded shadow-inner">
            Hallo Hany & Suami, Happy Wedding Day. Wishing you both a lifetime of everlasting love and happiness. Sakinnah, Mawaddah, Warohmah Aamiin 🙏🤍🖤
          </div>
        </div>
        <div className="p-3">
          <div className="shadow-lg p-3 rounded shadow-inner">
            Happy wedding one of my roomate including enemy. Semoga lu dan mas azhar selalu diberi keberkahan dan menjadi keluarga yang samawa. Tetep selalu jadi yani mencret yang gue kenal ya han 
          </div>
        </div>
      </Slider>
    </div>
  );
}