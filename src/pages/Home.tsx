// src/pages/Home.tsx
import { Element, scroller } from "react-scroll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import styled from "styled-components";

// === Layout Wrappers ===
const PageWrapper = styled.div`
  width: 100%;
`;

const SectionWrapper = styled.section`
  width: 100%;

  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
`;

const StyledElement = styled(Element)`
  width: 100%;
`;

// === Page Component ===
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const offset = location.state.offset ?? -90;

      scroller.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset,
      });
    }
  }, [location]);

  return (
    <PageWrapper>
      <StyledElement name="hero">
        <HeroSection />
      </StyledElement>

      <SectionWrapper>
        <MainSection />
      </SectionWrapper>

      <SectionWrapper>
        <StyledElement name="services">
          <ServicesSection />
        </StyledElement>
      </SectionWrapper>

      <SectionWrapper>
        <StyledElement name="about">
          <AboutSection />
        </StyledElement>
      </SectionWrapper>

      <SectionWrapper>
        <StyledElement name="contact">
          <ContactSection />
        </StyledElement>
      </SectionWrapper>
    </PageWrapper>
  );
}
