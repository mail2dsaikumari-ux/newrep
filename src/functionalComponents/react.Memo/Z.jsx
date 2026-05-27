import React, { useState } from "react";

const Z = React.memo(({ value }) => {
  const [Z, setZ] = useState(0);

  console.log("Z component");

  return (
    <div>
      <h3>Z Component</h3>
      <button onClick={() => setZ(Z + 1)}>Click</button>
      <br />
      {value}
    </div>
  );
});

export default Z;