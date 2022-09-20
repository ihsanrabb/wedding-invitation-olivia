export default function DetailWedding({handleTracking}) {
  const mapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2227284627484!2d106.82288431475043!3d-6.23434416278748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e6e7965f99%3A0x7b9ffa3205d3c39a!2sBalai%20Kartini!5e0!3m2!1sen!2sid!4v1618067593091!5m2!1sen!2sid"

  return (
    <section className="max-w-2xl mx-auto text-center flex flex-col items-center">
      {/* <h2 className="wording-salam">Assalamu'alaikum Warahmatullahi Wabarakatuh</h2>
      <p className="text-sm mt-4">Dengan memohon rahmat dan ridho Allah SWT, Kami bermaksud menyelenggarakan pernikahan putra dan putri kami yang Insya Allah akan dilaksanakan pada:</p> */}
      <div className="flex flex-col justify-center items-center mt-6">
        <img className="w-9/12 md:w-2/3 opacity-90" src="/images/frame-top-grey.png" />
      </div>
      {/* <p className="mt-6 text-primary handwriting text-3xl font-bold">Hari, Tanggal</p>
      <p className="tracking-wide text-2xl">MINGGU, 11 JULI 2021</p> */}
      {/* <h2 className="mt-6 text-primary handwriting text-5xl">Akad :</h2>
      <p className="text-xl">Sabtu, 11 Juli 2021</p>
      <p className="text-xl">08.30 - 10.00 WIB</p> */}
      <h2 className="mt-6 text-primary handwriting text-5xl">Akad Nikah :</h2>
      <p className="text-xl mt-3">Hari Sabtu, 30 Juni 2021</p>
      <p className="text-xl">Pukul 08.30 - 10.00 WIB</p>
      <h2 className="mt-6 text-primary handwriting text-5xl">Resepsi :</h2>
      <p className="text-xl mt-3">Hari Sabtu, 30 Juni 2021</p>
      <p className="text-xl">Pukul 13.00 - 15.00 WIB</p>
      <div className="flex flex-col justify-center items-center mt-8">
        <img className="w-7/12 md:w-2/4 opacity-90" src="/images/frame-bottom-grey.png" />
      </div>
      <p className="mt-6 text-lg">BERTEMPAT DI : </p>
      <p className="text-2xl">Balai Kartini</p>
      {/* <small>Jl. Gatot Subroto No.Kav. 37, RT.6/RW.3, Kuningan Timur, Setiabudi, Jakarta Selatan.</small> */}
      <p>Jl. Gatot Subroto No.Kav. 37, RT.6/RW.3, Kuningan Timur, Setiabudi, Jakarta Selatan.</p>
      <iframe 
        src={mapsUrl}
        width="400" 
        height="200"
        style={{border: 0, maxWidth: '100%'}} 
        loading="lazy"
        className="mt-6 mb-4"
      ></iframe>
      <div className="btn-tertiary"> 
        <a href="https://goo.gl/maps/QbJcmuH1Fyh8Usnf8" 
          target="_blank" 
          onClick={handleTracking}
        >PETUNJUK ARAH KE LOKASI</a>
      </div>
      <p className="mt-6 mb-2 text-sm">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai
      </p>
      <p>Atas Kehadiran Bapak/Ibu/Saudara/i, Kami ucapkan terima kasih./</p>
      <h2 className="wording-salam mt-4">Wassalamu’alaikum Warahmatullahi Wabarakatuh</h2>
    </section>
  )
}