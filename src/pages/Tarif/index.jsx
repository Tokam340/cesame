import React from "react";
import "./index.css";
import Navbar from "../../components/Navbar";

const TarifsSection = () => {
  const packs = [
    {
      title: "Bronze",
      price: "9 900 FCFA",
      access: "Accès 15 Jours",
      color: "#007bff",
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
      price: "14 900 FCFA",
      access: "Accès 30 Jours",
      color: "#28a745",
      popular: true,
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
      price: "22 900 FCFA",
      access: "Accès 60 Jours",
      color: "#ffc107",
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

  return (
    <>
        <Navbar />
    <section className="tarifs-section">
      <div className="tarifs-header">
        <h1>Nos tarifs</h1>
        <p>
          Choisissez la formule qui correspond à vos besoins et votre budget.
          Tous nos packs incluent l'accès complet aux 4 compétences du TCF.
        </p>
      </div>

      <div className="tarifs-grid">
        {packs.map((pack, index) => (
          <div
            className="tarif-card"
            key={index}
            style={{ borderTop: `4px solid ${pack.color}` }}
          >
            {pack.popular && <div className="badge-populaire">Populaire</div>}
            <h3 style={{ color: pack.color }}>{pack.title}</h3>
            <p className="price">{pack.price}</p>
            <p className="access">{pack.access}</p>
            <ul>
              {pack.features.map((f, i) => (
                <li key={i}>
                  <span className="check">✔</span> {f}
                </li>
              ))}
            </ul>
            <button
              className="choose-btn"
              style={{ backgroundColor: pack.color }}
            >
              Choisir ce pack
            </button>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default TarifsSection;
