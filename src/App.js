import Title from './components/Title';
import Form from './components/Form';
import './App.css';
import Results from './components/Results';
import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("http://api.weatherapi.com/v1/current.json?key=53535532cc1b4eada6c125622212908&q=London&aqi=no").then(res=>console.log(res))
    }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results />
    </div>
  );
}

export default App;
