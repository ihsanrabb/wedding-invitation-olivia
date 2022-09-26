export default function HeroCouple() {
  return (
    <section 
      className="flex flex-col items-center img-cover relative"
      style={{backgroundImage: `url('/images/olivia-cover.jpeg')` }}
    >
      <div className="mt-14 flex flex-col items-center" style={{zIndex: 1}}>
        <h6 className="text-sub text-xl animate__animated animate__slideInDown" style={{color: '#000'}}>
          The wedding of
        </h6>
        {/* <h2 className="handwriting-name animate__animated animate__zoomIn text-center mx-4" style={{fontSize: '4rem', color: '#C7A82D'}}>
          Olivia & Rifan
        </h2> */}
        <img src="/images/olivia-rifan-text-black.png" alt="olivia flower" className="w-5/6" />
        <h6 className="text-sub text-xl mt-2 animate__animated animate__slideInUp" style={{color: '#000'}}>
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
