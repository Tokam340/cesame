import React from "react";
import './index.css';
import logo from '../../assets/Logo_blanc.png'

export default function Footer(){
    return(
        <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Colonne 1 */}
            <div className="footer-col">
              <a href="/" className="footer-logo">
                <img
                  src={logo}
                  alt="Cesame Logo"
                />
              </a>
              <p className="footer-description">
                Cesame - Plateforme de préparation au Test de Connaissance du
                Français (TCF). Entraînez-vous, suivez vos progrès et accédez à
                des ressources pour réussir votre examen TCF.
              </p>

              <ul className="footer-contact">
                {/* <li>
                  <a href="mailto:support@smartcf.net">
                    <i className="bi bi-envelope-plus"></i> support@smartcf.net
                  </a>
                </li> */}
                <li>
                  <a href="tel:+237688481029">
                    <i className="bi bi-telephone"></i> +237 640 45 42 29
                  </a>
                </li>
                <li className="footer-location">
                  <i className="bi bi-geo-alt"></i>
                  <span>
                    Cameroun, Douala, Bonamoussadi face Elu Hotel
                  </span>
                </li>
              </ul>
            </div>

            {/* Colonne 2 */}
            <div className="footer-col">
              <h4>Ressources</h4>
              <ul>
                <li>
                  <a href="/ce">Compréhension écrite</a>
                </li>
                <li>
                  <a href="/co">Compréhension orale</a>
                </li>
                <li>
                  <a href="#">Expression écrite</a>
                </li>
                <li>
                  <a href="#">Expression orale</a>
                </li>
              </ul>
            </div>

            {/* Colonne 3 */}
            <div className="footer-col">
              <h4>Cesame</h4>
              <ul>
                <li>
                  <a href="#">Qui sommes-nous ?</a>
                </li>
                <li>
                  <a href="#">Tarifs</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Paiements */}
      {/* <div className="footer-payments">
        <div className="container">
          <p>Paiements acceptés</p>
          <div className="payment-icons">
            <img src="/assets/images/payment/momo.png" alt="Mobile Money" />
            <img src="/assets/images/payment/om.png" alt="Orange Money" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
              alt="MasterCard"
            />
          </div>
        </div>
      </div> */}


      {/* Bas de page */}
      
      <div className="footer-bottom">
        <div className="container">
          <span>© 2025 Cesame. Tous droits réservés.</span>
          <a href="#" className="footer-link">
            Conditions d'utilisation
          </a>
        </div>
      </div>
    </footer>
    );
}