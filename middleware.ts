import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTER } from '@constants/router';
import { ACCESS_TOKEN } from '@constants/cookie';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const cookie = request.cookies.get(ACCESS_TOKEN);

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
