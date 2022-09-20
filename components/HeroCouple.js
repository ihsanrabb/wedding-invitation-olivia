export default function HeroCouple() {
  return (
    <section 
      className="flex flex-col items-center img-cover relative"
      style={{backgroundImage: `url('/images/olivia-cover.jpeg')` }}
    >
      <div className="mt-14" style={{zIndex: 1}}>
        <h6 className="text-sub text-xl animate__animated animate__slideInDown">
          Pernikahan
        </h6>
        <h2 className="handwriting-name animate__animated animate__zoomIn text-center mx-4" style={{fontSize: '4rem', color: '#C7A82D'}}>
          Olivia & Rifan
        </h2>
        <h6 className="text-sub text-xl mt-2 animate__animated animate__slideInUp">
          Sabtu, 22 Oktober 2022
        </h6>
      </div>
      <div className="slide-wording">
        <p className="text-white text-lg">Geser Kebawah</p>
        <img className="w-3" src="/images/icon/arrow-down.svg" alt="brides" />
      </div>
    </section>
  )
}
