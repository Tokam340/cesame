import React, { useState } from "react";
import "./index.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function MethodologiePage() {
  const [activeTab, setActiveTab] = useState(1);

  const expressions = [
    "J'ai passé un moment formidable",
    "Tu ne peux pas imaginer comme...",
    "C'était absolument génial !",
    "Je n'oublierai jamais cette expérience",
  ];

  const sujets = [
    "Raconter des vacances à un ami",
    "Annoncer une bonne nouvelle",
    "Inviter quelqu'un à un événement",
    "Demander des conseils personnels",
    "Partager une expérience récente",
  ];

  const connecteurs = [
    "D'abord",
    "Ensuite",
    "Puis",
    "Enfin",
    "En plus",
    "Aussi",
    "Surtout",
  ];

  const steps = [
    {
      id: 1,
      title: "Formule d'appel",
      time: "1 minute",
      description: "Commencez par une salutation chaleureuse et personnelle.",
      examples: [
        "Salut [prénom] !",
        "Coucou ma chère [prénom] !",
        "Bonjour mon cher [prénom] !",
      ],
    },
    {
      id: 2,
      title: "Introduction du sujet",
      time: "3 minutes",
      description: "Présentez le motif de votre message de façon directe.",
      examples: [
        "J'espère que tu vas bien ! Je t'écris pour te raconter...",
        "Comment ça va ? J'ai une nouvelle fantastique à t'annoncer !",
        "Je pense à toi et j'avais envie de partager avec toi...",
      ],
    },
    {
      id: 3,
      title: "Développement principal",
      time: "8 minutes",
      description:
        "Développez votre message avec des détails personnels et des émotions.",
      tips: [
        "Utilisez des anecdotes personnelles",
        "Exprimez vos sentiments et émotions",
        "Posez des questions à votre correspondant",
        "Utilisez un vocabulaire familier mais correct",
      ],
    },
    {
      id: 4,
      title: "Conclusion et formule de politesse",
      time: "3 minutes",
      description:
        "Terminez par une formule amicale et une invitation à répondre.",
      examples: [
        "J'ai hâte d'avoir de tes nouvelles !",
        "Écris-moi vite pour me raconter tes nouvelles !",
        "Gros bisous et à bientôt !",
      ],
    },
  ];


  const conseils = [
    {
      icon: "bi-clock",
      title: "Gestion du temps",
      items: [
        "Répartissez votre temps selon l'importance des tâches",
        "Gardez 5 minutes pour relire chaque texte",
        "Ne dépassez jamais le temps imparti pour une tâche",
        "Utilisez un brouillon pour planifier rapidement",
      ],
    },
    {
      icon: "bi-123",
      title: "Respect du nombre de mots",
      items: [
        "Comptez régulièrement vos mots pendant la rédaction",
        "Ni trop court (pénalité), ni trop long (hors sujet)",
        "Visez le milieu de la fourchette demandée",
        "Éliminez les répétitions pour optimiser l'espace",
      ],
    },
    {
      icon: "bi-pen",
      title: "Qualité de la langue",
      items: [
        "Variez votre vocabulaire et vos structures",
        "Évitez les répétitions lexicales",
        "Utilisez des connecteurs logiques appropriés",
        "Relisez pour corriger les erreurs évidentes",
      ],
    },
    {
      icon: "bi-people",
      title: "Adaptation au destinataire",
      items: [
        "Adaptez le registre de langue à la situation",
        "Respectez les codes de chaque type de texte",
        "Pensez à votre public cible",
        "Utilisez le ton approprié (familier, neutre, soutenu)",
      ],
    },
  ];

  return (
    <>
        <Navbar />
    <div className="methodologie-page">
      {/* --- Fil d’Ariane --- */}
      <nav className="breadcrumb">
        <ul>
          <li>Accueil</li>
          <span>›</span>
          <li>Expression Écrite</li>
          <span>›</span>
          <li className="active">Méthodologie</li>
        </ul>
      </nav>

      {/* --- Bannière principale --- */}
      <section className="header-section">
        <div className="header-content">
          <div className="icon">📝</div>
          <h1>Méthodologie Expression Écrite TCF</h1>
          <p>
            Maîtrisez les techniques de rédaction pour réussir les 3 tâches du
            TCF Canada.
          </p>

          <div className="stats">
            <div>
              <h5>60 minutes</h5>
              <p>Durée totale</p>
            </div>
            <div>
              <h5>3</h5>
              <p>Tâches</p>
            </div>
            <div>
              <h5>20</h5>
              <p>Points</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Onglets --- */}
      <section className="tabs">
        {[
          { id: 1, label: "Tâche 1 - Message Personnel", icon: "✉️" },
          { id: 2, label: "Tâche 2 - Article Informatif", icon: "📰" },
          { id: 3, label: "Tâche 3 - Argumentation", icon: "💬" },
        ].map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </section>

      {/* --- Contenu --- */}
      <section className="content-section">
        <div className="task-card">
      <div className="row align-items-center">
        {/* Texte de gauche */}
        <div className="col-md-7">
          <h4 className="mb-2">Tâche 1 - Message Personnel</h4>
          <p className="mb-2">
            <strong>Type :</strong> Message familier ou personnel
          </p>
          <p className="mb-0">
            Rédiger un message personnel (email, lettre) en adoptant un ton
            familier et en respectant les codes de communication informelle.
          </p>
        </div>

        {/* Bloc de droite */}
        <div className="col-md-5">
          <div className="row text-center">
            <div className="col-6">
              <div className="info-box bg-primary">
                <h5 className="mb-1">60–120 mots</h5>
                <small>Mots</small>
              </div>
            </div>
            <div className="col-6">
              <div className="info-box bg-secondary">
                <h5 className="mb-1">25</h5>
                <small>Points</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="structure-section">
      <h4 className="section-title">
        <i className="bi bi-diagram-3 text-primary me-2"></i>
        Structure recommandée
      </h4>

      <div className="steps-container">
        {steps.map((step) => (
          <div className="step-card" key={step.id}>
            <div className="card-body">
              <div className="step-header">
                <div className="badge-circle">{step.id}</div>
                <div className="step-info">
                  <div className="step-title-row">
                    <h5 className="step-title">{step.title}</h5>
                    <span className="badge-time">{step.time}</span>
                  </div>
                  <p className="step-description">{step.description}</p>

                  {step.examples && (
                    <div className="examples">
                      <h6>Exemples :</h6>
                      <ul>
                        {step.examples.map((ex, i) => (
                          <li key={i}>
                            <i className="bi bi-quote text-primary me-2"></i>
                            <em>{ex}</em>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.tips && (
                    <div className="tips-box">
                      <h6>
                        <i className="bi bi-lightbulb text-warning me-2"></i>
                        Conseils :
                      </h6>
                      <ul>
                        {step.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


    <div className="expressions-section">
      <div className="row">
        {/* ====== EXPRESSIONS UTILES ====== */}
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">
              <h5>
                <i className="bi bi-chat-dots text-primary me-2"></i>
                Expressions utiles
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                {expressions.map((exp, i) => (
                  <li key={i} className="mb-2">
                    <i className="bi bi-arrow-right text-primary me-2"></i>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ====== CONNECTEURS LOGIQUES ====== */}
        <div className="col-md-6 col-12 mb-4">
          <div className="card h-100">
            <div className="card-header">
              <h5>
                <i className="bi bi-link text-primary me-2"></i>
                Connecteurs logiques
              </h5>
            </div>
            <div className="card-body">
              <div className="connecteurs">
                {connecteurs.map((conn, i) => (
                  <span key={i} className="badge-item">
                    {conn}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="sujets-section">
      <div className="row">
        <div className="col-12">
          <h3 className="section-title mb-4">
            <i className="bi bi-list-ul text-primary me-2"></i>
            Sujets fréquents
          </h3>

          <div className="card">
            <div className="card-body">
              <div className="row">
                {sujets.map((sujet, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className="sujet-item d-flex align-items-center">
                      <span className="badge-num bg-secondary rounded-circle me-3">
                        {index + 1}
                      </span>
                      <span>{sujet}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="conseils-container container">
      <h3 className="text-center mb-5">
        <i className="bi bi-star text-warning me-2"></i>
        Conseils généraux pour réussir
      </h3>
    </div>



        {/* --- Conseils --- */}
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-header">
              <span className="tip-icon">⏰</span>
              <h5>Gestion du temps</h5>
            </div>
            <ul>
              <li>Répartissez votre temps selon les tâches</li>
              <li>Gardez 5 minutes pour relire</li>
              <li>Ne dépassez pas le temps imparti</li>
            </ul>
          </div>

          <div className="tip-card">
            <div className="tip-header">
              <span className="tip-icon">✍️</span>
              <h5>Qualité de la langue</h5>
            </div>
            <ul>
              <li>Variez votre vocabulaire et vos structures</li>
              <li>Relisez pour corriger les erreurs</li>
              <li>Utilisez des connecteurs logiques</li>
            </ul>
          </div>
        </div>

        {/* --- Section finale --- */}
        <div className="cta-section">
          <h3>Prêt à vous entraîner ?</h3>
          <p>
            Mettez en pratique cette méthodologie avec nos exercices et
            simulateurs en conditions d'examen.
          </p>
          <a href="/expression-ecrite" className="cta-button">
            ✍️ Commencer l'entraînement
          </a>
        </div>
      </section>
    </div>

    <Footer />
    </>
  );
}
