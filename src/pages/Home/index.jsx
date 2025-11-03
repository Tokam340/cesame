import React from "react";
import './index.css';
import Navbar from "../../components/Navbar";
import heroImg from "../../assets/banner.png"
import logo from '../../assets/Logo.png'


function FeatureCard({ color, icon, title, desc }) {
  return (
    <div className={`feature-card border-${color}`}>
      <div className="feature-icon">
        <span className={`avatar bg-${color}`}>
          <i className={`${icon} text-white`}></i>
        </span>
      </div>
      <h5 className="feature-title">{title}</h5>
      <p className="feature-desc">{desc}</p>
    </div>
  );
}

function Home(){

    const trainings = [
    {
      title: "Compréhension orale",
      desc: "Exercices audio interactifs",
      color: "primary",
      link: "/co",
    },
    {
      title: "Compréhension écrite",
      desc: "Textes variés et questions types",
      color: "success",
      link: "/ce",
    },
    {
      title: "Expression écrite",
      desc: "Sujets corrigés et conseils méthodologiques",
      color: "info",
      link: "#",
    },
    {
      title: "Expression orale",
      desc: "Simulations d’entretien et feedback personnalisé",
      color: "warning",
      link: "#",
    },
  ];

  const stats = [
    {
      icon: "bi bi-award",
      title: "Taux de réussite élevé",
      value: "+90%",
      color: "primary",
    },
    {
      icon: "bi bi-people",
      title: "Utilisateurs satisfaits",
      value: "+5 000",
      color: "secondary",
    },
    {
      icon: "bi bi-headset",
      title: "Support pédagogique",
      value: "7j/7",
      color: "success",
    },
  ];

  const packs = [
  {
    title: "Bronze",
    color: "#007bff",
    price: "9 900",
    duration: "15 Jours",
    badge: "PACK SMART",
    features: [
      "Compréhension écrite : 40 tests (+1000 textes)",
      "Compréhension orale : 38 tests (+1000 extraits sonores)",
      "Simulateur expression écrite : 6 essais inclus",
      "Expression orale : Sujets & corrections",
      "Expression écrite : Sujets & corrections",
      "Version 2025 conforme examen",
    ],
  },
  {
    title: "Silver",
    color: "#28a745",
    price: "14 900",
    duration: "30 Jours",
    badge: "POPULAIRE",
    features: [
      "Compréhension écrite : 40 tests (+1000 textes)",
      "Compréhension orale : 38 tests (+1000 extraits sonores)",
      "Simulateur expression écrite : 12 essais inclus",
      "Expression orale : Sujets & corrections",
      "Expression écrite : Sujets & corrections",
      "Version 2025 conforme examen",
    ],
  },
  {
    title: "Gold",
    color: "#ffc107",
    price: "22 900",
    duration: "60 Jours",
    badge: "MEILLEUR RAPPORT",
    features: [
      "Compréhension écrite : 40 tests (+1000 textes)",
      "Compréhension orale : 38 tests (+1000 extraits sonores)",
      "Simulateur expression écrite : 24 essais inclus",
      "Expression orale : Sujets & corrections",
      "Expression écrite : Sujets & corrections",
      "Version 2025 conforme examen",
    ],
  },
];

    return(
        <>
        <Navbar />

        <header className="hero">
            <div className="hero-container">
                {/* Partie gauche - Texte */}
                <div className="hero-text">
                <h1>
                    Préparez votre <span>TCF Canada</span> en toute confiance
                </h1>
                <p className="subtitle">
                    Des cours, des tests et une méthodologie claire pour progresser en
                    compréhension et expression.
                </p>
                <p className="description">
                    Rejoignez notre plateforme pour accéder à des exercices interactifs
                    et des sujets récents afin d’améliorer vos résultats à l’examen.
                </p>
                <a href="#entrainement" className="hero-btn">Commencer maintenant</a>
                </div>

                {/* Partie droite - Image */}
                <div className="hero-image">
                    <img src={heroImg} alt="Étudiant TCF Canada" />
                </div>
            </div>
        </header>

        <section className="section bg-gray">
      <div className="container">
        {/* ----- TITRE ----- */}
        <div className="heading-section">
          <div className="heading-subtitle">
            <span className="tx-primary">Nos atouts</span>
          </div>
          <div className="heading-title-section1">
            Pourquoi choisir notre <span className="tx-primary">CESAME</span> ?
          </div>
          <div className="heading-description">
            Des outils complets pour maximiser vos chances de succès
          </div>
        </div>

        {/* ----- ALERT ----- */}
        <div className="alert-box">
          <div className="alert-content">
            <i className="bi bi-info-circle icon-info"></i>
            <div>
              <strong>Nouveau sur le TCF Canada ?</strong>
              <p>Découvrez tout ce qu'il faut savoir sur cet examen essentiel pour l'immigration canadienne.</p>
              <a href="/tcf-canada" className="btn btn-primary-sm">
                <i className="bi bi-book me-2"></i> En savoir plus sur le TCF Canada
              </a>
            </div>
          </div>
        </div>

        {/* ----- CARTES ----- */}
        <div className="features-grid">
          <FeatureCard
            color="primary"
            icon="bi bi-lightbulb-fill"
            title="Entraînements sur mesure"
            desc="Exercices adaptés à votre niveau et à chaque compétence du TCF."
          />
          <FeatureCard
            color="success"
            icon="bi bi-graph-up-arrow"
            title="Suivi de progression"
            desc="Visualisez vos progrès et identifiez vos axes d’amélioration."
          />
          <FeatureCard
            color="info"
            icon="bi bi-clock-history"
            title="Simulations chronométrées"
            desc="Passez des examens blancs pour vous préparer dans les conditions réelles."
          />
        </div>
      </div>
    </section>

    <section className="banner-section">
      <div className="container">
        <div className="row">
          {/* TEXTE */}
          <div className="col-text">
            <h2 className="title-home">Atteignez vos objectifs TCF</h2>
            <p className="subtitle">
              Un accompagnement complet pour chaque étape de votre préparation.
            </p>
            <p className="description">
              Accédez à des ressources pédagogiques, des conseils d’experts et des exercices interactifs pour progresser rapidement.
            </p>
            <a href="#entrainement" className="btn-secondary">
              Je commence maintenant
            </a>
          </div>

          {/* IMAGE */}
          <div className="col-image">
            <img
              src={heroImg}
              alt="Entraînement TCF"
              className="hero-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>


    <section className="training-section" id="entrainement">
      <div className="container">
        <div className="heading-section">
          <h2 className="heading-title">
            Entraînez-vous sur <span className="tx-primary">toutes les épreuves</span>
          </h2>
          <p className="heading-description">
            Compréhension orale, écrite, expression et plus encore. <br />
            <span className="badge-success">Commencez gratuitement !</span>
          </p>
        </div>

        <div className="grid">
          {trainings.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`training-card bg-${item.color}`}
            >
              <p className="card-title">{item.title}</p>
              <p className="card-desc">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>


    <section className="success-section">
      <div className="overlay"></div>
      <div className="container">
        <div className="heading-section">
          <h2 className="heading-title">Votre réussite, notre priorité</h2>
          <p className="heading-description">
            Un accompagnement sur mesure pour chaque candidat
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className={`stat-card ${stat.color}`} key={index}>
              <i className={`${stat.icon} icon ${stat.color}`}></i>
              <h4 className="stat-title">{stat.title}</h4>
              <h2 className={`stat-value tx-${stat.color}`}>{stat.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="offers-header">
      <div className="container">
        <div className="heading-section">
          <h5 className="heading-subtitle">Nos offres</h5>
          <h2 className="heading-title">
            Choisissez votre <span className="tx-primary">formule</span>
          </h2>
          <p className="heading-description">
            Des formules adaptées à tous les besoins pour réussir le TCF
          </p>
        </div>
      </div>

      <div className="pricing-grid">
          {packs.map((pack, index) => (
            <div className="pricing-card" key={index}>
              <div
                className="badge"
                style={{ backgroundColor: pack.color }}
              >
                {pack.badge}
              </div>

              <h3 className="pack-title" style={{ color: pack.color }}>
                {pack.title}
              </h3>

              <div className="price" style={{ color: pack.color }}>
                {pack.price} <span>FCFA</span>
              </div>

              <div
                className="duration"
                style={{ backgroundColor: pack.color }}
              >
                Accès : {pack.duration}
              </div>

              <ul className="features">
                {pack.features.map((f, i) => (
                  <li key={i}>
                    <i className="fa fa-check-circle"></i> {f}
                  </li>
                ))}
              </ul>

              <button
                className="subscribe-btn"
                style={{ backgroundColor: pack.color }}
              >
                S’abonner
              </button>
            </div>
          ))}
        </div>
    </section>


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
              <p className="footer-desc">
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
    </>
    );
}

export default Home;