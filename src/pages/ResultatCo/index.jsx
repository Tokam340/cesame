import React, {useContext, useState} from "react";
import "./index.css";
import Navbar from "../../components/Navbar";
import Quest from '../../constants/dataCo';
import { Link } from "react-router-dom";

let level='NNA';
let niv = '';
let count;
let sum;

let tab2 = JSON.parse(localStorage.getItem("tabPoint"));
let tab1 = JSON.parse(localStorage.getItem("tabOption"));

{tab1 == undefined ? sum = 0 : sum = tab2.reduce((ac,cv)=>{return ac+cv;}, 0)}



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

function optionColor(quest,ind){
    let color = "";
    if(tab1[ind] === quest[ind].correctAnswer) color="true";
    else color="false";
    return color;
}

function circleColor (i){
    let col = "";
    if(tab2[i]>0) col="";
    else col="selec";
    return col;
}

function trueOptionColor(i, quest, ind){
    let color="";
    if(i===quest[ind].correctAnswer) color="true";
    else color="";
    return color;
}

function showLevel(){
    if(sum >= 600 && sum <= 699) level='C2';
    else if(sum >= 500 && sum <= 599) level='C1';
    else if(sum >= 400 && sum <= 499) level='B2';
    else if(sum >= 300 && sum <= 399) level='B1';
    else if(sum >= 200 && sum <= 299) level='A2';
    else if(sum >= 100 && sum <= 199) level='A1';
    
    return level;
}

function showNiveau(){
  switch (level) {
    case 'NNA':
      niv='Niveau non atteint';
      break;

    case 'A1':
      niv='Vous avez obtenu A1';
      break;
    case 'A2':
      niv='Vous avez obtenu A2';
      break;
    case 'B1':
      niv='Vous avez obtenu B1';
      break;
    case 'B2':
      niv='Vous avez obtenu B2';
      break;
    case 'C1':
      niv='Vous avez obtenu C1';
      break;
    case 'C2':
      niv='Vous avez obtenu C2';
      break;
  
    default:
      break;
  }
}

function nberQuest(tab){
  count = 0;
  tab.map((num, val) => {
    if(num > 0) count=count+1;
  })
}




export default function ResultatsCo() {

  const score = parseInt(localStorage.getItem('num'));
  let question = Quest[score].quest;
  const totalQuestions = 39;
  const [visible, setVisible] = useState(false);


  showLevel();
  showNiveau();
  nberQuest(tab2);



  return (

    <>

        <Navbar />

        <div className="container-ce">
      <div className="heading-section">
        <div className="heading-title">
          <span className="tx-primary">Compréhension Orale</span>
        </div>
        <div className="heading-description">Série {score+1}</div>
      </div>
    </div>


    <div className="resultats-container">
      <h3 className="title">Résultats</h3>

      <div className="mb-2">
        <h6 className="subtitle-res-co">{count} sur 39 questions sont correctes.</h6>
      </div>

      {/* <div className="mb-3">
        <span className="time">Votre temps : 00:54:17</span>
      </div> */}

      <div className="score-alert">
        Vous avez atteint <span className="highlight">{sum}</span> sur 699 point(s),
        ({Math.round(((sum/699)*100)*100)/100}%)
      </div>

      <div className="niveau-global">
        <h2 className="niveau-text">{niv}</h2>
      </div>

      {/* Barre des niveaux */}
      {/* {{ height: index === 3 ? "40px" : "50px" }} */}
      <div className="niveau-bar">
        {["NNA", "A1", "A2", "B1", "B2", "C1", "C2"].map((niveau, index) => (
          <div key={niveau} className="niveau-item">
            <div
              className={`bar ${
                niveau === level ? "bar-active" : "bar-inactive"
              }`}
              style={{ height: "50px" }}
              
            ></div>
            <div className="niveau-label">{niveau}</div>
          </div>
        ))}
      </div>

      {/* Boutons */}
      <div className="buttons">
        <button className="btnce btn-prima">
          <Link className="link-result-ce" to='/co'>
            <i className="fas fa-arrow-up me-1"></i> Revenir aux séries
          </Link>
        </button>
        <button className="btnce btn-dark" onClick={visible ? ()=> setVisible(false) : ()=> setVisible(true)}>
          <i className="fa fa-eye me-1"></i>{visible ? "Cacher les reponses" :"Voir les réponses"}
        </button>
      </div>
    </div>


        
          
      <div className={`test-container ${visible === false ? 'invisible' : ''}`} >
        {/* Barre de progression numérotée */}
        <div className="progress-panel">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <span
              key={i}
              className={`progress-dot-result ${circleColor(i)}`}
            >
            <a href={`#${i}`}> {i + 1} </a>
            </span>
          ))}
        </div>
        {
        question.map((opt, index) => (
          <>
        {/* Contenu question */}
        <div className="question-panel" 
          key={index}
          id={`${question[index].id}`}
        >
          <div className="question-header">
            <h6>
              {index+1} / {totalQuestions}
            </h6>
            <h4>{Quest[score].title}</h4>
            <h6>{question[index].numPoint} points</h6>
          </div>

          <div className="question-card">

            <div className="question-text">
                { question[index].image ? <img className='question-img' src={question[index].image}/> : ""}
              {displayQuestion(opt)}
            </div>

            <h5 className="question-title text-center">
              {question.question}
            </h5>

            <div className="answers-list">
              {opt.options.map(
                (choice, ind) => (
                  <div
                    key={ind}
                    className={`answer-item ${ind===tab1[index] ? optionColor(question,index):""} ${tab1[index]!==question[index].correctAnswer ? trueOptionColor(ind,question,index) : ""}`}
                  >
                    <div className="avatar">{String.fromCharCode(65 + ind)}</div>
                    <span>{choice}</span>
                  </div>
                )
              )}
            </div>

          </div>
        </div>
        </>))}
      </div>
      
          
        


    </>
  );
}
