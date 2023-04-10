import React,{ useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "./Loader";
import Card from "./Card";
import img from '../assets/fon.jpg';

const Container = styled.div`
 background-image: url(${img});
width: auto;
height:750px;
border: 2px solid red;
background-color: #e4ca82e1;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`;
const SearchContainer =  styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
`;

const SearchInput = styled.input`
  background-color: #edf5f083; 
  color: #cbc55b;
  min-width: 90%;
  max-width: 500px;
  height:10px;
  font-size: 16px ;
  border-radius: 60px;
  padding: 16px ;
  border: 6px solid #ffffff;
  `;
const SearchButton = styled.button`
  background-color: #edf5f083;
  color: #6d6219;
  font-size: 16px ;
  border-radius: 60px;
  padding: 0.5rem 1rem ;
  margin: 1rem;
  cursor: pointer;
  border: 6px solid #ffffff;
  outline: none;
  &:hover {
    background-color: #e4e4dfd2;
    color: #6d6219;
  }
`;
const LoaderItem = styled(Loader)`
width: 500px;
height: 100px;
text-transform: uppercase;
`;
const CardItem = styled(Card)`
/* 
  width: 200px;
  height: 250px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

function Home() {

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState('');
  const [weather,setWeather]= useState(null);
  const [weather5d,setWeather5d]= useState(null);
  const getLocation = () =>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  };
    async function getCity() {
      let request = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&units=metric&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
      try {
        const { data } = await axios.get(request, {
          headers: { Accept: "application/json" },
        });
        setLocation({ latitude : data[0].lat, longitude : data[0].lon});
        getWeather()

      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    }
 
    async function getWeather() {
      let request = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
      try {
        const { data } = await axios.get(request, {
          headers: { Accept: "application/json" },
        });
        setWeather(data)
        getWeather5d()
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    }
    async function getWeather5d() {
      let request = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
      try {
        const { data } = await axios.get(request, {
          headers: { Accept: "application/json" },
        });
        setWeather5d(data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    }
  useEffect(() => {
    location ? getWeather() : getLocation() 
  },[location])

  return (
  <Container>
  <SearchContainer >
  <SearchInput value={city} onChange={(e) =>setCity(e.target.value)} /> <SearchButton onClick={getCity}>Search</SearchButton>
  </SearchContainer>
  { !weather ? <LoaderItem /> : <CardItem weather={weather} weather5d={weather5d} />}
   </Container>
  )
}

export default Home;
