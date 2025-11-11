import React, { useState } from "react";
import "./index.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Logo from '../../assets/Logo.png'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [hasInvite, setHasInvite] = useState(false);

  return (

    <>
        <Navbar />

        <div className="register-container">
      {/* Section Titre */}
      <div className="heading-section">
        <div className="heading-subtitle">Inscription</div>
        <div className="heading-title">
          Enregistrement <span className="tx-primary">Utilisateur</span>
        </div>
      </div>

      {/* Logo */}
      <div className="logo-box">
        <img src={Logo} alt="Cesame" />
      </div>

      {/* Carte principale */}
      <div className="register-card">
        <h3>Inscription</h3>
        <p className="text-muted">Inscrivez-vous ici pour continuer.</p>

        {/* Code d'invitation */}
        {/* <div className="invite-card">
          <label className="switch">
            <input
              type="checkbox"
              checked={hasInvite}
              onChange={() => setHasInvite(!hasInvite)}
            />
            <span className="slider"></span>
          </label>
          <span>J'ai un code d'invitation</span>
        </div> */}

        {/* Formulaire */}
        <form className="register-form">
          <div className="form-group">
            <label>Nom et Prénom <span className="required">*</span></label>
            <input type="text" placeholder="Entrez votre nom et prénom" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" placeholder="Entrez votre email" required />
            </div>

            <div className="form-group">
              <label>Pays <span className="required">*</span></label>
              <select defaultValue="Cameroun">
                <option value="Cameroun">Cameroun</option>
                {/* <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Autre">Autre</option> */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Ville <span className="required">*</span></label>
              <input type="text" placeholder="Entrez votre ville" required />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <div className="phone-input">
                <input type="text" value="+237" readOnly />
                <input
                  type="tel"
                  placeholder="698235206"
                  maxLength="15"
                  required
                />
              </div>
              <small><i className="fab fa-whatsapp"></i> WhatsApp si possible !</small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group password-group">
              <label>Mot de passe <span className="required">*</span></label>
              <div className="password-wrapper-register">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  required
                />
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            <div className="form-group password-group">
              <label>Confirmer le mot de passe <span className="required">*</span></label>
              <div className="password-wrapper-register">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirmez votre mot de passe"
                  required
                />
                <i
                  className={`fa ${showConfirm ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowConfirm(!showConfirm)}
                ></i>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-ins-primary">Créer un compte</button>

          <p className="login-link">
            Vous avez déjà un compte ? <a href="/login">Connexion</a>
          </p>
        </form>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default Register;
