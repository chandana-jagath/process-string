import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const characterCount = text.length;
  const letterCount = text.replace(/\s+/g, '').length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const sentenceCount = text
    .split(/[.!?]+\s*/)
    .filter((sentence) => sentence.length > 0).length;
  const paragraphCount = text
    .split(/\n+/)
    .filter((paragraph) => paragraph.trim().length > 0).length;
  const spaceCount = (text.match(/\s/g) || []).length;

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Form.Group className="mb-3" controlId="sentenceTextArea">
            <Form.Control
              as="textarea"
              rows={12}
              cols={12}
              placeholder="Enter your text here"
              value={text}
              onChange={handleTextChange}
            />
          </Form.Group>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="btn btn-info disabled w-100">Characters <br/> {characterCount}</div>
        </div>
        <div class="col">
          <div class="btn btn-info disabled w-100">Letters <br/> {letterCount}</div>
        </div>
        <div class="col">
          <div class="btn btn-info disabled w-100">Words <br/> {wordCount}</div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <div class="btn btn-info disabled w-100">Sentences <br/> {sentenceCount}</div>
        </div>
        <div class="col">
          <div class="btn btn-info disabled w-100">Paragraphs <br/> {paragraphCount}</div>
        </div>
        <div class="col">
          <div class="btn btn-info disabled w-100">Spaces <br/> {spaceCount}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
