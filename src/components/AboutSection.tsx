import styled from "styled-components";

const AboutWrapper = styled.section`
  width: 100%;
  height: auto;
  background-color: #f3f6f4;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: left;
  color: #263646;

  p {
    line-height: 1.7;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #263646;
    margin-bottom: 1rem;
  }

  blockquote {
    font-style: italic;
    background-color: #fdfdfb;
    border-left: 4px solid #ffc840;
    padding: 1.5rem 2rem;
    margin: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .author {
    font-weight: bold;
    margin-top: 1.5rem;
    font-size: 1rem;
  }
`;

export default function AboutSection() {
  return (
    <AboutWrapper>
      <AboutContent>
        <h2>Om oss</h2>
        <blockquote>
          "När jag och Nicklas grundade S & J VVS var vår vision tydlig – vi
          ville kombinera traditionellt VVS-hantverk med den moderna teknikens
          möjligheter. Med över 30 års gemensam erfarenhet i branschen vet vi
          vad som krävs för att leverera resultat som verkligen håller.
          <br />
          <br />
          För oss handlar det om mer än bara rör och installationer – det
          handlar om kvalitet, noggrannhet och att alltid möta våra kunder med
          ärlighet och professionalism. Vi håller oss ständigt uppdaterade,
          arbetar smart och kostnadseffektivt, och gör alltid vårt yttersta för
          att överträffa våra kunders förväntningar.
          <br />
          <br />
          Jag är stolt över att kalla oss en del av Sveriges VVS-elit – och det
          är något jag hoppas att varje kund känner när de anlitar oss."
        </blockquote>
        <p className="author">– Alexander Svensson, medgrundare S & J VVS</p>
      </AboutContent>
    </AboutWrapper>
  );
}
