import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-background">
      <div className="pill pill1"></div>
      <div className="pill pill2"></div>
      <div className="pill pill3"></div>

      <div className="login-card">
        <h1 className="brand">FarmaPlus<span>+</span></h1>
        <h2>Iniciar sesión</h2>
        <form>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit">Entrar</button>
        </form>

        <div className="extras">
          <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
          <p>¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
