import React, {useState} from "react";
import './index.css';
import Quest from '../../constants/dataCe';
import Timer from "../../components/Timer";


function displayQuestion(quest){
    let tab = quest.text.split('/')
    return (
        <div className="questionText">
            <div>
                <span className='t_top'>{tab[0]}</span><br/>
                <span>{tab[1]}</span><br/>
                <span className='t_top'>{tab[2]}</span><br/>
                <span>{tab[3]}</span><br/>
                <div className='website'>
                    <span></span>
                    <span>www.cesame.com</span>
                </div>
                
            </div>
        </div>
    )
}



export default function GlobalTest(){

  

        const totalQuestions = 39;
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [optionColor, setOptionColor] = useState('');

        const handlePrev = () => {
            if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
        };

        const handleNext = () => {
            if (currentQuestion < totalQuestions) setCurrentQuestion(currentQuestion + 1);
        };


  let questions = Quest[0].quest;
  const question = questions[currentQuestion];

  const initialMin = 60;
const initialSec = 0;



    return(
        <>
    <section className="test-section">
      <div className="test-container">
        {/* Barre de progression numérotée */}
        <div className="progress-panel">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <span
              key={i}
              className={`progress-dot ${currentQuestion === i ? "active" : ""}`}
              onClick={() => setCurrentQuestion(i)}
            >
              {i + 1}
            </span>
          ))}
        </div>

        {/* Contenu question */}
        <div className="question-panel">
          <div className="question-header">
            <h6>
              {currentQuestion+1} / {totalQuestions}
            </h6>
            <h4>{Quest[0].title}</h4>
            <h6>{question.numPoint} points</h6>
          </div>

          <div className="question-card">

            <div className="question-text">
              {displayQuestion(question)}
            </div>

            <h5 className="question-title text-center">
              {question.question}
            </h5>

            <div className="answers-list">
              {question.optionText.map(
                (choice, index) => (
                  <div key={index}
                   className={`answer-item ${optionColor === question.options[index] ? 'active': ''}`}
                   onClick={()=> setOptionColor(question.options[index])}
                   >
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

          {/* <div className="stop-link">
            <a href="#!" className="text-danger">
              ⏹ Arrêter la série
            </a>
          </div> */}
        </div>

        {/* Barre temps restant */}
        <Timer
          key={1}
          initialMinutes={initialMin}
          initialSeconds={initialSec}
          //onComplete={onComplete}
        />
      </div>
    </section>

        </>
    );
}