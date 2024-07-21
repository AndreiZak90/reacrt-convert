import React, { useState } from "react";
import "./App.css";
import HexToRGB from "./components/convert";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("вид RGP");
  const [backColor, setBackColor] = useState("#D9D9D9");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el: HTMLInputElement = e.currentTarget;
    setName(el.value);
    console.log(el.value.length);
    if (el.value.length > 6) {
      const colorHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        el.value
      );
      if (colorHex === null) {
        setColor("Ошибка!!!");
        setBackColor("red");
        setName("");
      } else {
        setColor(HexToRGB(name.toUpperCase()));
        setBackColor(HexToRGB(name));
        console.log(HexToRGB(name));
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
