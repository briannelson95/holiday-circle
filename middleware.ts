import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('auth_token');

    if (!authToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*'], // Apply middleware only to /dashboard
};
