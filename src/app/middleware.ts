import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirects the homepage '/' to '/doctors'
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/doctors', request.url));
  }
}

// Optional: Only run the middleware for the path you want to check
export const config = {
  matcher: ['/'],
};