import Header from "../components/Header";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}

export default Main;
