import BoxHeader from "../components/box-header";

export default function Box({
  children,
  maximise,
  isMaximised,
  close,
  isClosed,
}) {
  return (
    <div
      className={`box ${isMaximised ? "max" : ""} ${isClosed ? "exit" : ""}`}
    >
      <BoxHeader maximise={maximise} isMaximised={isMaximised} close={close} />
      <div className="box__content show">{children}</div>
    </div>
  );
}
