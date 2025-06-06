// components/HeroSection.jsx (or .tsx if you're using TypeScript)
import HeroSectionStyle, { LogoText } from "../styles/HeroSectionStyle";
import Logo from "../assets/images/soj.png";

export default function HeroSection() {
  // No 'id' prop is strictly necessary here because Element handles it
  return (
    // HeroSectionStyle is a styled component, which renders a div by default
    <HeroSectionStyle>
      <div className="hero-content">
        <div className="left-corner">
          <img
            src={Logo}
            alt="Svensson & Johansson VVS Logo"
            style={{
              height: "85px",
              width: "auto",
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
