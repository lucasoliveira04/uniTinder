import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../../public/css/register.css";

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-box">
      <h2 className="register-title">
        Crie sua conta no <span>UniTinder</span>
      </h2>
      <form className="register-form">
        <input type="text" placeholder="Nome" className="register-input" />
        <input type="email" placeholder="E-mail" className="register-input" />
        <input type="tel" placeholder="Telefone" className="register-input" />
        <input
          type="date"
          placeholder="Data de Nascimento"
          className="register-input"
        />
        <select className="register-input">
          <option value="">Gênero</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            className="register-input"
          />
          <button
            type="button"
            className="toggle-password-btn"
            onClick={toggleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="container-button-register">
          <button className="register-btn">Registrar</button>
        </div>
      </form>
      <p className="login-option">
        Já tem uma conta? <Link to="/login">Entrar</Link>
        <span className="terms-container">
          <input type="checkbox" id="terms" className="terms-checkbox" />
          <label htmlFor="terms" className="terms-label">
            Aceitar <Link to="/terms">termos de uso</Link>
          </label>
        </span>
      </p>
    </div>
  );
};
