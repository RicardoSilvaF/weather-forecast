import Header from './components/Header';
import SearchBox from './components/SearchBox';
import React, { useState } from 'react';
import WeatherBanner from './components/WeatherBanner';
import styled from 'styled-components';
import GraphBox from './components/GraphBox';
import dayjs from 'dayjs';

const apiKey = import.meta.env.VITE_API_KEY;
dayjs.locale('pt-br');

function App() {
  const [cityName, setCityName] = useState('');
  const [cityWeather, setCityWeather] = useState(null);
  const handleSearch = () => {
    searchCityCoordinates(cityName, setCityWeather, setDataForecast);
  };
  const [dataForecast, setDataForecast] = useState(null);
  return (
    <Wrapper>
      <Header />
      <SearchBox
        cityName={cityName}
        setCityName={setCityName}
        onSearch={handleSearch}
      />
      {cityWeather !== null && (
      <WeatherBanner
        cityName={cityWeather ? cityWeather.name : ''}
        cityClouds={cityWeather ? cityWeather.weather[0].description : ''}
        cityTemperature={cityWeather ? cityWeather.main : ''}
      />
      )}
      {dataForecast !== null && <GraphBox dataForecast={dataForecast} />}
    </Wrapper>
  );
}

async function searchCityCoordinates(city, setCityWeather, setDataForecast) {
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
      return response.json();
    })
    .then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      searchCityWeather(lat, lon, setCityWeather, setDataForecast);
    })
    .catch((error) => {
      console.error(error);
    });
}

async function searchCityWeather(lat, lon, setCityWeather, setDataForecast) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
      return response.json();
    })
    .then((data) => {
      setCityWeather(data);
      createForecastGraph(lat, lon, setDataForecast)
    })
    .catch((error) => {
      console.error(error);
    });
}

async function createForecastGraph(lat, lon, setDataForecast) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`);

  if (!response.ok) {
    throw new Error("Erro ao buscar os dados da API");
  }

  const data = await response.json();

  const filteredData = data.list
    .filter(item => item.dt_txt.endsWith("12:00:00"))
    .map(item => ({
      dt: dayjs(item.dt_txt).format("DD/MM (ddd)"), // Adicione o dia da semana
      temp: item.main.temp,
    }));

  setDataForecast(filteredData);
}

export default App;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`