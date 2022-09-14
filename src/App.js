import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      {data?.map((item, index) => (
        <div key={index}>
          <p> Name : {item?.name}</p>
          <p> Email : {item?.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
