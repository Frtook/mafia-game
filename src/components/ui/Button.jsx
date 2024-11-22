import React from "react";

export default function Button({ text, handleClick, className }) {
  return (
    <button
      className={`${className} bg-main-200 font-bold text-white rounded-lg px-5 py-2`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
