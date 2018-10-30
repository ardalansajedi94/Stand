import 'bootstrap/dist/css/bootstrap.min.css';
import React , {Component} from 'react';
import Slider from "./Component/Slider";
import Logo from "./Component/Logo";
import './App.css'
import CardButton from "./Component/CardButton";
import ButtonContainer from "./Component/ButtonContainer";
import Services from "./Component/Services";
export default class App extends Component{
    render(){
        return(
            <div className="main">
                <Slider/>
                <Logo/>
                <ButtonContainer/>
                <Services/>
            </div>
        )
    }
}