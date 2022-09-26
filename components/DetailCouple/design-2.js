export default function DetailCouple2() {
  return (
    <>
      {/* <div className="quotes-wrapper">
        <img src="/images/hero-devica.jpeg" />
        <div className="desc-text">
          <p>"Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya pasangan hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati, dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir."</p>
          <p className="text-center mt-1 md:mt-3 text-lg text-secondary">( Q.S. Ar - Ruum : 21 )</p>
        </div>
      </div> */}
      <section className="max-w-4xl mx-auto">
        <div className="heading-background">
          <h2>Olivia & Rifan</h2>
        </div>
        <p className="text-center text-sm mt-5">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya pasangan hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati, dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir."
        </p>
        <p className="text-center mt-1 md:mt-3 text-lg text-secondary mb-5">( Q.S. Ar - Ruum : 21 )</p>
        <p className="text-3xl text-center tracking-wide">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
        <div className="max-w-2xl mx-auto mt-5 md:mt-10 text-center flex flex-col items-center">
          <h2 className="wording-salam-2 text-name">Assalamualaikum Warahmatullahi Wabarakatuh</h2>
          <p className="mt-2">Dengan memohon rahmat dan ridha Allah SWT, kami bermaksud menyelenggarakan  pernikahan putra-putri kami:</p>
        </div>

        {/* <img src="/images/devica-2.jpeg" className="h-80 w-full object-cover mt-4" /> */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div>
            {/* <img src="/images/olivia.jpeg" className="h-80 w-full object-cover mt-4" /> */}
            <div className="flex flex-col items-center">
              <img src="/images/olivia.png" className="w-4/6" />
            </div>
            {/* <p className="couple-text">Olivia</p> */}
            <div className="bg-black mt-2" style={{height: '2px'}} />
            <div className="h-14">
              <p className="couple-parents uppercase">Olivia Astrinda, S.Tr.Keb</p>
            </div>
            <p className="couple-parents font-semibold">Putri dari</p>
            <p className="couple-parents" style={{margin: 0}}>
              Bpk Siti Rohani dan Ibu Siti Rohani
            </p>
          </div>
          <div>
            {/* <img src="/images/rifan.jpeg" className="h-80 w-full object-cover mt-4" /> */}
            <div className="flex flex-col items-center">
              <img src="/images/rifan.png" className="w-4/6" />
            </div>
            {/* <p className="couple-text">Rifan</p> */}
            <div className="bg-black mt-2" style={{height: '2px'}} />
            <div className="h-14">
              <p className="couple-parents uppercase">Rifan Febrianto, S.T</p>
            </div>
            <p className="couple-parents font-semibold">Putra dari</p>
            <p className="couple-parents" style={{margin: 0}}>
              Bpk Tabri dan Ibu Titi Suharti (Ida)
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-2">
          <div className="flex flex-col justify-center items-center">
            <img 
              className="frame-rounded-top" 
              src="/images/Aliya-cpw.jpeg" 
              alt="brides" 
              data-aos="fade" 
              data-aos-delay="200" 
            />
            <p className="couple-text">dr. Nuraliyah</p>
            <p className="couple-parents">
              Putri dari Bpk H. Mustakim dan Ibu Hj. Puji Lestari
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p className="handwriting text-2xl text-secondary mt-4 mb-1 md:m-0">dengan</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img 
              className="frame-rounded-top" 
              src="/images/Aliya-cpp.jpeg" 
              alt="brides" 
              data-aos="fade" 
              data-aos-delay="200" 
            />
            <p className="couple-text">Tri Arda Prebawa, SH</p>
            <p className="couple-parents">
              Putra dari Bpk I Ketut Mertha dan Ibu Liani
            </p>
          </div>
        </div> */}
        <p className="text-center mt-8">
          Yang Insya Allah akan dilaksanakan pada : 
        </p>
      </section>
    </>
  )
}