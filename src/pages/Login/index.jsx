import React, { useState } from "react";
import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Logo from '../../assets/Logo.png'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
        <Navbar />
    <div className="login-container">
      <div className="heading-section">
        <div className="heading-subtitle">
          <span className="tx-primary">Connexion</span>
        </div>
        <div className="heading-title">
          Accédez à votre <span className="tx-primary">espace personnel</span>
        </div>
      </div>

      <a href="/" className="logo-link">
          <img
            src={Logo}
            height="100"
            alt="Logo clair"
            className="auth-logo"
          />
        </a>

      <div className="login-content">

        <div className="login-card">
          <div className="card-body">
            <h3>Se connecter</h3>
            <p className="text-muted">
              Veuillez saisir vos identifiants pour accéder à votre compte.
            </p>

            <form className="login-form">
              <div className="form-group">
                <label>
                  Adresse e-mail ou nom d'utilisateur<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Saisissez votre adresse e-mail"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Mot de passe<span>*</span>
                </label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Saisissez votre mot de passe"
                    id="password"
                    required
                  />
                    <i
                      className={`fa ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>
              </div>

              <div className="options-login">
                {/* <div className="remember">
                  <input type="checkbox" className="remember-input" />
                  <label className="remember-label">Se souvenir de moi</label>
                </div> */}
                <a href="/forgot" className="forgot-link">
                  Mot de passe oublié ?
                </a>
              </div>

              <button type="submit" className="btn-con-primary">
                Se connecter
              </button>

              <p className="register-text">
                Vous n'avez pas encore de compte ?{" "}
                <a href="/register" className="tx-primary">
                  Créer un compte
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default LoginPage;
