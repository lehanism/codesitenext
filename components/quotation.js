export default function Quotation({ setIsClosed, isClosed }) {
  function open() {
    setIsClosed(false);
  }

  return (
    <p className={`quote ${isClosed ? "show" : ""}`} onClick={open}>
      "If you gaze long enough into the abyss, the abyss will gaze back into
      you."
    </p>
  );
}
