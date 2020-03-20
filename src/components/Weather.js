import React from 'react'; 
import r01d from '../havaikon/01d.png' 
class Weather extends React.Component{
    
    render() {
        var date = new Date().getDate(); //gün
        var month = new Date().getMonth() + 1; //ay
var year = new Date().getFullYear(); //yıl
var tarih=date+'.'+month+'.'+year;
var icon=this.props.main;
if(!icon){
    icon='loading.gif';
}
else if(icon){
    icon+='.png'
}
        const logo = require('../havaikon/'+icon);
        
        return(

            <main className="havadurumu mv-autoedit font-sans max-w-md mx-auto">
            <article className="max-w-sm mx-auto mt-5 bg-white rounded shadow">
            <section className="px-2 py-4 text-center bg-yellow-400 text-gray-800">
            <p className="text-2xl font-medium hava-il">{ this.props.city },TR</p>
            </section>
            <section className="flex items-center justify-center hava-ikon">
            <img src={logo} />
            <p className="font-bold text-5xl ml-1 hava-derece">{ Math.round(this.props.temperature)}°C</p>
            </section>
            <p className="text-sm text-center text-gray-600 hava-tarih">
                <date>{tarih}
            </date></p>
            <section className="mt-5 py-3 px-2 flex justify-around text-gray-700 bg-yellow-400">
            <p className="wind flex items-center hava-hiz">{this.props.speed}</p>
            <p className="humidity flex items-center hava-nem">%{ this.props.humidity }</p>
            </section>
            </article>
            </main>);
        
    }
    

}
export default Weather;