import React, {useState} from "react";
import './index.css';



export default function GlobalTest(){

        const totalQuestions = 39;
        const [currentQuestion, setCurrentQuestion] = useState(1);

        const handlePrev = () => {
            if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
        };

        const handleNext = () => {
            if (currentQuestion < totalQuestions) setCurrentQuestion(currentQuestion + 1);
        };

        

    return(
        <>
    <section className="test-section">
      <div className="test-container">
        {/* Barre de progression numérotée */}
        <div className="progress-panel">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <span
              key={i}
              className={`progress-dot ${currentQuestion === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentQuestion(i + 1)}
            >
              {i + 1}
            </span>
          ))}
        </div>

        {/* Contenu question */}
        <div className="question-panel">
          <div className="question-header">
            <h6>
              {currentQuestion} / {totalQuestions}
            </h6>
            <h4>Série 2</h4>
            <h6>3 points</h6>
          </div>

          <div className="question-card">
            <div className="question-image">
              <small className="text-danger">
                Cliquez sur l'image pour l'agrandir !
              </small>
              <img
                src="https://via.placeholder.com/600x300"
                alt="Question"
                className="responsive-img"
              />
            </div>

            <div className="question-text">
              <p>
                Vous voulez découvrir d’autres cultures ? Vous voulez parler anglais,
                français, espagnol ? <br />
                Leçons à la maison ou au centre Bemardisilmo. <br />
                Information au 01 03 02 06 65.
              </p>
            </div>

            <h5 className="question-title text-center">
              Qu’est-ce que propose cette publicité ?
            </h5>

            <div className="answers-list">
              {["Des cours", "Des emplois", "Des livres", "Des voyages"].map(
                (choice, index) => (
                  <div key={index} className="answer-item">
                    <div className="avatar">{String.fromCharCode(65 + index)}</div>
                    <span>{choice}</span>
                  </div>
                )
              )}
            </div>

            <div className="nav-buttons">
              <button className="btn-secondary" onClick={handlePrev}>
                ⬅ Précédent
              </button>
              <button
                className="btn-primary"
                onClick={handleNext}
                disabled={currentQuestion === totalQuestions}
              >
                Suivant ➡
              </button>
            </div>
          </div>

          <div className="stop-link">
            <a href="#!" className="text-danger">
              ⏹ Arrêter la série
            </a>
          </div>
        </div>

        {/* Barre temps restant */}
        <div className="bottom-bar">
          <div className="bottom-container">
            <span className="time-label">Temps restant : 00:57:13</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "95%" }}></div>
            </div>
            <span>⏰</span>
          </div>
        </div>
      </div>
    </section>

        </>
    );
}