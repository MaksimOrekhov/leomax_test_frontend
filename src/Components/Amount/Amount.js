import React, {Component} from 'react'

class Amount extends Component {

  render() {
    return (
      <div className="amount__wrapper" style={{display: this.props.displayAmount}}>
        <div className="amount__container">
          <div className="amount__title">Итого к оплате (за {this.props.term})</div>
          <div className="amount__summ">{this.props.termAmount}{+ this.discount} <span>руб.</span></div>
          <div className="amount__month">Далее {this.props.amountMonth} руб. в месяц</div>
          <label className="discount" for="discount">
            <input type="checkbox" className="discount__checkbox" id="discount"></input>
            <span className="discount__label">Добавить подписку на скидку 5% на весь ассортимент товаров</span>
          </label>
          <div className="discount__text">Срок действия подписки {this.props.term}. Стоимость подписки {} руб.</div>
        </div>
      </div>
    )
  }
}

export default Amount