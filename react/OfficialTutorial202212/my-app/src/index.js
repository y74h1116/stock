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

    // TODO：あとで削除 ※handleClickメソッドは、Gameコンポーネントに移動
    // handleClick(i) {
    //     const squares = this.state.squares.slice();
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext? 'X' : 'O';
    //     this.setState({
    //         squares: squares,
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }

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
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i) {
        // this.state.stepNumber で指定されている手番に戻す(というか指定された手番以降を消す)
        const history = this.state.history.slice(0, this.state.stepNumber + 1);

        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    // ※render メソッドについてメモ
    // 参照：https://ja.reactjs.org/docs/state-and-lifecycle.html
    //   > setState() が呼び出されたおかげで、React は state が変わったということが分かるので、
    //   > render() メソッドを再度呼び出して、画面上に何を表示すべきかを知ります。
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            // ※チュートリアルのメモ
            // key は、特別なプロパティで、React によって予約されている。
            // 要素が作成される際、React は key プロパティを引き抜いて
            // 返される 要素に直接その key を格納します。
            // key は props の一部のようにも思えますが
            // this.props.key で参照できません。
            // React はどの子要素を更新すべきかを決定する際に、 key を自動的に使用します。
            // コンポーネントが自身の key について確認する方法はありません。
            // (したがって)
            // 動的なリストを構築する場合は正しい key を割り当てることが強く推奨されます。
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
    
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
                <ol>{moves}</ol>
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
