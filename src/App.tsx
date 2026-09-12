import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Technologies from "./technologies/Technologies";

function App() {
  return (
    <>
      <div>
        <Nav />
        <HeroSection />
        <Suspense fallback={<h2>Loading....</h2>}>
          <Technologies />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
