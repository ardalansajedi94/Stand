import React , {Component} from 'react';
import CardButton from "./CardButton";


export default class ButtonContainer extends Component{
    render(){
        return(
            <div className="Button-container">
                <CardButton align="TopLeft"/>
                <CardButton align="TopRight"/>
                <CardButton align="BottomLeft"/>
                <CardButton align="BottomRight"/>
            </div>
        )
    }
}