import { useState } from "react";
import Quotation from "../components/quotation";
import Box from "../components/box";

export default function Layout({ children }) {
  const [isMaximised, setIsMaximised] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  function maximise() {
    setIsMaximised(!isMaximised);
  }

  function close() {
    setIsClosed(true);
    setIsMaximised(false);
  }

  return (
    <>
      <Quotation setIsClosed={setIsClosed} isClosed={isClosed} />
      <Box
        children={children}
        maximise={maximise}
        isMaximised={isMaximised}
        close={close}
        isClosed={isClosed}
      />
    </>
  );
}
