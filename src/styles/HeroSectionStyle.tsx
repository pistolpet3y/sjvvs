import styled from "styled-components";
import backgroundImage from "../assets/images/bg.jpg";

const HeroSectionStyle = styled.section`
  will-change: background-position;
  display: flex;
  justify-content: center;
  align-items: center; /*  */
  width: 100%;
  color: #263646;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.36);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-blend-mode: overlay;
  transform: translateZ(0);
  height: 430px;
  animation: panBackground 20s linear infinite alternate;
  background-repeat: no-repeat;

  @keyframes panBackground {
    0% {
      background-position: center 10%;
    }
    100% {
      background-position: center 40%;
    }
  }

  .hero-content {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4rem;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(5px);
    position: relative;
    margin: 0 auto;
  }

  .left-corner {
    position: absolute;
    top: 6rem;
    left: 2rem;
    display: flex;
    align-items: center;
  }

  .right-corner {
    position: absolute;
    top: 19rem;
    left: 7rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 400;
  }

  .right-corner p {
    margin: 0;
    padding: 0.3rem 1rem;
  }
`;

export const LogoText = styled.div`
  margin-top: 5rem;
  padding-left: 20px;
  font-size: 40px;
  line-height: 1;
  color: #263646;
  font-weight: 900;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-left: 10px solid #ffc840;
  font-family: "Playfair Display", serif;
  span {
    display: block;
  }
`;

export default HeroSectionStyle;
