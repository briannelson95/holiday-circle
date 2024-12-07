"use client"
import { useUser } from '@/app/context/UserContext';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Navbar() {
    const { setUser } = useUser();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", { method: "POST" });

            if (res.ok) {
                setUser(null); // Clear user data in context
                router.push("/login"); // Redirect to login page
            } else {
                console.error("Failed to log out");
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    
    return (
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/signup'}>Sign Up</Link>
            <button onClick={handleLogout} className='px-2 py-1 rounded bg-red-500 text-white'>Log Out</button>
        </nav>
    )
}
