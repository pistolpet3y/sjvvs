import styled from "styled-components";

const MainSectionStyle = styled.section`
  margin-top: -150px; /* 🔼 Flyttar upp sektionen 150px */
  z-index: 2; /* 🔼 Ser till att den ligger ovanpå HeroSection */
  position: relative; /* 🔼 Krävs för att z-index ska fungera */

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  .main-content {
    display: flex;
    /* position: relative; */
    /* width: 1200px; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 300px;
    max-width: 1250px;
    margin: 0 auto;
    align-items: stretch;
    /* gap: 3rem; */
  }

  .left-side {
    font-style: italic;
    background: rgba(255, 255, 255, 0.75);
    border-left: 4px solid #ffc840;
    border-top: 4px solid #ffc840;
    padding: 1rem 2rem; /* <-- ändra denna rad */
    height: 300px; /* <-- lägg till denna rad */
    display: flex; /* för att centrera innehåll likadant */
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 100%;
    min-width: 548px; /* så att den matchar höger sida */
  }

  .left-side > p:first-child {
    color: green;
    font-weight: bold;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    margin-bottom: 0.5rem;
    margin-top: -3rem; /* Justera marginalen för att passa */
  }

  .left-side h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .left-side p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  .right-side div {
    padding: 2.2rem 3rem; /* 👈 samma vertikal padding som vänstersidan */
    background: rgba(255, 255, 255, 0.75);
    min-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: #263646;
    font-size: 1rem;
    line-height: 1.6;
    margin-right: 2rem;
    height: 300px; /* 👈 så de växer lika mycket */
    border-right: 4px solid rgba(38, 54, 70, 0.9);
    border-top: 4px solid rgba(38, 54, 70, 0.9);
  }

  .right-side img {
    height: 80px;
    margin-bottom: 1rem;
  }

  .right-side ul {
    list-style: none;
    padding: 0;
    padding-top: 0.5rem; /* Lägg till lite utrymme ovanför listan */
    margin: 0;
    width: 100%;
  }

  .right-side li {
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    position: relative;
  }

  .right-side li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: green;
    font-weight: bold;
  }
`;

export default MainSectionStyle;
