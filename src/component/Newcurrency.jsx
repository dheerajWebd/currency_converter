import useData from "./carency.jsx";
import { useState, useEffect } from "react";
import Maincompop from "./Inputbox.jsx";
function Maincompo() {
  const [amount, setamount] = useState("");
  const [amountf, setamountf] = useState(0);
  const [carencyto, setcarency] = useState("USD");
  const [carencyfrom, setcarencyfrom] = useState("INR");
  const [options, setoption] = useState([]);
  let nam = [];
  let datainfo = useData(carencyto);
  useEffect(() => {
    for (const key in datainfo) {
      nam.push(key);
    }
    setoption(nam);
  }, [datainfo]);

  const swap = () => {
    setamount(amountf);
    setamountf(amount);
    setcarency(carencyfrom);
    setcarencyfrom(carencyto);
  };
  const clicked = (e) => {
    setamount("");
    setamountf((amount * datainfo?.[carencyfrom])?.toFixed(3));
  };

  return (
    <>
            <h1 className="headText" > currency changer </h1>

      <div className="main2">
        <div className="child">
          <Maincompop
            changeamount={(amount) => setamount(amount)}
            changeCarency={setcarencyfrom}
            carency={carencyto}
            amount={amount}
            options={options}
            lable={"from"}
          />
          <button onClick={swap}>swap</button>
          <Maincompop
            lable={"to"}
            changeCarency={setcarency}
            carency={carencyfrom}
            amount={amountf}
            options={options}
            eanble={true}
          />
          <button onClick={clicked}>
            convart {carencyfrom} to {carencyto}{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Maincompo;
