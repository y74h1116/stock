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
    // TODO：あとで削除 ※Gameコンポーネントで state を管理するので、Board のコンストラクタは不要になる
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     };
    // }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
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
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
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
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
        };
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                />
                </div>
                <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
　    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
