import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTER } from '@constants/router';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const cookie = request.cookies.get('access_token');

  if (pathname === ROUTER.LOGIN && cookie) {
    return NextResponse.redirect(`${origin + ROUTER.ACCOUNTS}`);
  }

  if (pathname === ROUTER.ACCOUNTS && !cookie) {
    return NextResponse.redirect(`${origin}`);
  }
}

export const config = {
  matcher: [ROUTER.LOGIN, ROUTER.ACCOUNTS],
};
