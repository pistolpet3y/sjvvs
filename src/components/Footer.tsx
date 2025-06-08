import waveTop from "../assets/images/stacked-waves.svg";

export default function Footer() {
  return (
    <footer style={{ position: "relative", backgroundColor: "#1e2a38" }}>
      {/*       <img
        src={waveTop}
        alt="Vågmönster"
        style={{
          position: "absolute",
          top: "-1px",
          left: 0,
          width: "100%",
          height: "40px",
          display: "block",
        }}
      /> */}
      <div
        style={{
          padding: "4rem 2rem 2rem",
          color: "white",
          textAlign: "center",
        }}
      >
        {/*  <p>S & J VVS – Vi tillhör Sveriges VVS-elit</p> */}
      </div>
    </footer>
  );
}
