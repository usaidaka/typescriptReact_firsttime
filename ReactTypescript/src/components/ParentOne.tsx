import React from "react";

const ParentOne = ({ children }: { children: React.ReactNode }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Search!");
  };

  return (
    <div>
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>clicks</button>
      </div>
      <h1>parent</h1>
      {children}
    </div>
  );
};

export default ParentOne;
