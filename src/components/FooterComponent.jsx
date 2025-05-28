import { Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterComponent = () => {
  return (
    <>
        <footer className="py-12 bg-footer text-white">
            <div className='flex items-start justify-between px-40'>
                <aside className='flex flex-col items-start gap-y-[20px]'>
                    <h2 className='text-[24px]'>ripple<span className='text-[#048d4c]'>Eco</span></h2> 
                    <p >
                    Create ripples of positive environmental change 
                    <br />
                    through community action and awareness.
                    </p>
                    <Send />

                </aside>
                <div className='flex items-center gap-x-16'>
                    <nav className='flex flex-col items-start gap-y-3'>
                        <h6 className='text-[20px]' >Quick Links</h6>
                        <div className='flex flex-col items-start gap-y-2'>
                            <Link href='' className="link link-hover">Eco Event</Link>
                            <Link href='' className="link link-hover">Leaderboard</Link>
                        </div>
                    </nav>
                    <nav className='flex flex-col items-start gap-y-3'>
                        <h6 className='text-[20px]' >Community</h6>
                        <div className='flex flex-col items-start gap-y-2'>
                            <Link href='' className="link link-hover">Take Action</Link>
                            <Link href='' className="link link-hover">Discussion</Link>
                        </div>
                    </nav>
                    <nav className='flex flex-col items-start gap-y-3'>
                        <h6 className='text-[20px]' >Enviroment Monitor</h6>
                        <div className='flex flex-col items-start gap-y-2'>
                            <Link href='' className="link link-hover">Natural Disaster</Link>
                            <Link href='' className="link link-hover">Air Quality</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <hr className='mt-10'/>
            <div className='text-right mt-7 px-40'>
                <p>© 2025 RippleEco. All rights reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default FooterComponent