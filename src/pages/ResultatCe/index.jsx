import React, {useContext, useState} from "react";
import "./index.css";
import Navbar from "../../components/Navbar";
import {ScoreContext} from '../../constants/Context'
import {submit, tabP, tabO} from '../GlobalTestCe/index';
import Quest from '../../constants/dataCe';
import { Link } from "react-router-dom";

let level='NNA';
let niv = '';
let count = 0;

let tab1 = tabP();
let tab2 = tabO();

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

function optionColor(quest,ind){
    let color = "";
    if(tab2[ind] === quest[ind].correctAnswer) color="true";
    else color="false";
    return color;
}

function circleColor (i){
    let col = "";
    if(tab1[i]>0) col="";
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
    if(submit() >= 600 && submit() <= 699) level='C2';
    else if(submit() >= 500 && submit() <= 599) level='C1';
    else if(submit() >= 400 && submit() <= 499) level='B2';
    else if(submit() >= 300 && submit() <= 399) level='B1';
    else if(submit() >= 200 && submit() <= 299) level='A2';
    else if(submit() >= 100 && submit() <= 199) level='A1';
    
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
  

  tab.map((num, val) => {
    if(num > 0) count=count+1;
  })
}




export default function ResultatsCe() {

  const { score } = useContext(ScoreContext);
  let question = Quest[score].quest;
  const totalQuestions = 39;
  const [visible, setVisible] = useState(false);

  showLevel();
  showNiveau();
  nberQuest(tabP());

  return (

    <>

        <Navbar />

        <div className="container-ce">
      <div className="heading-section">
        <div className="heading-title">
          <span className="tx-primary">Compréhension Écrite</span>
        </div>
        <div className="heading-description">Série {score}</div>
      </div>
    </div>


    <div className="resultats-container">
      <h3 className="title">Résultats</h3>

      <div className="mb-2">
        <h6 className="subtitle">{count/2} sur 39 questions sont correctes.</h6>
      </div>

      {/* <div className="mb-3">
        <span className="time">Votre temps : 00:54:17</span>
      </div> */}

      <div className="score-alert">
        Vous avez atteint <span className="highlight">{submit()}</span> sur 699 point(s),
        ({Math.round(((submit()/699)*100)*100)/100}%)
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
          <Link className="link-result-ce" to='/ce'>
            <i className="fas fa-arrow-up me-1"></i> Revenir aux séries
          </Link>
        </button>
        <button className="btnce btn-dark" onClick={()=> setVisible(true)}>
          <i className="fa fa-eye me-1"></i> Voir les réponses
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
                    className={`answer-item ${ind===tab2[index] ? optionColor(question,index):""} ${tab2[index]!==question[index].correctAnswer ? trueOptionColor(ind,question,index) : ""}`}
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
