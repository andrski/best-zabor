import React from 'react';
import Footer from './components/footer';
import './styles/App.css';
import './styles/zaborImages.css';
import './styles/additionalImages.css';
import Header from './components/header';
import Main from './components/main';
import Contacts from './components/contacts';
import Calculator from './components/calculator';
import Additional from './components/additional';

class App extends React.Component {

    state = {
        pressed: 1,
    };

    pressMain = () => { //USE ONLY!!!! ARrow function
        this.setState((state) => {
            return {
                pressed: 1,
            };
        });
    }

    pressCalculator = () => { //USE ONLY!!!! ARrow function
        this.setState((state) => {
            return {
                pressed: 2,
            };
        });
    }

    pressAdditional = () => { //USE ONLY!!!! ARrow function
        this.setState((state) => {
            return {
                pressed: 3,
            };
        });
    }

    pressContacts = () => { //USE ONLY!!!! ARrow function
        this.setState((state) => {
            return {
                pressed: 4,
            };
        });
    }

    rendermain() {
        return (
            <div className="App" >
                <Header  prM={this.pressMain} prC={this.pressContacts}
                    prAd={this.pressAdditional} prCalc={this.pressCalculator} />
                <Main />
                <Footer />
            </div>
            )
    }

    rendercalculator() {
        return (
            <div className="App">
                <Header  prM={this.pressMain} prC={this.pressContacts}
                    prAd={this.pressAdditional} prCalc={this.pressCalculator} />
                <Calculator />
                <Footer />
            </div>
            )
    }

    renderadditional() {
        return (
            <div className="App">
                <Header  prM={this.pressMain} prC={this.pressContacts}
                    prAd={this.pressAdditional} prCalc={this.pressCalculator} />
                <Additional />
                <Footer  />
            </div>
        )
    }

    rendercontacts() {
        return (
            <div className="App">
                <Header  prM={this.pressMain} prC={this.pressContacts}
                    prAd={this.pressAdditional} prCalc={this.pressCalculator} />
                <Contacts />
                <Footer  />
            </div>
            );
    }

    render() {
        switch (this.state.pressed) {
            case 1:
                return this.rendermain();
            case 2:
                return this.rendercalculator();  
            case 3:
                return this.renderadditional();
            case 4:
                return this.rendercontacts();
             default:
        } 
    }
}
export default App;
