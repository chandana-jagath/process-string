import React, { useState } from "react";
import { Form } from "react-bootstrap";

const stopWords = ["the", "and", "is", "in", "on", "of"];

function WordFrequencyCounter() {
  const [text, setText] = useState("");
  const [ignoreStopWords, setIgnoreStopWords] = useState(false);
  const [sortedBy, setSortedBy] = useState("frequency");

  const calculateWordFrequency = () => {
    if (text != "") {
      const wordsArray = text.toLowerCase().match(/\b(\w+)\b/g);
      const frequency = wordsArray.reduce((acc, word) => {
        if (ignoreStopWords && stopWords.includes(word)) return acc;
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

      // Convert object into an array for sorting
      let wordList = Object.keys(frequency).map((word) => ({
        word,
        count: frequency[word],
      }));

      // Sort words
      if (sortedBy === "alphabet") {
        wordList.sort((a, b) => a.word.localeCompare(b.word));
      } else {
        wordList.sort((a, b) => b.count - a.count);
      }

      return wordList;
    }
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <Form.Group className="mb-3" controlId="sentenceTextArea">
              <Form.Control
                as="textarea"
                rows={12}
                cols={50}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here"
              />
            </Form.Group>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-3">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                checked={ignoreStopWords}
                id="ignoreCommonWordsChecked"
                onChange={() => setIgnoreStopWords(!ignoreStopWords)}
              />
              <label class="form-check-label" for="flexSwitchCheckChecked">
                Ignore common words
              </label>
            </div>
          </div>
          <div class="col-3">
            <select
              class="form-select"
              onChange={(e) => setSortedBy(e.target.value)}
            >
              <option value="frequency">Sort by Frequency</option>
              <option value="alphabet">Sort Alphabetically</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="mt-3">
            <ul class="list-group">
              {calculateWordFrequency()?.map((item, index) => (
                <li class="list-group-item list-group-item-primary" key={index}>
                  {item.word}: {item.count}
                </li>
              )) || <div class="alert alert-danger" role="alert">No data available</div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordFrequencyCounter;
