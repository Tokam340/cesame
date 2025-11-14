import React, { useState } from "react";
import "./index.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Logo from '../../assets/Logo.png';
import {useNavigate} from'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [hasInvite, setHasInvite] = useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: 'Cameroun',
    city: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");


    try {
      const res = await fetch('https://cesamebackend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.message){
        setMessage("Inscription réussie ✅");
        alert("Inscription réussie ✅");
        navigate("/login");
      }
      else{
        setMessage(data.message || "Échec de l'inscription' ❌");
      }
    } catch (error) {
      setMessage("Erreur de connexion au serveur ⚠️");
    }
    setLoading(false);
  };

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
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom et Prénom <span className="required">*</span></label>
            <input
            type="text"
            name='username'
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrez votre nom et prénom"
            required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input
                type="email"
                name='email'
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre email"
                required />
            </div>

            <div className="form-group">
              <label>Pays <span className="required">*</span></label>
              <select defaultValue="Cameroun">
                <option
                  name='country'
                  onChange={handleChange}
                  value={formData.name}
                  required
                >Cameroun</option>
                {/* <option value="France">France</option>
                <option value="Canada">Canada</option>
                <option value="Autre">Autre</option> */}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Ville <span className="required">*</span></label>
              <input
                type="text"
                name='city'
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre ville"
                required />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <div className="phone-input">
                <input type="text" value="+237" readOnly />
                <input
                  type="tel"
                  name='phone'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="698235206"
                  maxLength="30"
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
                  name='password'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre mot de passe"
                  required
                />
                <i
                  className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              </div>
            </div>

            
          </div>

          <button type="submit"disabled={loading} className="btn-ins-primary">
            {loading ? <div className="loader"></div> : "Créer un compte"}
          </button>

          {message && <p className="message">{message}</p>}

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
