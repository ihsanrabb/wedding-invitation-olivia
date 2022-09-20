export default function WeddingParty() {
  return (
    <section className="md:mx-4 mb-16">
      <div className="mt-10 md:mt-20 mb-20 max-w-3xl mx-auto">
        <div className="heading-background mb-5">
          <h1>WEDDING PARTY</h1>
          <h2>Desy & Desy</h2>
        </div>
        <h3 className="text-center text-xl">
          Meet our family and friends who are walking down the aisle with us.
        </h3>
        <div className="grid grid-cols-2 gap-3 md:gap-0 mt-8">
          <div className="party-card">
            <img 
              className="w-full md:w-9/12 rounded-full" 
              src="/images/dummy/angelina.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Angelina Jolie</p>
            <p className="text-center text-lg mt-2">Bridesmaid</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img 
              className="w-full md:w-9/12 rounded-full"
              src="/images/dummy/bradpitt.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Brad Pitt</p>
            <p className="text-center text-lg mt-2">Groomsman</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-0 mt-8">
          <div className="party-card">
            <img 
              className="w-full md:w-9/12 rounded-full"
              src="/images/dummy/gigi.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Gigi Hadid</p>
            <p className="text-center text-lg mt-2">Bridesmaid</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img 
              className="w-full md:w-9/12 rounded-full" 
              src="/images/dummy/zayn.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Zayn Malik</p>
            <p className="text-center text-lg mt-2">Groomsman</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-0 mt-8">
          <div className="party-card">
            <img 
              className="w-full md:w-9/12 rounded-full" 
              src="/images/dummy/behati.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Behati Prinsloo</p>
            <p className="text-center text-lg mt-2">Bridesmaid</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img 
              className="w-full md:w-9/12 rounded-full" 
              src="/images/dummy/adam.jpg" 
              alt="brides" 
            />
            <p className="mt-4 handwriting text-3xl md:text-5xl font-bold">Adam Levine</p>
            <p className="text-center text-lg mt-2">Groomsman</p>
          </div>
        </div>
      </div>
    </section>
  )
}