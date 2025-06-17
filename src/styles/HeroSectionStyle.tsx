import styled from "styled-components";

const HeroSectionStyle = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  overflow: hidden;
  color: #263646;
  text-align: center;
  /* border-bottom: 8px solid rgba(189, 189, 189, 0.1); */

  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4rem;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    backdrop-filter: blur(1px);
    margin: 0 auto;
  }

  .left-corner {
    position: absolute;
    top: 25%;
    left: 2rem;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .right-corner {
    position: absolute;
    top: 60%;
    left: 7rem;
    text-align: right;
    font-size: 1.5rem;
    font-weight: 400;
    z-index: 1;
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
