/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

import About from "./components/About";
import Header from "./components/Header";
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
      </main>
    </>
  );
};

export default App;
