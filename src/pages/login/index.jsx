import {LoginForm } from "../../componets/_loginForm"

export const LoginPage = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        console.log('Login:', { email, password });
        alert('Login realizado com sucesso!');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
           <LoginForm onSubmit={handleLogin}/>
        </div>
    );
}