"use client"

import { useAuthContext } from 'contexts/AuthContext'
import { redirect } from 'next/navigation'

export default function Home() {
    const auth = useAuthContext()
    if (auth?.user) return redirect('/home')
    return (
        <main className = "landing-page border-t-4 border-accent">
            {/* Adding the elements from the homepage layout.  images located in the 'public' folder */}
            <section className="floats flex flex-row justify-between mt-10">
                <ul className="pl-20 pt-24 w-1/3">
                    <li>
                        <h3 className="text-7xl text-accent py-3">VIEW</h3>
                        <p className="ml-10 text-3xl font-bold pb-10">CONTACTED BUSINESSES</p>
                    </li>
                    <li>
                        <h3 className="text-7xl text-accent py-3">ADD</h3>
                        <p className="ml-10 text-3xl font-bold pb-10">NEW CLIENTS</p>
                    </li>
                    <li>
                        <h3 className="text-7xl text-accent py-3">TRACK</h3>
                        <p className="ml-10 text-3xl font-bold pb-10">ONGOING OUTREACH</p>
                    </li>
                </ul>
                <div className="screenshots flex w-2/3 justify-center items-end ">
                    <img
                        className="outreach h-96 border-8 border-accent rounded-3xl"
                        src="/outreach-one.png"
                        alt='Screenshot of 100freelancers outreach page'
                    />
                    <img 
                        className="full-screen w-11/12 border-l-8 border-y-8 border-accent rounded-l-3xl"
                        src="/full-screen.png" 
                        alt="Screenshot of 100freelancers client tiles" 
                    />
                </div>
            </section>
        </main>    
    )
}
