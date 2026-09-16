// import { useEffect, useState } from "react";
// import "./App.css";
// const date = new Date().toDateString();
// function App() {
//   let [cityName, cityValue] = useState("rewa");
//   let [tempdata, future] = useState("rewa");
//   let [data, change] = useState(null);
//   let [icon2, seticon] = useState("");
//   let [error, setmessage] = useState("");
//   let clicked = (e) => {
//     if (e.key === "Enter") {
//       cityValue(e.target.value.trim());
//     }
//   };
//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`
//     )
//       .then((data) => {
//         if (!data.ok) {
//           setmessage(data.statusText);
//           change(data.statusText);
//           throw new Error("plz check the network connection ");
//         }
//         return data.json();
//       })
//       .then((redata) => {
//         if (!redata) {
//           console.log("err");
//           return;
//         }
//         change(redata);
//         let icon2 = `https://openweathermap.org/img/wn/${redata.weather?.[0]?.icon}@2x.png`;
//         seticon(icon2);
//       })
//       .catch((err) => {});
//   }, [cityName]);
//   const lon = data?.coord?.lon;
//   const lat = data?.coord?.lat;

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`
//     )
//       .then((res) => {
//         if (!res.ok) {
//           console.log("reponce error");
//           return;
//         }
//         return res.json();
//       })
//       .then((data) => {
//         future(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [lon, lat]);
//   console.log(tempdata);
//   let time2 = tempdata?.list?.[0]?.dt_txt?.split(" ") ?? ["", ""];

//   return (
//     <>
//       <main>
//         <div className="background_img">
//           <h1 className="text-3xl text-red">Weather app </h1>
//           <div className="textureImg"></div>
//           <div className="mainbox">
//             <div className="sidenave">
//               <input
//                 onKeyDown={clicked}
//                 type="text"
//                 placeholder="Enter your city "
//               />
//               <div className="degarrData">
//                 {data?.main?.temp}
//                 <sup>o</sup>C +/_ 3
//               </div>
//               <div className="windSpeed">
//                 <span>
//                   {data?.wind?.deg ?? "not found"}
//                   <sup>o</sup>
//                 </span>
//                 <span>Wind: WSW {data?.wind?.speed ?? "not found"}mph</span>
//               </div>

//               <table>
//                 <tr>
//                   <td>0000</td>
//                   <td>.0.8%</td>
//                 </tr>
//                 <tr>
//                   <td>Safe</td>
//                   <td>Dangerous</td>
//                 </tr>
//                 <tr>
//                   <td>AQI: 50 </td>
//                   <td>AQI: 150</td>
//                 </tr>
//                 <tr>
//                   <td>Humi: 40%</td>
//                   <td>95%</td>
//                 </tr>
//               </table>
//               <div className="footerSidenave">
//                 <h2>{data?.name ?? "city is not found"} city</h2>
//                 <p>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Asperiores porro
//                 </p>
//               </div>
//             </div>
//             <div className="right">
//               <div className="upperContant">
//                 <h1>national Weather</h1>
//                 <p>Wrather Forecast</p>
//                 <pre>
//                   {`${data?.weather?.[0]?.main}
// ${data?.weather?.[0]?.description}`}
//                   <img src={icon2} alt="city is not found" />
//                 </pre>
//                 <div className="date">
//                   <p>
//                     {data?.name ?? error}, {date}
//                   </p>
//                 </div>
//                 <p>{error}</p>
//               </div>
//               <div className="uppercount2">
//                 <table>
//                   <thead>weather data</thead>
//                   <tbody>
//                     <tr>
//                       <td> country</td>
//                       <td>"{data?.sys?.country}"</td>
//                     </tr>
//                     <tr>
//                       <td>tempchure</td>
//                       <td>{data?.main?.temp}</td>
//                     </tr>
//                     <tr>
//                       <td>feels_like</td>
//                       <td>{data?.main?.feels_like}</td>
//                     </tr>
//                     <tr>
//                       <td>humidity</td>
//                       <td>{data?.main?.humidity}</td>
//                     </tr>
//                     <tr>
//                       <td>pressure</td>
//                       <td>{data?.main?.pressure}/kph</td>
//                     </tr>
//                     <tr>
//                       <td>visibility</td>
//                       <td>{data?.visibility}/km</td>
//                     </tr>
//                     <tr>
//                       <td>sunset</td>
//                       <td>
//                         {new Date(data?.sys?.sunset * 1000).toTimeString()}
//                       </td>
//                     </tr>
//                     <tr>
//                       <td>sunrise</td>
//                       <td>
//                         {new Date(data?.sys?.sunrise * 1000).toTimeString()}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="feturedata">
//                 <h2>future weature</h2>
//                 <div className="temp">
//                   <span>{tempdata?.list?.[0]?.main?.temp_min}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_max}</span>
//                   <span>{time2[1]}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_min}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_max}</span>
//                   <span>{time2[1]}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_min}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_max}</span>
//                   <span>{time2[1]}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_min}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_max}</span>
//                   <span>{time2[1]}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_min}</span>
//                   <span>{tempdata?.list?.[0]?.main?.temp_max}</span>
//                   <span>{time2[1]}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

