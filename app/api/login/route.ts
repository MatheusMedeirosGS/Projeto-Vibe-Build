import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validação básica
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar credenciais (mock - em produção seria banco de dados)
    const validUsers = [
      { email: 'demo@empresa.com', password: '123456', name: 'João Silva' },
      { email: 'admin@empresa.com', password: 'admin123', name: 'Admin User' },
    ];

    const user = validUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Criar resposta com cookie de sessão
    const response = NextResponse.json(
      {
        success: true,
        user: {
          email: user.email,
          name: user.name,
        },
      },
      { status: 200 }
    );

    // Definir cookie de sessão (simples, sem criptografia - para demo)
    response.cookies.set('user', JSON.stringify({ email: user.email, name: user.name }), {
      httpOnly: false,
      maxAge: 60 * 60 * 24, // 24 horas
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao processar login' },
      { status: 500 }
    );
  }
}
