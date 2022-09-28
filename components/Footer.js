export default function Footer() {
  return (
    <footer>
      <div className="center-flex-col p-5 bg-primary">
        <p className="handwriting text-2xl">Rifan & Olivia</p>
        <div className="mt-3 flex gap-1 items-center">
          {/* <img 
            src="/images/afs-logo.png" 
            className="w-7 mr-1" 
            alt="icon-instagram" 
          /> */}
          <a href="https://www.instagram.com/onetap.invitation/" target="_blank">
            <img 
              src="/images/icon/instagram.svg" 
              className="w-7 mr-1" 
              alt="icon-instagram" 
            />
          </a>
          <p className="text-sm">Onetap Invitation</p>
        </div>
      </div>
    </footer>
  )
}