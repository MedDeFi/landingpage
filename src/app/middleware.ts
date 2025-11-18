import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Detect production by hostname (more reliable than NODE_ENV in Edge Runtime)
  const hostname = request.nextUrl.hostname;
  const isProduction = 
    hostname === 'meddefi.app' || 
    hostname === 'www.meddefi.app' ||
    process.env.VERCEL_ENV === 'production' ||
    process.env.NODE_ENV === 'production';

  // In production, only allow /doctors route
  if (isProduction) {
    // Redirect root to /doctors
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/doctors', request.url));
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
    return NextResponse.redirect(new URL('/doctors', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};