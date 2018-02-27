import React, {Component} from 'react'
import Payment from '../Payment/Payment'
import Term from '../Term/Term'
import sPhoto from "../../images/sprite.nocomission-silver.png"
import lockPhoto from "../../images/sprite.lock-silver.png"
import Amount from '../Amount/Amount'


class Club extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayTerm: 'none',
      displayAmount: 'none'
    }
  }

  showTerm = () => {
    this.setState({
      displayTerm: 'block'
    })
  }

  hideTerm = () => {
    this.setState({
      displayTerm: 'none'
    })
  }

  displayAmount = () => {
    this.setState({
      displayAmount: 'block'
    })
  }
  
  render() {
    return (
      <div className="club__wrapper">
        <header className="club__header">Клуб выгодных подписок</header>
        <Payment showTerm={this.showTerm} hideTerm={this.hideTerm}/>
        <Term displayTerm={this.state.displayTerm} displayAmount={this.displayAmount}/>
        <Amount displayAmount={this.state.displayAmount}/>
        <footer className="club__footer">
          <button className="payment__button">Оплатить</button>
          <div className="footer__text">
            <div className="comission">
              <div className="footer__image"><img className="image" src={sPhoto} alt="$"></img></div>
              <div className="comission__text">Нет комиссий при оплате банковскими картами Яндекс.Деньгами и Qiwi</div>
            </div>
            <div className="protection">
            <div className="footer__image"><img className="footer__image" src={lockPhoto} alt="lock"></img></div>
              <div className="protection__text">Все платежи надежно защищены и соответствуют международным стандартам</div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

  export default Club