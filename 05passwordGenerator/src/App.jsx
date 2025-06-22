import { useState, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null); // create a ref for the input

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()-_=+{}[]";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyPassword = () => {
    if (passwordRef.current) {
      passwordRef.current.select(); // select text
      window.navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-300 shadow-md rounded-lg px-6 py-4 my-8">
      <h1 className="text-3xl text-center font-bold py-3 mb-4 bg-gray-800 text-white rounded-lg">
        Password Generator
      </h1>

      <div className="flex items-center shadow-inner rounded-lg overflow-hidden mb-4 bg-white">
        <input
          ref={passwordRef} // assign ref to input
          type="text"
          value={password}
          className="w-full py-2 px-4 text-gray-800 outline-none bg-white"
          placeholder="Generated password"
          readOnly
        />
        <button
          onClick={copyPassword}
          className="bg-gray-800 text-white px-4 hover:bg-gray-700"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col gap-4 text-black">
        <div className="flex justify-between items-center">
          <label>Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-1/2"
          />
        </div>

        <div className="flex justify-between items-center">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>

        <div className="flex justify-between items-center">
          <label>Include Special Characters</label>
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed((prev) => !prev)}
          />
        </div>

        <button
          onClick={passwordGenerator}
          className="mt-4 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
