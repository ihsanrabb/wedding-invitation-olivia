export default function DetailCouple() {
  return (
    <section className="mt-5 max-w-4xl mx-auto">
      <div 
        className="heading-background" 
        data-aos="flip-up"
        data-aos-delay="200"
      >
        {/* <h1>WE ARE MARRIED!</h1> */}
        <h2>Aliya & Arda</h2>
      </div>
      <p className="text-center text-sm mt-5">
        "Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakan-Nya pasangan hidup dari jenismu sendiri, supaya kamu mendapatkan ketenangan hati, dan dijadikan-Nya rasa kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang berfikir."
      </p>
      <p className="text-center mt-1 md:mt-3 text-lg text-primary font-bold">Q.S. Ar - Ruum :21</p>
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <img className="w-10 opacity-50" src="/images/icon/leaf.svg" />
      </div>
      <p className="text-3xl text-center tracking-wide">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
      <div className="max-w-2xl mx-auto mt-5 md:mt-10 text-center flex flex-col items-center">
        <h2 className="wording-salam">Assalamu'alaikum Warahmatullahi Wabarakatuh</h2>
        <p className="text-sm mt-4">Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan jika engkau memperkenankan Putra-Putri Kami.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-2">
        <div className="flex flex-col justify-center items-center">
          {/* <img 
            className="w-9/12 md:w-full rounded-full" 
            src="/images/dummy/bride.jpg" 
            alt="brides" 
            data-aos="fade" 
            data-aos-delay="200" 
          /> */}
          <p className="couple-text">Juliet</p>
          <p className="couple-parents">
            Anak pertama dari Bpk. Ezra Fitz dan Ibu Hanna Marin
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p className="handwriting text-4xl text-primary mt-4 mb-1 md:m-0">dengan</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* <img 
            className="w-9/12 md:w-full rounded-full" 
            src="/images/dummy/groom.jpg" 
            alt="groom" 
            data-aos="fade" 
            data-aos-delay="200" 
          /> */}
          <p className="couple-text">Romeo</p>
          <p className="couple-parents">
            Anak pertama dari Bpk. Caleb Rivers dan Ibu Aria Montgomery
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 mb-4">
        <img className="w-10 opacity-50" src="/images/icon/leaf.svg" />
      </div>
      <p className="text-center">
        Melaksanakan Syariat Agama-Mu untuk mengikuti Sunnah Rasul-Mu Membentuk rumah tangga yang Sakinnah, mawaddah, Warahmah hanya dengan izin-Mu Kami Menikahkan mereka.
      </p>
    </section>
  )
}