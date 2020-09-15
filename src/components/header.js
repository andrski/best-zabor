import React from 'react';

const api_key = "7a05df2593412ef05ed8b269ff385727";
const city = "Chervyen";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: undefined,
            city: undefined,
        };
    }

    
    gettingWeather = async () => {
        //e.preventDefault();
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
        const data = await api_url.json();
        
        this.setState({
            temp: data.main.temp,
            city: data.name,
        });
      // console.log(this.state.temp);
    }

componentDidMount(){
this.gettingWeather();
}
componentWillUnmount(){
this.gettingWeather();
}

    render() {
        return (
            <div className="header">
                <div className="temp">
                    <p>{this.state.temp}</p>
                    {/* <p className="cityName">{this.state.city}</p> */ } 
                    <p className="cityName">Червень</p>
                </div>
                
                <nav>
                    <div className="div-nav">
                        <button className="button" onClick={this.props.prM}>Главная</button>
                        <button className="button" onClick={this.props.prCalc}>Рассчитать стоимость</button>
                        <button className="button" onClick={this.props.prAd}>Дополнительные услуги</button>
                        <button className="button" onClick={this.props.prC}>Контакты</button>
                {/* <button onClick={this.gettingWeather}>погода</button> */}
                    </div>
                </nav>
               
            </div>
            );
    }
}
export default Header;