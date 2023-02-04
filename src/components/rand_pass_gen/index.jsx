import React, { useState } from "react";

const Welcome = (props) => {
  const LOWER = "abcdefghijklmnopqrstuvwxyz";
  const UPPER = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const NUMBERS = "1234567890";
  const SYMBOLS = "!@#$%^&*()_+-=[]<>?";

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [length, setLength] = useState(8);
  const [refreshPass, setRefreshPass] = useState(true);

  const generatePassword = () => {
    let validChars = "";
    if (lowercase) {
      validChars += LOWER;
    }
    if (uppercase) {
      validChars += UPPER;
    }
    if (numbers) {
      validChars += NUMBERS;
    }
    if (symbols) {
      validChars += SYMBOLS;
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      let randNum = crypto.getRandomValues(new Uint32Array(1));
      randNum = Math.floor((randNum / 0x100000000) * validChars.length);
      password += validChars[randNum];
    }
    return password;
  };

  return (
    <div className="d-flex flex-column flex-wrap align-items-center h-100">
      <label htmlFor="passwordLength" className="form-label">
        Password length: {length}
      </label>
      <input
        type="range"
        className="form-range"
        min="1"
        max="50"
        defaultValue={8}
        onChange={(e) => setLength(e.target.value)}
        id="passwordLength"
      ></input>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => setLowercase(!lowercase)}
          id="lowercase-cb"
          checked={lowercase}
        />
        <label className="form-check-label" htmlFor="lowercase-cb">
          Lowercase
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => setUppercase(!uppercase)}
          id="uppercase-cb"
          checked={uppercase}
        />
        <label className="form-check-label" htmlFor="uppercase-cb">
          Uppercase
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => setNumbers(!numbers)}
          id="numbers-cb"
          checked={numbers}
        />
        <label className="form-check-label" htmlFor="numbers-cb">
          Numbers
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={() => setSymbols(!symbols)}
          id="symbols-cb"
          checked={symbols}
        />
        <label className="form-check-label" htmlFor="symbols-cb">
          Symbols
        </label>
      </div>
      <div
        suppressHydrationWarning
        role="button"
        onClick={(e) => navigator.clipboard.writeText(e.target.innerText)}
      >
        {generatePassword()}
      </div>
      <button
        className="btn"
        style={{ backgroundColor: "#A8EB12" }}
        onClick={() => setRefreshPass(!refreshPass)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
    </div>
  );
};

export default Welcome;
