import {Component} from 'react'
import './index.css'

const tossImages = {
  coinHeadImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  coinTailImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  state = {
    tossUrl: tossImages.coinHeadImage,
    total: 0,
    heads: 0,
    tails: 0,
    coinIsClicked: false,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossUrl: tossImages.coinHeadImage,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        coinIsClicked: !prevState.coinIsClicked,
      }))
    } else {
      this.setState(prevState => ({
        tossUrl: tossImages.coinTailImage,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        coinIsClicked: !prevState.coinIsClicked,
      }))
    }
  }

  render() {
    const {tossUrl, total, heads, tails, coinIsClicked} = this.state
    const coinClicked = coinIsClicked ? 'coinClicked' : ''
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossUrl}
            alt="toss result"
            className={`toss-image ${coinClicked}`}
          />
          <button
            type="button"
            className="toss-button"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="result">
            <p className="total">Total:{total}</p>
            <p className="heads">Heads:{heads}</p>
            <p className="tails">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
