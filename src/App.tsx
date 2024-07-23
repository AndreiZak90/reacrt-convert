import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("вид RGP");
  const [backColor, setBackColor] = useState("#D9D9D9");

  const HexToRGB = (hex: string) => {
    if (hex === "") return "";

    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return "rgb(" + r + ", " + g + ", " + b + ")";
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el: HTMLInputElement = e.currentTarget;
    setName(el.value);
    if (el.value.length >= 7) {
      const colorHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        el.value
      );
      if (colorHex === null) {
        setColor("Ошибка!!!");
        setBackColor("red");
        setName("");
      } else {
        setColor(HexToRGB(name.toUpperCase()));
        setBackColor(HexToRGB(el.value));
        console.log(HexToRGB(el.value));
      }
    }
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container" style={{ background: `${backColor}` }}>
        <form className="form" onSubmit={submitHandler}>
          <input type="text" value={name} onInput={onInputChange} />
          <input type="text" value={color} />
        </form>
      </div>
    </>
  );
}

export default App;
