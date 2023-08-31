import Title from './components/Title';
import Form from './components/Form';
import Loading from './components/Loading';
import Results from './components/Results';
import { useState } from "react";
import './App.css';
import axios from "axios";


function App() {
  const [city, setCity] = useState("");

  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

  const [loading, setLoading] = useState(false);

  const getWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`http://api.weatherapi.com/v1/current.json?key=xxxxxxyyyyyzzzzzzzz&q=${city}&aqi=no`).then(res=>{
          setResults({
            country: res.data.location.country,
            cityName: res.data.location.name,
            temperature: res.data.current.temp_c,
            conditionText: res.data.current.condition.text,
            icon: res.data.current.condition.icon
          })
          setCity("");
          setLoading(false);
        }).catch(error=>alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
  }
  
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city}/>
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
