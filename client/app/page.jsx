"use client"

import { useAuthContext } from 'contexts/AuthContext'
import { redirect } from 'next/navigation'

export default function Home() {
    const auth = useAuthContext()
    if (auth?.user) return redirect('/home')
    return (
        <main className = "border-t-4 border-accent pt-8">
            {/* Adding the elements from the homepage layout.  images located in the 'public' folder */}
            <section className="floats">
                <ul className='p-0 pt-4 w-1/3'>
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
                <div className="screenshots flex w-2/3 justify-end items-end relative">
                    <img
                        className="border-8 border-accent relative left-[6rem] bottom-[-3rem] self-end rounded-3xl h-96 rounded-l-3xl"
                        src="/outreach-one.png"
                        alt='Screenshot of 100freelancers outreach page'
                    />
                    <img 
                        className="full-screen w-8/12 self-start border-8 border-accent rounded-3xl"
                        src="/full-screen.png" 
                        alt="Screenshot of 100freelancers client tiles" 
                    />
                </div>

            </section>
        </main>    
    )
}
