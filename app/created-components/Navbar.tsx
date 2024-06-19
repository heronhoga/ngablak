import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='p-3 font-semibold'>
        <nav>
            <Link href="/" className='mx-3'>Beranda</Link>
            <Link href="/profil" className='mx-3'>Profil Desa</Link>
            <Link href="/berita" className='mx-3'>Berita</Link>
            <Link href="/kelembagaan" className='mx-3'>Kelembagaan</Link>
            <Link href="/pemberdayaan" className='mx-3'>Pemberdayaan</Link>
            <Link href="/layanan" className='mx-3'>Layanan</Link>
            <Link href="/kontak" className='mx-3'>Kontak Kami</Link>
        </nav>
    </div>
  )
}

export default Navbar