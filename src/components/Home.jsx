import React,{ useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "./Loader";
import Search from "./Search";
import Card from "./Card";

const Container = styled.div`
width: 100%;
height: 100%;
background-color: #c6d2d4;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
`;


const SearchContainer =  styled.div``;
const SearchInput = styled.input``;
const SearchButton = styled.button``;
const SearchLocation = styled.button``;
const ViewContainer  = styled.div``;
const LoaderItem = styled(Loader)`
width: 500px;
height: 100px;
border: 2px solid blue;
`;
const CardItem = styled(Card)`
width: 500px;
height: 100px;
border: 2px solid green;
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
      let request = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
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
      let request = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
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
  <SearchInput value={city} onChange={(e) =>setCity(e.target.value)} />
  <SearchButton onClick={getCity}>Search</SearchButton>
  </SearchContainer>
  { !weather ? <LoaderItem /> : <CardItem weather={weather} weather5d={weather5d} />}
   </Container>
  )
}

export default Home;
