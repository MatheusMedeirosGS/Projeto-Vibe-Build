import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rotas públicas que não precisam de autenticação
  const publicRoutes = ['/', '/login', '/api/login'];

  // Se for rota pública, deixar passar
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Para rotas protegidas, verificar se tem cookie de autenticação
  const userCookie = request.cookies.get('user');

  if (!userCookie) {
    // Redirecionar para login se não estiver autenticado
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
