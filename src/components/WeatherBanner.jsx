import React from 'react';
import styled from 'styled-components';

const WeatherBanner = ({ cityName, cityClouds, cityTemperature }) => {

  const clouds = capitalizeFirstLetter(cityClouds)
  const getBackgroundColor = () => {
    if (clouds === 'Céu aberto' || clouds === 'Céu limpo') {
      return '#00bbff'; 
    } else if (clouds === 'Chovendo') {
      return 'blue'; 
    } else if (clouds === 'Nevando') {
      return '#a6f7e4'; 
    } else if (clouds === 'Tempestade') {
      return '#7114b8'; 
    } else if (clouds === 'Chuviscando') {
      return '#09e8e8'; 
    } else if (clouds === 'Neblina' || clouds === 'Nublado') {
      return '#9e9d9d'; 
    } else if (clouds === 'Algumas nuvens') {
      return '#038ca1'; 
    } else {
      return 'yellow'
    }
  };

  const backgroundColor = getBackgroundColor();

  return (
    <WeatherBannerComponent style={{ backgroundColor }}>
      <LeftWrapper>
      <CityName>Agora: {cityName}</CityName>
        <TemperaturesMax>Máxima: {cityTemperature.temp_max}</TemperaturesMax>
        <TemperaturesMin>Mínima: {cityTemperature.temp_min}</TemperaturesMin>
      </LeftWrapper>
      <RightWrapper>
        <CityClouds>{clouds}</CityClouds>
        <Temperature>{cityTemperature.temp} °C</Temperature>
      </RightWrapper>
      {/* Outros detalhes do banner */}
    </WeatherBannerComponent>
  );
};

export default WeatherBanner;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const WeatherBannerComponent = styled.div`
    padding: 12px;
    border-radius: 10px;
    margin-top: 35px;
    width:550px;
    display: flex;
    color: white;
    justify-content: space-between;
`;
const CityName = styled.h1`
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 22px;
`;

const CityClouds = styled.div`
    margin-top: 10px;
    text-align: right;
`

const Temperature = styled.div`
    margin-top: 2px;
    font-size: 40px;
`

const TemperaturesMax = styled.div`
    font-weight: bold;
`
const TemperaturesMin = styled.div`
    font-weight: bold;
`

const LeftWrapper = styled.div`
`
const RightWrapper = styled.div`
`