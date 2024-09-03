import React from "react";
import { Button, Form } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <Form.Group className="mb-3" controlId="sentenceTextArea">        
        <Form.Control
          as="textarea"
          rows={3}
          cols={4}
          placeholder="Enter your text here"
        />
      </Form.Group>
      
      <Button variant="primary">Character Count</Button>
 
    </div>
  );
}

export default App;
