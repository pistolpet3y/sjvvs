import styled from "styled-components";

const ContactWrapper = styled.section`
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
`;

const ContactContent = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const LeftSide = styled.div`
  flex: 1;
  min-width: 300px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #263646;
  }

  label {
    display: block;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    color: #263646;
    letter-spacing: 0.3px;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.3rem;
    border: 1px solid #d3cfc8;
    background-color: #fdfcf9;
    border-radius: 0;
    font-size: 1rem;
    font-family: "Georgia", serif;
    color: #263646;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  input::placeholder,
  textarea::placeholder {
    font-style: italic;
    color: #aaa;
  }

  label input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  button {
    margin-top: 2rem;
    padding: 0.6rem 1.4rem;
    background-color: #ffc840;
    color: #263646;
    border: 1px solid #c7a730;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;

    &:hover {
      background-color: #e0ae30;
    }
  }
`;

const RightSide = styled.div`
  flex: 1;
  min-width: 300px;

  iframe {
    width: 100%;
    height: 200px;
    border: none;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.3rem 0;
    font-size: 0.95rem;
  }

  strong {
    display: block;
    margin-top: 1rem;
  }
`;

export default function ContactSection() {
  return (
    <ContactWrapper>
      <ContactContent>
        <LeftSide>
          <p style={{ color: "green", fontWeight: "bold" }}>KONTAKTA OSS</p>
          <h2>Vi hjälper dig med VVS-lösningar</h2>
          <form>
            <label>Namn</label>
            <input type="text" placeholder="Ditt namn" required />

            <label>E-postadress</label>
            <input type="email" placeholder="namn@exempel.se" required />

            <label>Telefonnummer</label>
            <input type="tel" placeholder="070-123 45 67" required />

            <label>Meddelande</label>
            <textarea placeholder="Skriv ditt meddelande här..." />

            <label>
              <input type="checkbox" required /> Jag godkänner att mina
              uppgifter sparas för att kunna bli kontaktad.
            </label>

            <button type="submit">Skicka</button>
          </form>
        </LeftSide>

        <RightSide>
          <iframe
            title="S & J VVS karta"
            src="https://maps.google.com/maps?q=Gothenburg,%20Sweden&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>

          <strong>Kontaktuppgifter</strong>
          <p>📧 info@sjvvs.se</p>
          <p>📍 Göteborg, Sverige</p>

          <strong>Öppettider</strong>
          <p>Mån–Fre: 9:00–18:00</p>
          <p>Lör: 10:00–16:00</p>
          <p>Sön: Stängt</p>

          <div style={{ marginTop: "2rem" }}>
            <strong>Teamet</strong>

            <div style={{ marginTop: "1rem" }}>
              <p style={{ marginBottom: "0.2rem", fontWeight: "600" }}>
                👨‍🔧 Alexander Svensson
              </p>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                📧 alexander@sjvvs.se
              </p>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>📞 070-111 22 33</p>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <p style={{ marginBottom: "0.2rem", fontWeight: "600" }}>
                👨‍🔧 Nicklas Johansson
              </p>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>
                📧 nicklas@sjvvs.se
              </p>
              <p style={{ fontSize: "0.9rem", margin: 0 }}>📞 070-444 55 66</p>
            </div>
          </div>
        </RightSide>
      </ContactContent>
    </ContactWrapper>
  );
}
