import React from 'react'

export default function SignIn() {
    return (
        <main>
            <h1>Sign In</h1>
            <form action={"/api/auth/signin"} method='POST'>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' required />
                <button type='submit'>Sign In</button>
            </form>
        </main>
    )
}
