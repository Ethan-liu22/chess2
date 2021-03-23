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
      <Board knightPosition={[1, 0]} bishopPosition={[2, 7]} rookPosition={[0, 7]} queenPosition={[3, 7]} kingPosition={[4, 7]} pawnPosition={[0, 6]}/>

      <table>
        <thead>
          <tr>
            <th colspan="2">The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
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



