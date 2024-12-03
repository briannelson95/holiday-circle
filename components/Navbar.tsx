import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <Link href={'/'}>Home</Link>
            <Link href={'/dashboard'}>Dashboard</Link>
            <Link href={'/login'}>Login</Link>
            <Link href={'/signup'}>Sign Up</Link>
        </nav>
    )
}
