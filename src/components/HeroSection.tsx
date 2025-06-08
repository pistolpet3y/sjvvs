import HeroSectionStyle, { LogoText } from "../styles/HeroSectionStyle";
import Logo from "../assets/images/soj.png";
import heroVideo from "../assets/videos/background.mp4"; // ← Importera videon

export default function HeroSection() {
  return (
    <HeroSectionStyle>
      {/* Videon läggs bakom innehållet */}
      <video
        className="background-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

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
