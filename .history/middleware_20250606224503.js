import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hasToken = request.cookies.get('__Secure-kinde-access-token');

  if (!hasToken) {
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/dashboard', request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/create-meeting-from'],
};
