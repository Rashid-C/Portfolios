/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
import Skill from "./components/Skill";
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
      </main>
    </>
  );
};

export default App;
