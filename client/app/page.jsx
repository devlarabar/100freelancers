"use client"

import { useAuthContext } from 'contexts/AuthContext'
import { redirect } from 'next/navigation'

export default function Home() {
    const auth = useAuthContext()
    if (auth?.user) return redirect('/home')
    return (
        <main className = "landing-page">
            {/* Adding the elements from the homepage layout.  images located in the 'public' folder */}
            <section className="floats">
                <ul>
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
                <div className="screenshots flex w-2/3 justify-center items-end ">
                    <img
                        className="outreach h-96 "
                        src="/outreach-one.png"
                        alt='Screenshot of 100freelancers outreach page'
                    />
                    <img 
                        className="full-screen w-11/12"
                        src="/full-screen.png" 
                        alt="Screenshot of 100freelancers client tiles" 
                    />
                </div>
            </section>
        </main>    
    )
}
