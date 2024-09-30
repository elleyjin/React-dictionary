import React from "react";

export default function Results(props) {
  console.log(props.results);

  return (
    <div className="Results">
      <h1>sunset</h1>
      <div>
        {/* // create component to read which dictionary is from */}
        <h2>oxford dictionary</h2>
        <h3>noun | pro.nun.cia.tion</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          vehicula, odio quis condimentum imperdiet, nisl risus iaculis neque,
          faucibus facilisis orci mi at mi. Aliquam quis mi est.
        </p>
      </div>
    </div>
  );
}
