import { useState } from "react";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
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
    <Component
      {...pageProps}
      setIsClosed={setIsClosed}
      isClosed={isClosed}
      isMaximised={isMaximised}
      setIsMaximised={setIsMaximised}
      maximise={maximise}
      close={close}
    />
  );
}
