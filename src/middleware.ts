import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hostname = request.nextUrl.hostname;
  
  // More reliable production detection - hostname check is primary
  // VERCEL_ENV is accessible in Edge Runtime, NODE_ENV may not be
  const isProduction = 
    hostname === 'meddefi.app' || 
    hostname === 'www.meddefi.app' ||
    process.env.VERCEL_ENV === 'production';

  // In production, only allow /doctors route
  if (isProduction) {
    // Redirect root to /doctors
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/doctors', request.url), 307);
    }
    
    // Allow /doctors and its sub-routes
    if (pathname.startsWith('/doctors')) {
      return NextResponse.next();
    }
    
    // Allow API routes
    if (pathname.startsWith('/api')) {
      return NextResponse.next();
    }
    
    // Allow static files (favicon, images, etc.)
    if (
      pathname.startsWith('/_next') ||
      pathname.startsWith('/favicon') ||
      pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|css|js|woff|woff2)$/)
    ) {
      return NextResponse.next();
    }
    
    // Block all other routes in production (return 404)
    return new NextResponse(null, { status: 404 });
  }

  // In development, redirect homepage to /doctors
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/doctors', request.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Explicitly match root and all other paths
    '/',
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};

