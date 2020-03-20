import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Weather from "./components/Weather";

const API = 'https://api.openweathermap.org/data/2.5/weather?appid=c050a3443ba9182498e549250a8ed089&units=metric&q=';
var il,ii;
class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        main: undefined,
        il:undefined,
        speed:undefined,
        error: undefined
    } 
   
    getWeather = async (e) => {                      // async/await ile kodun senkronize olmasını sağlayalım
        e.preventDefault();
        const city = e.target.elements.city.value; // formdaki city değerini aldık
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c050a3443ba9182498e549250a8ed089&units=metric`);
        const data = await api_call.json();     // gelen veriyi hson formatına dönüştürelim
        console.log(data);
        if (data.cod !=404) {
            this.setState({
                temperature: data.main.temp,                  // ısı verisinin adresi
                city: data.name,                // şehrin adresi
                humidity: data.main.humidity,// nemin adresi
                speed: data.wind.speed,               // hız              
                main: data.weather[0].icon,               // burda obje dönüyor o yüzden 0. dzindeki main seçtik
                error: ""
            });
        } else {alert("Aradığınız Şehir Bulunamadı!");
        }
    }


 


    componentDidMount() {
     

        fetch('https://extreme-ip-lookup.com/json/')
        .then(response => response.json())
        .then(data =>    il=data.city
        ); 
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${il},TR&appid=c050a3443ba9182498e549250a8ed089&units=metric`)
          .then(response => response.json())
          .then(data =>  this.setState({
            temperature: data.main.temp,                  // ısı verisinin adresi
            city: il,                             // şehrin adresi
            humidity: data.main.humidity,               // nemin adresi
            speed: data.wind.speed,               // hız
            main: data.weather[0].icon,               // burda obje dönüyor o yüzden 0. dzindeki main seçtik
            error: ""
        })
          );
          
      }
 
    render() {
        return (
            <div className='container'>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <p style={{fontSize:'20px',textAlign:'center'}}>React Hava Durumu</p>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <center>

                   
            <Form getWeather={this.getWeather} /></center></div>  </div>
            <div className="row">
                                        <Weather
                                            temperature={this.state.temperature+''}
                                            humidity={this.state.humidity}
                                            city={this.state.city}
                                            country={this.state.country}
                                            main={this.state.main}
                                            speed={this.state.speed}
                                            error={this.state.error}
                                        />
                                   </div>
                                   
	<br/>
    <hr/>
<p style={{textAlign: 'center'}}><a href="https://yusufkarakaya.com.tr">- Y.Karakaya -</a></p>
            </div>
        );
    }
};

export default App;
