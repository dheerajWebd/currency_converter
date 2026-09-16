import { useId } from "react";
import "../App.css";
function indexbox({
  lable,
  amount,
  carency = "USD",
  changeCarency,
  eanble = false,
  changeamount,
  options,
}) {
  const newid = useId();
  const newid2 = useId();
  return (
    <>
    

      <div className="main">
        <label htmlFor={newid}>{lable}</label>
        <input
          id={newid}
          type="number"
          value={amount}
          onChange={(e) => changeamount && changeamount(Number(e.target.value))}
          disabled={eanble}
          placeholder="enter your number"
          autoFocus
        />
        <div className="selectdiv">
          <label
            className="lable2"
            style={{ display: "block" }}
            htmlFor={newid2}
          >
           currency changer
          </label>
          <select
            id={newid2}
            onChange={(e) => changeCarency && changeCarency(e.target.value)}
            value={carency}
          >
            {options?.map((carencys) => (
              <option key={carencys} value={carencys}>
                {carencys}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default indexbox;
