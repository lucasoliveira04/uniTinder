import React from 'react';

export const LoginForm = ({ onSubmit }) => {
    return (
        <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white shadow-lg rounded-lg p-8 w-[400px] mx-auto"
        >
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
            <div className="form-group">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Digite seu email"
                    className="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password" className="block text-gray-700 font-medium">
                    Senha
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    className="border border-gray-300 rounded w-full p-2 mt-1 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
                Entrar
            </button>
            <div className="text-center">
                <button
                    type="button"
                    className="text-sm text-blue-500 hover:underline mt-2"
                    onClick={() => alert('Redirecionando para recuperação de senha...')}
                >
                    Esqueceu sua senha?
                </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
                Não tem uma conta?{' '}
                <a href="/register" className="text-blue-500 hover:underline">
                    Cadastre-se
                </a>
            </p>
        </form>
    );
};
