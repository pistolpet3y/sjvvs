import MainSectionStyle from "../styles/MainSectionStyle";
import SKlogo from "../assets/images/sakervatten.png"; // Importera logotypen

export default function MainSection() {
  return (
    <MainSectionStyle>
      <div className="main-content">
        <div className="left-side">
          <p style={{ color: "green", fontWeight: "bold" }}>
            EXPERT VVS-TJÄNSTER
          </p>
          <h2>Kvalitet och pålitlighet i varje projekt</h2>
          <p>
            Vi kombinerar 30 års VVS-erfarenhet med modern teknik för att
            erbjuda högsta kvalitet till marknadens bästa pris – för både
            företag och privatpersoner.
          </p>
        </div>

        <div className="right-side">
          <div>
            <img
              src={SKlogo}
              alt="Säkertvatten Kvalitetssäkring Logo"
              style={{
                height: "85px",
                /*                 marginBottom: "1rem",
                marginTop: "-4rem",
                display: "flex", */
              }}
            />
            <ul>
              <li>Certifierade VVS-montörer</li>
              <li>30 års erfarenhet</li>
              <li>Trygghetsförsäkring & kollektivavtal</li>
              <li>Digitalt & kostnadseffektivt</li>
            </ul>
          </div>
        </div>
      </div>
    </MainSectionStyle>
  );
}
