import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Menu from "../components/Menu.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Reservation from "../components/Reservation.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
