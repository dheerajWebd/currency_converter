import { useState, useCallback, useEffect, useRef } from "react";
import "../component.css";
function App2() {
  const [poswordRang, setReng] = useState("8");
  const [textinput, setinput] = useState("");
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const refarence = useRef(null);
  const changecheckNum = (e) => {
    setnum((pervesValue) => {
      return pervesValue == false
        ? (pervesValue = true)
        : (pervesValue = false);
    });
  };
  const changecheckChar = (e) => {
    setchar((prev) => !prev); //shorthand method
  };
  const changeRang = (e) => {
    setReng(e.target.value);
  };
  const func = useCallback(() => {
    let pass = "";
    let text = "ABCDEabcdefghiFGHIwxyzRSTUVWXYZjklmnopJKLMNOPQqrstuv";
    console.log(text.length);
    if (num) {
      text += "1236789k,./0987654321";
      console.log(text.length);
    }
    if (char) {
      text += "!@#$%^&*()_+'/\\,.<>?~`[]{}`";
      console.log(text.length, text);
    }
    for (let i = 0; i < poswordRang; i++) {
      let rendindex = Math.floor(Math.random() * (text.length - 1)) + 1;
      pass += text[rendindex];
      console.log(pass);
    }
    console.log(text);
    setinput(pass);
  }, [num, poswordRang, char, setinput]); // yeha pe jo arr diya gaya hia agar usame koi bhi change aye to use optimaise karo or memoise karo yani memory me rakho

  useEffect(() => {
    func();
  }, [num, poswordRang, char]); // yeha pe jo arr diya gaya hai agar esame koi bhi change ho to dobarase usa kam ko karo

  return (
    <>
      <h1>posword genareter in react </h1>
      <main>
        <div className="inpcop">
          <input
            type="text"
            readOnly
            min={6}
            max={40}
            value={textinput}
            ref={refarence}
          />
          <button
            onClick={() => {
              refarence.current?.select();
              window.navigator.clipboard.writeText(textinput);
            }}
          >
            copy
          </button>
        </div>
        <input
          type="range"
          max={40}
          min={6}
          onChange={changeRang}
          value={poswordRang}
        />
        <label htmlFor="number">length ({poswordRang}) </label>
        <input type="checkbox" id="number" onChange={changecheckNum} />
        <label htmlFor="number">number </label>
        <input type="checkbox" id="char" onChange={changecheckChar} />
        <label htmlFor="char">char</label>
      </main>
    </>
  );
}
export default App2;
