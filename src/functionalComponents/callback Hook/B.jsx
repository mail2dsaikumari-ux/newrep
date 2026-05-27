import React from "react";

const B = React.memo(({ value }) => {
  console.log("Child Rendered");

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={value}>Call Parent Function</button>
    </div>
  );
});

export default B;