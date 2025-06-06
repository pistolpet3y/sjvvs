import styled from "styled-components";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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

const Heading = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
  text-align: left;
  font-style: italic;

  p {
    color: green;
    font-weight: bold;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    margin: 0;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #263646;
  }
`;

export default function ContactSection() {
  return (
    <ContactWrapper>
      <ContactContent>
        <LeftSide>
          <Heading>
            <p>KONTAKTA OSS</p>
            <h2>Vi hjälper dig med VVS-lösningar</h2>
          </Heading>
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
          <p>
            <IoMdMail
              style={{ marginRight: "0.5rem", verticalAlign: "middle" }}
            />
            <a
              href="mailto:info@sjvvs.se"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              info@sjvvs.se
            </a>
          </p>

          <p>Göteborg, Sverige</p>

          <strong>Öppettider</strong>
          <p>Mån–Fre: 9:00–18:00</p>
          <p>Lör: 10:00–16:00</p>
          <p>Sön: Stängt</p>

          <div style={{ marginTop: "2rem" }}>
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{ marginBottom: "0.4rem", fontWeight: "600" }}>
                Alexander Svensson
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoMdMail style={{ marginRight: "0.5rem" }} />
                <a
                  href="mailto:alexander@sjvvs.se"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  alexander@sjvvs.se
                </a>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaPhone style={{ marginRight: "0.5rem" }} />
                <a
                  href="tel:0701112233"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  070-111 22 33
                </a>
              </p>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <p style={{ marginBottom: "0.4rem", fontWeight: "600" }}>
                Nicklas Johansson
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IoMdMail style={{ marginRight: "0.5rem" }} />
                <a
                  href="mailto:nicklas@sjvvs.se"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  nicklas@sjvvs.se
                </a>
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaPhone style={{ marginRight: "0.5rem" }} />
                <a
                  href="tel:0704445566"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  070-444 55 66
                </a>
              </p>
            </div>
          </div>
        </RightSide>
      </ContactContent>
    </ContactWrapper>
  );
}
