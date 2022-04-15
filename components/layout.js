import Quotation from "../components/quotation";
import Box from "../components/box";

export default function Layout({
  children,
  setIsClosed,
  isClosed,
  isMaximised,
  setIsMaximised,
  maximise,
  close,
}) {
  return (
    <>
      <Quotation setIsClosed={setIsClosed} isClosed={isClosed} />
      <Box
        children={children}
        isMaximised={isMaximised}
        setIsMaximised={setIsMaximised}
        maximise={maximise}
        isClosed={isClosed}
        close={close}
      />
    </>
  );
}
