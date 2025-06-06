import styled from "styled-components";

const MainSectionStyle = styled.section`
  margin-top: -100px; /* 🔼 Flyttar upp sektionen 150px */
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
    /* padding: 1rem; */
    height: 300px;
    max-width: 1208px;
    margin: 0 auto;
    align-items: stretch;
    /* gap: 3rem; */
  }

  .left-side {
    position: relative; /* krävs för att ::before ska placera sig rätt */
    font-style: italic;
    background: rgba(255, 255, 255, 0.75);
    border-top: 4px solid #ffc840;
    padding: 1rem 2rem;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    width: 70.1%;
    min-width: 30%;
  }

  /* Visuellt kortare border-left */
  .left-side::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 32px; /* Justera höjd på den kortare border */
    width: 4px;
    background-color: #ffc840;
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
    position: relative; /* Krävs för ::after */
    /* padding: 1.4rem 4rem; */
    background: rgba(255, 255, 255, 0.75);
    min-width: 369px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    color: #263646;
    font-size: 1rem;
    line-height: 1.6;
    margin-right: 2rem;
    height: 300px;
    border-top: 4px solid rgba(38, 54, 70, 0.9);
  }

  /* Visuellt kortare border-right */
  .right-side div::after {
    content: "";
    position: absolute;
    top: 2rem; /* Justera startposition */
    right: 0;
    top: 0;
    width: 4px;
    height: 32px; /* Justera höjd */
    background-color: rgba(38, 54, 70, 0.9);
  }

  .right-side ::before {
  }

  .right-side img {
    margin-top: 1rem; /* Justera för att passa in i layouten */
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
