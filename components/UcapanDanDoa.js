import { useRouter } from 'next/router'

export default function UcapanDanDoa({bestPrayList}) {
  const router = useRouter()
  
  return (
    <section className="mt-20 mx-auto bg-secondary bg-opacity-10 pb-10 pt-10" id="section-ucapan">
      <div className="heading-background">
        <h1>UCAPAN & DOA</h1>
        <h2>Olivia & Rifan</h2>
      </div>
      {/* <div className="mt-10">
        <SliderUcapan />
      </div> */}
      <div className="mx-4 lg:mx-0">
        <div className="mt-2 max-w-xl mx-auto">
          {bestPrayList < 1 && (
            <h1 className="text-center mb-10 mt-10">Tunggu sebentar ya...</h1>
          )}
          {bestPrayList && (
            bestPrayList.map(item => (
              <div className="card-doa" key={item.id}>
                <p className="text-lg mb-3">{item.data.bestPray}</p>
                <hr className="border-gray-400"></hr>
                <p className="mt-1 text-md font-semibold">{item.data.name}</p>
                <small>{item.data.group}</small>
              </div>
            ))
          )}
          <div className="flex justify-center items-center">
            <button 
              className="btn-primary font-desc text-lg" 
              type="button"
              onClick={() => router.push(`/ucapan-dan-doa`)}
            >Lihat Semua</button>
          </div>
        </div>
      </div>
    </section>
  )
}