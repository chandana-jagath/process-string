import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import StringCounter from "./components/StringCounter"
import WordFrequencyCounter from "./components/WordFrequencyCounter"
import "./App.css";

function App() {
  
  const [key, setKey] = useState('stringCount');  

  return (
    <Tabs
      defaultActiveKey="stringCount"
      activeKey={key}
      id="string-process"
      onSelect={(k) => setKey(k)}
      className="mb-3"
      justify
    >
      <Tab eventKey="stringCount" title="String Count">
        <StringCounter></StringCounter>
      </Tab>
      <Tab eventKey="wordFrequencyCounter" title="Word Frequency Counter">
        <WordFrequencyCounter></WordFrequencyCounter>
      </Tab>
    </Tabs>
  );
}

export default App;
