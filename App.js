import './App.css';
//import Board from './Board'
//import ReactDOM from 'react-dom'
//import Knight from './Knight'
//import Square from './Square'
import { Fragment } from 'react';
import Board from './Board'
//<Square black={black}>{piece}</Square>
//import BoardBishop from './BoardBishop'


function App() {
  return (
    <Fragment>
      <Board knightPosition={[7, 0]} bishopPosition={[4, 2]} rookposition={[3, 6]} queenposition={[1, 7]} kingposition={[0, 5]} pawnposition={[6, 4]}/>
      <div className="whitewin">
        White wins
      </div>
      <button className="buttonwhite">
        Click Here
      </button>
      <div className="blackwin">
        Black wins
      </div>
      <button className="buttonwhite">
        Click Here
      </button>
    </Fragment>
  );
}
export default App;
