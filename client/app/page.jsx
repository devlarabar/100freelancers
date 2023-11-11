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
                <ul className='p-0 pt-6 w-full lg:w-1/3'>
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
                <div className="flex flex-col-reverse items-center lg:w-3/5 xl:flex-row xl:relative ">
                    <img
                        className="border-8 border-accent rounded-3xl h-96 rounded-l-3xl mt-8 xl:relative xl:left-[-5rem] bottom-[-4rem] xl:z-10"
                        src="/outreach-one.png"
                        alt='Screenshot of 100freelancers outreach page'
                    />
                    <img 
                        className="hidden sm:block border-8 border-accent rounded-3xl xl:relative xl:right-[11rem] xl:self-start xl:z-1 xl:w-[40rem]"
                        src="/full-screen.png" 
                        alt="Screenshot of 100freelancers client tiles" 
                    />
                </div>

            </section>
        </main>    
    )
}
