import React, {useState, useRef, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import Quest from '../../constants/dataCo';
import Timer from "../../components/Timer";
import {ScoreContext} from '../../constants/Context'


function displayQuestion(quest, next, aud){

    if(quest.audio){
        return(
            <audio
                ref={aud}
                src={quest.audio}
                onEnded={next}
                controls
                className='audio'
                controlsList="nodownload noplaybackrate"
            ></audio>
        )
    }
}

function displayColor(ind, quest, set, tab, tabP, i){
    set(quest.options[ind]);
    if(tab[i] === ""){
        tab.push(ind);
    }
    else{
        tab[i] = ind;
    }

    if(tab[i] === quest.correctAnswer){
        if(tabP[i] === "") tabP.push(quest.numPoint);
        else tabP[i] = quest.numPoint
    }
    else{
        if(tabP[i] === "") tabP.push(0);
        else tabP[i] = 0
    }  
}


let tabAnswer = [];
let tabOption = [];
let tabPoint = [];

export function submit () {
    const sum = tabPoint.reduce((ac,cv)=>{return ac+cv;}, 0);
    return sum;
}

export function tabP(){
    return tabPoint;
}

export function tabO(){
    return tabOption;
}



export default function GlobalTestCo(){

  

    const totalQuestions = 39;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionColor, setOptionColor] = useState('');
    let [answer, setAnswer] = useState(tabAnswer);
    const audioRef = useRef(null);
    const [indexActuel, setIndexActuel] = useState(0);

    const navigate = useNavigate();
    
        const { score } = useContext(ScoreContext);
    
        useEffect(
          function verify (){
            if(score === null) {navigate('/co')}
          }
        )

        const onComplete = () => {
          alert('Temps écoulé !');
          navigate("/co/result");
        }



        let option1 = useRef(null);
        let option2 = useRef(null);
        let option3 = useRef(null);
        let option4 = useRef(null);
    
        let option_array = [option1,option2,option3,option4]

        const handlePrev = () => {
            if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
            option_array.map((option, i)=>{
                if(tabOption[currentQuestion-1] === i){
                    option.current.classList.add('active');
                }
                else{
                    option.current.classList.remove('active');
                }
            })

            const prochainIndex = (indexActuel + 1) % question.length;
            setIndexActuel(prochainIndex);
            //setTimeout(() => audioRef.current.play(), 100);
        };

        const handleNext = () => {
            tabAnswer.push(currentQuestion);
            setAnswer(tabAnswer);
            if (currentQuestion < totalQuestions) setCurrentQuestion(currentQuestion + 1);
            option_array.map((option, i)=>{
                if(tabOption[currentQuestion+1] === i && tabOption[currentQuestion] === i){
                    option.current.classList.add('active');
                }
                else{
                    option.current.classList.remove('active');
                }
            })

            const prochainIndex = (indexActuel + 1) % question.length;
            setIndexActuel(prochainIndex);
            //setTimeout(() => audioRef.current.play(), 100);
        };


    let questions;
    {score !== null ? questions=Quest[score].quest : questions=Quest[0].quest};
    const question = questions[currentQuestion];

    const initialMin = 35;
    const initialSec = 0;
    const time = 2100;

          //console.log("tabOption = "+tabOption[currentQuestion] + " et currentq = "+currentQuestion);

        

    return(
        <>
    <section className="test-section">
      <div className="test-container">
        {/* Barre de progression numérotée */}
        <div className="progress-panel">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <span
              key={i}
              className={`progress-dot ${currentQuestion === i ? "ans" : ""} ${answer.includes(i) ? "active" : ""}`}
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
            <h4>{score !== null ? Quest[score].title : Quest[0].title}</h4>
            <h6>{question.numPoint} points</h6>
          </div>

          <div className="question-card">

            <div className="question-text">
                { question.image ? <img className='question-img' src={question.image}/> : ""}
              {displayQuestion(question, handleNext, audioRef)}
            </div>

            <h5 className="question-title text-center">
              Écoutez les 4 propositions, choisissez celle qui correspond
            </h5>

            <div className="answers-list">
              {question.optionText.map(
                (choice, index) => (
                  <div 
                    key={index}
                    ref={option_array[index]}
                    className={`answer-item ${optionColor === question.options[index] ? 'active': ''}`}
                    onClick={()=> displayColor(index, question, setOptionColor, tabOption, tabPoint, currentQuestion)}
                  >
                    <div className="avatar">{String.fromCharCode(65 + index)}</div>
                    <span>{choice}</span>
                  </div>
                )
              )}
            </div>

            <div className="nav-buttons">
              {currentQuestion > 0 ? <button className="btn-secondary" onClick={handlePrev}>
                ⬅ Précédent
              </button> : <></>}

              {currentQuestion < 38 ? <button
                className="btn-primary"
                onClick={handleNext}
                disabled={tabOption[currentQuestion] === undefined}
              >
                Suivant ➡
              </button> : <></>}

              {currentQuestion == 38 ? <button
                className="btn-primary"
                onClick={()=>navigate('/co/result')}
                disabled={tabOption[currentQuestion] === undefined}
              >
                Soumettre ➡
              </button> : <></>}
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
          totalTime={time}
          onComplete={onComplete}
          
        />
      </div>
    </section>

        </>
    );
}