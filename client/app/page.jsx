"use client"

import { useAuthContext } from 'contexts/AuthContext'
import { redirect } from 'next/navigation'

export default function Home() {
    const auth = useAuthContext()
    if (auth?.user) return redirect('/home')
    return (
        <main className = "border-t-4 border-accent pt-8">
            {/* Adding the elements from the homepage layout.  images located in the 'public' folder */}
            <section className="floats block lg:flex flex-row justify-between mt-0">
                <ul className='p-0 pt-4 w-full lg:w-2/5'>
                    <li>
                        <h3>VIEW</h3>
                        <p>CONTACTED BUSINESSES</p>
                    </li>
                    <li>
                        <h3>ADD</h3>
                        <p>NEW CLIENTS</p>
                    </li>
                    <li>
                        <h3>TRACK</h3>
                        <p>ONGOING OUTREACH</p>
                    </li>
                </ul>
                <div className="flex flex-col-reverse items-center lg:w-3/5 lg:flex-row lg:relative ">
                    <img
                        className="border-8 border-accent rounded-3xl h-80 rounded-l-3xl mt-8 lg:relative xl:left-[-3rem] xl:bottom-[-5rem] lg:z-10 lg:bottom-[-2rem]"
                        src="/outreach-one.png"
                        alt='Screenshot of 100freelancers outreach page'
                    />
                    <img 
                        className="hidden sm:block border-8 border-accent rounded-3xl lg:relative lg:right-[4rem] lg:self-start lg:z-1 xl:w-[40rem] min-[1000px]:w-[28rem] min-[1170px]:w-[33rem]  xl:right-[8rem] "
                        src="/full-screen.png" 
                        alt="Screenshot of 100freelancers client tiles" 
                    />
                </div>

            </section>
        </main>    
    )
}
