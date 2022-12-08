import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// square コンポーネントは自分自身で state を管理せず
// Board から値を受け取って、
// クリックされた時はそのことを Board コンポーネントに伝えるだけ。
// React 用語で「制御されたコンポーネント(controlled component)」という。
// 
// Square は、自分の state を持たないので
// クラスコンポーネントから
// 関数コンポーネントに書き換えた
//
// ※this.props は、props に書き換え
// this がない方が実装しやすいかも
// 
// ※ただし、React 16.8 からはステートフル関数コンポーネントが書けるようになったらしい
function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        // Board から Square には、props として、2つの値を渡す (value と onClick)
        // onClick プロパティには Board クラスの関数 (handleClick) を渡す
        //
        // ※Squareは、カスタムコンポーネントなので
        // プロパティ名の命名は自由 (onClick ではなくてもよい)
        // だけど、一応、React の慣習では
        // イベントを表す props には on[Event名] という名前、
        // イベントハンドラとなるメソッドには handle[Event名]という名前をつけるのが一般的。 
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
