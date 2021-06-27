import React from "react";

export default function child({name,id,txt,deleteFunc}) {

  // console.log(props);

  return (
    <div className="child-box">
      <p>{name}</p>
      <p>{id}</p>
      <p>{txt}</p>
      <button 
      onClick={() => deleteFunc(id)}>
        X
      </button>
    </div>
  );
}
