import React , {Component} from 'react';


export default class CardButton extends Component{
    render(){
        if (this.props.align === "TopLeft") {
        return(
            <div className="card_style top_left">
                <p>جدول پرواز های داخلی</p>
            </div>
        )}
        else if (this.props.align === "TopRight") {
            return(
                <div className="card_style top_right">
                    <p>جدول پرواز های خارجی</p>
                </div>
            )}
        else if (this.props.align === "BottomLeft") {
            return(
                <div className="card_style bottom_left">
                    <p>سوالات متداول</p>
                </div>
            )}
        else if (this.props.align === "BottomRight") {
            return(
                <div className="card_style bottom_right">
                    <p>اطلاعات فرودگاه</p>
                </div>
            )}

    }
}