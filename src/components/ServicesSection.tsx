import styled from "styled-components";
import img1 from "../assets/images/ror.jpg";
import img2 from "../assets/images/badrum.jpg";
import img3 from "../assets/images/handfat.jpg";

const ServicesWrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  /* padding: 5rem 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  /* margin-top: -450px; */
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
  text-align: left;
  font-style: italic;

  p {
    color: green;
    font-weight: bold;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    margin: 0;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #263646;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const Card = styled.div`
  background-color: #fff;
  width: 280px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 330px;
    object-fit: cover;
  }

  .content {
    padding: 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #263646;
  }

  p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.4;
    margin: 0;
  }
`;

export default function ServicesSection() {
  return (
    <ServicesWrapper>
      <Heading>
        <p>PROFESSIONELL VVS</p>
        <h2>Expertis för alla projekt</h2>
      </Heading>
      <CardContainer>
        <Card>
          <img src={img1} alt="Rörinstallation" />
          <div className="content">
            <h3>Rörinstallation &rsaquo;</h3>
            <p>Professionell installation av rörsystem för alla behov.</p>
          </div>
        </Card>
        <Card>
          <img src={img2} alt="Reparation" />
          <div className="content">
            <h3>Reparationsarbete &rsaquo;</h3>
            <p>Snabb och effektiv reparation av rör och installationer.</p>
          </div>
        </Card>
        <Card>
          <img src={img3} alt="VVS-konsultation" />
          <div className="content">
            <h3>VVS-konsultation &rsaquo;</h3>
            <p>Expertkonsultation för alla VVS-relaterade projekt.</p>
          </div>
        </Card>
      </CardContainer>
    </ServicesWrapper>
  );
}
