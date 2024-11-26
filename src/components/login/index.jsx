import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="login-box">
            <h2 className="login-title">Bem-vindo ao <span>UniTinder</span></h2>
            <form className="login-form">
                <input
                    type="email"
                    placeholder="E-mail"
                    className="login-input"
                />
                <div className="password-input-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Senha"
                        className="login-input"
                    />
                    <button
                        type="button"
                        className="toggle-password-btn"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="container-button-login">
                    <button className="login-btn">Entrar</button>
                </div>
            </form>
            <p className="register-option">
                Não tem uma conta? <Link to="/register">Registre-se</Link>
            </p>
        </div>
    );
};
