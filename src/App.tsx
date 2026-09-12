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
        <Suspense
          fallback={
            <div className="flex min-h-100 w-full items-center justify-center">
              <span className="loading loading-spinner loading-lg text-secondary h-16 w-16"></span>
            </div>
          }
        >
          <Technologies />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
