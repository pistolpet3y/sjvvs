import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";
import LogoIcon from "../assets/images/sjvvs-logo.c.png";

// ====== Offset för varje sektion ======
const offsetMap: { [key: string]: number } = {
  hero: -80,
  main: -65,
  services: -460,
  about: -100,
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
  z-index: 99;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.35);
`;

const LineBar = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 3px;
  display: flex;
  z-index: 99;
  background-color: #263646;
`;

const LeftLine = styled.div`
  flex: 0 0 60.7%;
  background-color: #263646;
`;

const RightLine = styled.div`
  flex: 0 0 50.2%;
  background-color: #263646;
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
  /* gap: 2rem; */
  align-items: center;
`;

const LogoScrollLink = styled(ScrollLink)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const NavLink = styled(ScrollLink)`
  position: relative;
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  width: 90px;
  padding: 0.6rem 0;
  transition: background-color 0.3s ease, color 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 6px;
    background-color: #263646; /* blå för hover */
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  &.active::after {
    transform: scaleX(1);
    position: absolute;
    bottom: 1px;
    background-color: #263646;
  }

  &.active {
    background-color: rgba(38, 54, 70, 0.09);
    padding: 1.4rem 0;
    z-index: 1;
    color: black; /* vit text vid aktiv */
    font-weight: 500;
  }

  &.active::before {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid #263646;
  }

  &:hover:not(.active)::after {
    transform: scaleX(1);
    position: absolute;
    bottom: -12px;
    background-color: #263646;
  }

  &:hover:not(.active) {
    color: black;
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
  return (
    <>
      <Contact>
        <PhoneIcon />
        <a
          href="tel:0123456789"
          style={{
            marginRight: "1rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          0123-456 789
        </a>

        <MailIconWrapper>
          <IoMdMail />
        </MailIconWrapper>
        <a
          href="mailto:info@sjvvs.se"
          style={{
            marginLeft: "0.5rem",
            color: "white",
            textDecoration: "none",
          }}
        >
          info@sjvvs.se
        </a>
      </Contact>

      <Nav>
        <NavLinksWrapper>
          <LogoScrollLink
            to="hero"
            smooth={true}
            duration={500}
            offset={offsetMap["hero"]}
            spy={true}
            width={300}
            activeClass="active"
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
              /* isDynamic={true} */
              duration={500}
              offset={offsetMap["hero"]}
              /* hashSpy={true} */
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
              /* isDynamic={true} */
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
              /* isDynamic={true} */
              offset={offsetMap["contact"]}
              /* hashSpy={true} */
              spy={true}
              activeClass="active"
              /* className="no-border"
              style={{
                backgroundColor: "#ffc840",
                padding: "0.6rem 1.1rem",
                borderRadius: "4px",
                border: "1px solid #c7a730",
                color: "black",
              }} */
            >
              Kontakt
            </NavLink>
          </NavLinks>
        </NavLinksWrapper>
      </Nav>

      <LineBar>
        <LeftLine />
        <RightLine />
      </LineBar>
    </>
  );
}
