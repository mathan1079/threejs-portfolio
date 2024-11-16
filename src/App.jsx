import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTopButton from "./components/Resume/GetResume";
import "react-toastify/dist/ReactToastify.css";

import {
  About,
  AwardSection,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <AwardSection />
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Footer />
        </div>
      </div>
      <BackToTopButton />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </BrowserRouter>
  );
};

export default App;
