import { useState, useEffect } from "react";

function App() {
  const [a, setA] = useState("");

  const handleSubmit = (e) => {
    console.log("clicked");
    setA(e.target.value);
  };

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return (
    <>
      <input onChange={handleSubmit} />
      <p>{a}</p>
    </>
  );
}

export default App;
