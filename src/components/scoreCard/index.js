import './index.css'

const ResulCard = props => {
  const {score, playAgain} = props
  const play = () => {
    playAgain()
  }
  return (
    <div className="result">
      <div className="resultContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophyImg"
        />
        <p className="scorePara">YOUR SCORE</p>
        <p className="score">{score}</p>
        <div className="buttonContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="resetImg"
          />
          <button className="playButton" type="button" onClick={play}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}
export default ResulCard
