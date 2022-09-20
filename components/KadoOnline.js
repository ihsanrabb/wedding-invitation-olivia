import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function KadoOnline() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="kado-online-icon">
        <img 
          src="/images/icon/ic-gift.png" 
          className="w-20"
          alt="kado online"
          onClick={openModal}
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-80"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-modal shadow-xl rounded-2xl">
                <div className="flower-bg"></div>
                <div className="transbox">
                  <button
                    type="button"
                    className="btn-modal-close"
                    onClick={closeModal}
                  >
                    &#x274C;
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-black"
                  >
                    Tanda Terima Kasih Digital
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-black">
                      Tanpa mengurangi rasa hormat, jika Anda ingin mengirimkan tanda kasih untuk kami, dapat scan QR-code berikut.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-2">
                    <p className="font-bold text-lg">Bank BCA</p>
                    <p className="font-bold">A/N AHMAD FUADILLAH SAM</p>
                    <p className="font-bold text-lg">4120025967</p>
                    <img 
                      src="/images/qr-fuad.jpg" 
                      className="w-8/12"
                      alt="qr code"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center mt-2">
                    <p className="font-bold">Bank MANDIRI</p>
                    <p>A/N Ahmad Fuadillah Sam</p>
                    <p>166 00 0279808 0</p>
                    {/* <img 
                      src="/images/arda-qr.jpeg" 
                      className="w-8/12"
                      alt="qr code"
                    /> */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}