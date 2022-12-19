import logo from "./logo.svg";
import "./App.css";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Clients from "./components/Clients";
import Navbar from "./components/Header/Navbar";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import PortfolioModal from "./components/Portfolio/Portfolio-modal";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Clients />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
