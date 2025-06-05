import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import LogoIcon from "../assets/images/sjvvs-logo.c.png";

// ====== Offset för varje sektion ======
const offsetMap: { [key: string]: number } = {
  hero: -800,
  main: -80,
  services: -80,
  about: -80,
  contact: -80,
};

// ====== Styled Components ======
const Contact = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  height: 30px;
  width: 100%;
  background-color: #263646;
  align-items: center;
  padding: 0 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 100;
`;

const Nav = styled.nav`
  position: fixed;
  top: 30px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 2px solid #263646;
`;

const NavLinksWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #263646;
  font-family: "Playfair Display", serif;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const LogoScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const NavLink = styled(ScrollLink)`
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;

  &.active {
    font-weight: 700;
    color: #ffc840;
  }

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    left: 0;
    bottom: -15px;
    background: #ffc840;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const PhoneIcon = styled(FaPhone)`
  margin-right: 0.5rem;
  color: #ffc840;
  font-size: 1.1rem;
`;

const MailIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  padding-left: 1.5rem;
  color: #ffc840;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 70%;
    width: 1px;
    background-color: white;
  }

  svg {
    color: #ffc840;
    font-size: 1.1rem;
  }
`;

// ====== Navbar Component ======
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Contact>
        <PhoneIcon />
        <span style={{ marginRight: "1rem", color: "white" }}>
          0123-456 789
        </span>
        <MailIconWrapper>
          <IoMdMail />
        </MailIconWrapper>
        <span style={{ marginLeft: "0.5rem", color: "white" }}>
          info@sjvvs.se
        </span>
      </Contact>

      <Nav>
        <NavLinksWrapper>
          <LogoScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={offsetMap["hero"]}
            spy={true}
          >
            <Logo>
              <img
                src={LogoIcon}
                alt="Svensson & Johansson VVS Logo"
                style={{ height: "22px", paddingRight: "0.5rem" }}
              />
              Svensson & Johansson VVS
            </Logo>
          </LogoScrollLink>

          <NavLinks>
            <NavLink
              to="hero"
              smooth={true}
              duration={500}
              offset={offsetMap["hero"]}
              spy={true}
              activeClass="active"
            >
              Hem
            </NavLink>
            <NavLink
              to="services"
              smooth={true}
              duration={500}
              offset={offsetMap["services"]}
              spy={true}
              activeClass="active"
            >
              Tjänster
            </NavLink>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              offset={offsetMap["about"]}
              spy={true}
              activeClass="active"
            >
              Om Oss
            </NavLink>
            <NavLink
              to="contact"
              smooth={true}
              duration={500}
              offset={offsetMap["contact"]}
              spy={true}
              activeClass="active"
              style={{
                backgroundColor: "#ffc840",
                padding: "0.5rem 1rem",
                borderRadius: "2px",
                color: "black",
              }}
            >
              Kontakt
            </NavLink>
          </NavLinks>
        </NavLinksWrapper>
      </Nav>
    </>
  );
}
