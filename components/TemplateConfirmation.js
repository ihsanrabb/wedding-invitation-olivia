export default function TemplateConfirmation({form, sessionAttend}) {
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="shadow p-3 rounded bg-white">
        <p>
          Kepada Bapak/Ibu/Saudara/i,
          <br/>
          <span className="font-semibold">{form.name}</span>
          <br />
          {form.attendanceConfirmation === "Y" ? (
            <>
              <br />
              Terima kasih telah mengkonfirmasi kehadiran anda di acara pernikahan kami.
              <br/>
            </>
          ) : (
            <>
              <br />
              Terima kasih telah mengirimkan ucapan dan doa kepada kami.
              <br/>
            </>
          )}
          {form.attendanceConfirmation === "Y" && (
            <>
              <br />
              Dimohon untuk hadir sesuai dengan jam yang sudah ditentukan.
              <br />
              <br/>
              Sampai jumpa!
            </>
          )}
          <br />
          Rifan & Olivia
        </p>
        {form.attendanceConfirmation === "Y" && (
          <>
            <img 
              className="w-full mt-2 mb-2 border-maroon border-2" 
              src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${sessionAttend.documentId}`}
            />
            <p>Capture dan Tunjukkan QR Code ini kepada penerima tamu.</p>
          </>
        )}
      </div>
    </section>
  )
}