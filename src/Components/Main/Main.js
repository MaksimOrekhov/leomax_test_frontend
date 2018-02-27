import React, {Component} from 'react'
import Club from '../Club/Club'


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
    }
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <header className="main__header">Домашний магазин</header>
          <div className="container">
            <div className="main__title">Оформление подписки</div>
            <div className="main__text">Спасибо, что решили стать участником клуба</div>
          </div>
          <Club />
        </div>
        <footer className="main__footer">
          <div className="footer__container">
            <div className="copyright">&copy; 2010-2016 Домашний Магазин</div>
            <a href="#" className="support">Служба поддержки</a>
          </div>
        </footer>
      </div>
    )
  }
}

  export default Main