import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    "components"
  );

  console.log("APP COMPONENT RENDERED");

  function handleTabSelect(selectedButton) {
    // selectedButton => "components", "jsx", "props", or "state"
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples!</h2>
          <menu>
            <TabButton onSelect={() => handleTabSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleTabSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleTabSelect("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleTabSelect("state")}>
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
