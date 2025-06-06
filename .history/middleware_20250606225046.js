import { NextResponse } from 'next/server';

/** @param {import('next/server').NextRequest} request */
export function middleware(request) {
  const token = request.cookies.get('__Secure-kinde-access-token');

  if (!token) {
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/create-meeting-from'],
};
