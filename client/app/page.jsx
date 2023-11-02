"use client"

import { useAuthContext } from 'contexts/AuthContext'
import { redirect } from 'next/navigation'
import Image from 'next/image'  // Import Image component from Next

export default function Home() {
    const auth = useAuthContext()
    if (auth?.user) return redirect('/home')
    return (
        <main className = "landing-page">
            <h2>Welcome to 100freelancers!</h2>
            <p>Organize and keep track of freelance client outreach.</p>  {/*Added quick discription of what 100Freelancers is*/}

            {/* Adding the elements from the homepage layout */}
            
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
            <Image 
                src="/Test-Screenshot.png"
                alt='Screenshot of 100freelancers pages'
                width={1000}
                height={1000}
            />
        </main>    
    )
}
