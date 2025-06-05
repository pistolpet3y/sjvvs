import HeroSectionStyle, { LogoText } from "../styles/HeroSectionStyle";
import Logo from "../assets/images/sjvvs-logo.c.png"; // Importera logotypen

export default function HeroSection() {
  return (
    <HeroSectionStyle>
      <div className="hero-content">
        <div className="left-corner">
          <img
            src={Logo}
            alt="Svensson & Johansson VVS Logo"
            style={{
              height: "55px",
              paddingRight: "1rem",
              marginTop: "1rem",
            }}
          />
          <LogoText>
            <span className="line1">Svensson</span>
            <span className="line2">& Johansson</span>
            <span className="line3">VVS</span>
          </LogoText>
        </div>
        <div className="right-corner">
          <p>En högre VVS-standard</p>
        </div>
      </div>
    </HeroSectionStyle>
  );
}
