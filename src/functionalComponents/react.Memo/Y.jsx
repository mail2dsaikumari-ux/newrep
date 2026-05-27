import React, { useState, useMemo } from "react";
import Z from "./Z";

const Y = React.memo(({ value }) => {
  const [Y, setY] = useState(0);

  console.log("Y component");

  const result = useMemo(() => {
    console.log("useMemo running");
    return Y * 10;
  }, [Y]);

  return (
    <div>
      <h3>Y Component</h3>
      <button onClick={() => setY(Y + 1)}>Click</button>
      <br />
      {result}
      <br />
      <Z value={Y} />
    </div>
  );
});

export default Y;