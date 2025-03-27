import React from "react";

export default function App() {
  const [score, setScore] = React.useState(0);
  const getScore = (e) => {
    setScore(Number(e.target.value));
  }
  const getScoreBarStyle = () => {
    // 1- Compute width
    let scoreWidth = `40%`;
    scoreWidth = (score * 10).toString() + "%";
    //console.log(scoreWidth);

    // 2- Compute color (optional)
    let scoreColor = ``;
    if (Number(score) >= 0 && Number(score) < 5) {
      scoreColor = "#C5764BFF";
    } else if (Number(score) >= 5 && Number(score) < 7) {
      scoreColor = "#FFC107";
    } else if (Number(score) === 7) {
      scoreColor = "#fffb07";
    } else if (Number(score) === 8) {
      scoreColor = "#deff07";
    } else if (Number(score) === 9) {
      scoreColor = "#c1ff07";
    } else if (Number(score) === 10) {
      scoreColor = "#62ff07";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={(e) => getScore(e)}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
