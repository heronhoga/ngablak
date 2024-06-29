import React from 'react'
import Navbar from '../created-components/Navbar'
import Image from 'next/image'
import Footer from '../created-components/Footer'

function Struktur() {
  return (
    <div>
      <Navbar />
      <div id="title" className="mt-10">
        <h1 className="text-center font-bold italic text-2xl md:text-3xl lg:text-4xl">
          STRUKTUR ORGANISASI DESA NGABLAK
        </h1>
        <hr className="mx-32 mt-3" />
        <h2 className="mt-3 text-center text-sm md:text-lg lg:text-xl">
          Kecamatan Wonosamodro, Kabupaten Boyolali
        </h2>
        <hr className="mx-32 mt-3" />
      </div>

      <div id="structurePhoto" className="flex justify-center mt-5">
        <div className="overflow-auto">
          <div className="w-[1154px] h-auto">
            <Image src="/images/struktur.png" alt="struktur organisasi" width={1154} height={1066} />
          </div>
        </div>
      </div>
      
      <hr className='mt-10' />
      <div id='description' className='mt-3 mx-3'>
        <p><span className='font-bold italic'>Garis Lurus Tegas</span> : Garis tanggung jawab</p>
        <p><span className='font-bold italic'>Garis Lurus Putus-putus</span> : Garis koordinasi</p>
      </div>

      <div id="footer" className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default Struktur
