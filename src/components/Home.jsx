import React,{ useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "./Loader";
import Card from "./Card";
import img from '../assets/Co.jpg';
import CardDay from "./CardDay";


const Container = styled.div`
max-width: 100%;
height: 100vh;
position: relative;
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 4444;
background-position: center;
background-size: cover;
background-color: #e4ca82e1;

`;

const SearchContainer =  styled.div`
display: flex;
flex-direction:row;
justify-content: center;
gap: 10px; 
padding: 30px;
`;

const SearchInput = styled.input`
  background-color: #edf5f083; 
  color: #6d6219;
  min-width: 350px;
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
  cursor: pointer;
  border: 6px solid #ffffff;
  outline: none;
  /* &:hover {
    background-color: #e4e4dfd2;
    color: #6d6219;
  } */
`;
const LoaderItem = styled(Loader)`
`;
const CardItem = styled(Card)`
`;
const BoxDay = styled.div`
display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;
gap: 20px;
`;
const OneDay = styled.div`
`;
const FiveDay = styled.div``;
const WetDataTime = styled.div`
display: flex;
flex-flow: row;
justify-content: center;
align-items: center;
margin:10px;
`;

function Home() {

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState('');
  const [weather,setWeather]= useState(null);
  const [weather5d,setWeather5d]= useState(null);
  const getLocation = () => {
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
      let request = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=6ae6c79ccba3cdde251bf0965d4d137a`;
      try {
        const { data } = await axios.get(request, {
          headers: { Accept: "application/json" },
        });
        setWeather5d(data)
        console.log(weather5d.list[1])
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
  <SearchInput placeholder="City Name ..." value={city}  onChange={(e) =>setCity(e.target.value)} /> 
  <SearchButton onClick={getCity}>Search</SearchButton>
  </SearchContainer>
  <BoxDay>
  <OneDay>
  { !weather ? <LoaderItem /> : <CardItem weather={weather} weather5d={weather5d} />}
  </OneDay>
  <FiveDay>
  { !weather5d ? ' ' : <WetDataTime>
    <CardDay data={weather5d.list[1]}/> 
    <CardDay data={weather5d.list[9]}/>
    <CardDay data={weather5d.list[17]}/>
    <CardDay data={weather5d.list[25]}/>
    <CardDay data={weather5d.list[33]}/>
    </WetDataTime>
    }
    </FiveDay>
    </BoxDay>
   </Container>
  )
}

export default Home;
