import Head from "next/head";
import Layout from "../components/layout";

export default function Home({
  setIsClosed,
  isClosed,
  isMaximised,
  setIsMaximised,
  maximise,
  close,
}) {
  return (
    <Layout
      setIsClosed={setIsClosed}
      isClosed={isClosed}
      isMaximised={isMaximised}
      setIsMaximised={setIsMaximised}
      maximise={maximise}
      close={close}
    >
      <Head>
        <title>Luke Lehane's Website - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello.</h1>
      <p>
        I'm Luke and I make websites. This particular one is the result of an
        experiment in trying to come up with something quite simple but a bit
        different after many many failed attempts at designing (ahem) and
        building my own personal site. For this one, I've skipped all the
        messing about and just used HTML, CSS and JavaScript. It was a glorious
        experience. I hope you enjoy it. Stay a while and click about.
      </p>
      <p>Then I ruined everything by turning this into a Next JS app!</p>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </Layout>
  );
}
