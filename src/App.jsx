/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Hero from "./Hero";

/**
 * Components
 */
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
      </main>
    </>
  );
};

export default App;
