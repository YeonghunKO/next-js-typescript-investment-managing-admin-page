import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const cookie = request.cookies.get('access_token');

  if (pathname === '/' && cookie) {
    return NextResponse.redirect(`${origin}/accounts`);
  }

  if (pathname === '/accounts' && !cookie) {
    return NextResponse.redirect(`${origin}`);
  }
}

export const config = {
  matcher: ['/', '/accounts'],
};
