import React, {Component} from 'react'
import visa from "../../images/sprite.payment-cards.png"
import yandex from "../../images/sprite.payment-yandexmoney.png"
import payPal from "../../images/sprite.payment-paypal.png"
import webMoney from "../../images/sprite.payment-webmoney.png"
import qiwi from "../../images/sprite.payment-qiwi.png"



class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      className: true,
      giftClass: true,
      checkboxDisabled: true,
      subscribe: "subscribe"
    }
  }

  changeColor = (e) => {
    this.setState({className: !this.state.className});
    e.currentTarget.classList.toggle('cards__item-active');
    this.props.hideTerm();
  }

  handleChange = () => {
    this.setState({giftClass: !this.state.giftClass});
  }

  disableSubscr = () => {
    this.setState({checkboxDisabled: !this.state.checkboxDisabled});
  }

  giftCode = (e) => {
    if(this.state.giftClass === true) {
      this.disableSubscr();
      this.changeColor(e);
    } else {
      this.changeColor(e);
    }
  }

  showTerm = (e) => {
    this.changeColor(e);
    this.props.showTerm();
  }
  
  render() {
    let className = this.state.className ? "cards__item" : "cards__item";
    let giftClass = this.state.giftClass ? "" : "disabled"
    let checkboxDisabled = this.state.checkboxDisabled ? "" : "checkbox__disabled"

    return (
      <div className="payment__wrapper">
        <div className="payment__container">
          <div className="payment__title">Выберите способ оплаты</div>
          <ul className="payment__cards">
            <li className={className} onClick={this.showTerm} >
              <div className="item__image">
                <img className="image" src={visa} alt=""></img>
              </div>
            </li>
            <li className={className} onClick={this.showTerm}>
              <div className="item__image">
                <img className="image" src={yandex} alt=""></img>
              </div>
            </li>
            <li className={className} onClick={this.showTerm}>
              <div className="item__image">
                <img className="image" src={payPal} alt=""></img>
              </div>
            </li>
            <li className="cards__item" onClick={this.showTerm}>
              <div className="item__image">
                <img className="image" src={webMoney} alt=""></img>
              </div>
            </li>
            <li className="cards__item" onClick={this.changeColor}>
              <div className="sms__container">
                <div className="sms">SMS</div>
                <div className="sms__only">Только для России</div>
              </div>
            </li>
            <li className="cards__item" onClick={this.showTerm}>
              <div className="item__image">
                <img className="image" src={qiwi} alt=""></img>
              </div>
            </li>
            <li className={`${className} ${giftClass}`} onClick={this.giftCode}>
              <div className="code">Подарочный код</div>
            </li>
          </ul>
          <label className={`${this.state.subscribe} ${checkboxDisabled}`} for="subscription">
            <input type="checkbox" className="subscribe__checkbox" id="subscription" onChange={this.handleChange}></input>
            <span className="subscribe__label">Покупаю подписку в подарок</span>
          </label>
        </div>
      </div>
    )
  }
}

  export default Payment