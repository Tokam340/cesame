import React, { useState } from "react";
import "./index.css";
import Navbar from "../../components/Navbar";

export default function MethodologiePage() {
  const [activeTab, setActiveTab] = useState(1);

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
          <h4>
            Tâche {activeTab} -{" "}
            {activeTab === 1
              ? "Message Personnel"
              : activeTab === 2
              ? "Article Informatif"
              : "Argumentation"}
          </h4>
          <p>
            <strong>Type :</strong>{" "}
            {activeTab === 1
              ? "Message personnel (email, lettre)"
              : activeTab === 2
              ? "Texte informatif ou descriptif"
              : "Texte argumentatif"}
          </p>
          <p>
            {activeTab === 1
              ? "Rédigez un message personnel avec un ton clair et familier."
              : activeTab === 2
              ? "Présentez un fait ou une information de manière structurée."
              : "Exprimez votre opinion avec des arguments solides et organisés."}
          </p>
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
    </>
  );
}
