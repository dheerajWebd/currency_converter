import { useEffect, useState } from "react";

function Use(convert = "inr") {
  const [data, stedata] = useState({});
  const [datasend, stedatas] = useState({});
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${convert}`)
      .then((res) => res.json())
      .then((res) => {
        stedata(res);
      })
      .catch((err) => console.log(err));
  }, [convert]);
  useEffect(() => {
    stedatas(data);
  }, [data]);
  return datasend?.rates;
}
export default Use;
