// components/Footer.tsx
import styled from "styled-components";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import LogoIcon from "../assets/images/sjvvs-logo.c.png";
import { Link as ScrollLink } from "react-scroll";

const FooterWrapper = styled.footer`
  background-color: #263646;
  color: white;
  padding: 3rem 2rem 2rem;
  font-size: 0.9rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  img {
    height: 26px;
    width: 26px;
  }

  h3 {
    font-family: "Playfair Display", serif;
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #ffc840;
    }
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: #ffc840;
  }
`;

const BottomText = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.6;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <img src={LogoIcon} alt="S & J VVS logotyp" />
          <h3>Svensson & Johansson VVS</h3>
        </LogoSection>

        <LinksSection>
          <ScrollLink to="hero" smooth={true} duration={500} offset={-80}>
            Hem
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-460}>
            Tjänster
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
            Om oss
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            Kontakt
          </ScrollLink>
        </LinksSection>

        <ContactSection>
          <div>
            <FaPhone /> <a href="tel:0123456789">0123-456 789</a>
          </div>
          <div>
            <IoMdMail /> <a href="mailto:info@sjvvs.se">info@sjvvs.se</a>
          </div>
        </ContactSection>
      </FooterContent>

      <BottomText>
        © 2025 Svensson & Johansson VVS – All rights reserved
      </BottomText>
    </FooterWrapper>
  );
}
