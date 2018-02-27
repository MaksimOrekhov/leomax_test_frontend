import React, {Component} from 'react'


class Term extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  changeColor = (e) => {
    e.currentTarget.classList.toggle('term__item-active');
  }

  showAmount = (e) => {
    this.changeColor(e);
    this.props.displayAmount();
  }
  
  render() {
    return (
      <div className="term__wrapper" style={{display: this.props.displayTerm}}>
        <div className="term__container">
          <div className="term__title">На какой срок</div>
          <ul className="term__list">
            <li className="term__item" onClick={this.showAmount}>
              <div className="term__image"><img></img></div>
              <div className="item__title">2 года</div>
              <div className="item__price">2 880 руб.</div>
              <div className="item__month">
                <span className="item__month-price">120</span>
                <span className="item__month-money">руб./месяц</span>
              </div>
            </li>
            <li className="term__item" onClick={this.showAmount}>
              <div className="term__image"><img></img></div>
              <div className="item__title">1 год</div>
              <div className="item__price">1 500 руб.</div>
              <div className="item__month">
                <span className="item__month-price">125</span>
                <span className="item__month-money">руб./месяц</span>
              </div>
            </li>
            <li className="term__item" onClick={this.showAmount}>
              <div className="term__image"><img></img></div>
              <div className="item__title">6 месяцев</div>
              <div className="item__price">780 руб.</div>
              <div className="item__month">
                <span className="item__month-price">130</span>
                <span className="item__month-money">руб./месяц</span>
              </div>
            </li>
          </ul>
          <div className="term__text">В конце срока подписка продлится автоматически. Вы можете выключить автопродление в любой момент в настройках или отменить его.</div>
          <label className="auto__subscribe" for="auto__subscription">
            <input type="checkbox" className="auto__subscribe-checkbox" id="auto__subscription"></input>
            <span className="auto__subscribe-label">Продлевать подписку автоматически</span>
          </label>
          <div className="ofert">Оплачивая подписку, я принимаю условия оплаты, указанные в оферте и условия автоматического продления подписки на месяц вперед</div>
        </div>
      </div>
    )
  }
}

  export default Term