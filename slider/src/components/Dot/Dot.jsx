import "./Dot.css";

function Dot({ onClick, style }) {
  return (
    <>
      <div className={`dot ${style}`} onClick={onClick}></div>
    </>
  );
}

export default Dot;
