import { Provider } from "react-redux";
import store from "./store";

import Preloader from "@components/Preloader/index";
import EntryHero from "@components/EntryHero";
// import Hero from "@components/Hero";

import "./index.scss";

function App() {
  return (
    <Provider store={store}>
      <main className="app-wrapper">
        <Preloader />
        <EntryHero />
        {/* <Hero /> */}
      </main>
    </Provider>
  );
}

export default App;
