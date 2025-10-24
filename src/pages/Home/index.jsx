import React from "react";
import './index.css';
import Navbar from "../../components/Navbar";
import heroImg from "../../assets/banner.png"

function Home(){
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
                <button className="hero-btn">Commencer maintenant</button>
                </div>

                {/* Partie droite - Image */}
                <div className="hero-image">
                    <img src={heroImg} alt="Étudiant TCF Canada" />
                </div>
            </div>
        </header>
    </>
    );
}

export default Home;