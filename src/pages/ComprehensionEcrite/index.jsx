import React, {useState} from "react";
import './index.css';
import Navbar from '../../components/Navbar'

import { FaLock } from "react-icons/fa";
import Modal from "../../components/ModalTest";

const series = Array.from({ length: 32 }, (_, i) => ({
  id: i + 1,
  title: `Série ${i + 1}`,
  description: "Exerce-toi avec les questions de compréhension écrite",
  link: "#", // tu pourras mettre le lien réel vers chaque série ici
}));

function ComprehensionEcrite (){
    const [open, setOpen] = useState(false);
    const [serieO, setSerieO] = useState(series);
    return(
    <>
        <Navbar />
        <header className="blue-header">
        <div className="header-content">
            <h1 className="header-title">Compréhension écrite</h1>
            <p className="header-subtitle">
            Développez vos compétences en lecture et analyse de textes.
            </p>
            <p className="header-subtitle">
            Entraînez-vous avec des exercices et des sujets authentiques du TCF Canada.
            </p>
        </div>
        </header>

        <section className="series-section">
      <h2 className="series-title">Liste des Séries TCF - Compréhension écrite</h2>
      <p className="series-subtitle">
        Choisis une série pour t'entraîner et améliorer ton score au TCF.
      </p>

      <div className="series-grid">
        {series.map((serie) => (
          <div key={serie.id} className="serie-card">
            <div className="serie-header">
              <div className="serie-number">{serie.id}</div>
              <h3>{serie.title}</h3>
              <div className="lock-style">
                <FaLock style={{ color: "#0a3d62", fontSize: "25px" }} />
            </div>
            </div>
            <p className="serie-description">{serie.description}</p>
            <a href={serie.link} className="serie-button" onClick={() => {setOpen(true); setSerieO(serie)}}>
              Premium
            </a>
          </div>
          
        ))}
      </div>
    </section>
    <Modal isOpen={open} onClose={() => setOpen(false)} serie={serieO}/>

    </>
    );
}

export default ComprehensionEcrite;