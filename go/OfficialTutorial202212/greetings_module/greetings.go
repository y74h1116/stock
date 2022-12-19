package greetings

import (
	"errors"
	"fmt"
	"math/rand"
	"time"
)

// Hello returns a greeting for the named person
// ※先頭は大文字にすること (間違えて、小文字にしていたら、どうしても動かなかった)
func Hello(name string) (string, error) {
	// IF no name was given, return an error with a message.
	if name == "" {
		return "", errors.New("empty name")
	}
	// := は、宣言と初期化を同時にする省略形みたい (コンパイラが推論できるように初期化するみたい)
	message := fmt.Sprintf(randomFormat(), name)
	// Return a greeting that embeds the name in a message.
	return message, nil
}

// init sets initial values for variables used in the function.
// ※参照：https://tutorialedge.net/golang/the-go-init-function/
//       ↑のリンクに init 関数が、main 関数より先に呼ばれることを検証するテストプログラムが掲載されているけど
//       こうやって書いたらこう動きますって感じで、仕様っぽくないから、もう少し仕様っぽく書いて欲しいのだが。。
// ※ネットを検索したら、初期化の目的だけでなく、エントリポイントとして使える、という記事があり（なるほどって思った）
func init() {
	rand.Seed(time.Now().UnixNano())
}

func randomFormat() string {
	// A slice of message formats.
	formats := []string{
		"Hi, %v. Welcome!",
		"Great to see you, %v",
		"Hail, %v! Well met!",
	}

	// Return a randomly selected message format by specifying
	// a random index for the slice of formats.
	return formats[rand.Intn(len(formats))]
}
