import React from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>¿Olvidaste tu contraseña?</h2>
        <p>Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.</p>
        <form>
          <input
            type="email"
            placeholder="Correo electrónico"
            required
          />
          <button type="submit">Enviar enlace</button>
        </form>
        <p><a href="/login">Volver al inicio de sesión</a></p>
      </div>
    </div>
  );
}

export default ForgotPassword;
