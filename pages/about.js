import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Luke Lehane's Website - About</title>
      </Head>

      <h1>About Me.</h1>
      <p>Oh look, it's another page. GLORIOUS.</p>
      <p>
        Why is the state not persistent across pages? eg. Maximise the window
        and then change the page.
      </p>

      <style jsx>{``}</style>

      <style jsx global>{``}</style>
    </Layout>
  );
}
