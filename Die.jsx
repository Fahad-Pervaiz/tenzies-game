import die1 from "./images/dice-1.png";
import die2 from "./images/dice-2.png";
import die3 from "./images/dice-3.png";
import die4 from "./images/dice-4.png";
import die5 from "./images/dice-5.png";
import die6 from "./images/dice-6.png";

export default function Die(props) {
  const diceImages = [die1, die2, die3, die4, die5, die6];

  return (
    <button
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
      style={{
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "10px",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={diceImages[props.value - 1]}
        alt={`Dice ${props.value}`}
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
        }}
      />
    </button>
  );
}