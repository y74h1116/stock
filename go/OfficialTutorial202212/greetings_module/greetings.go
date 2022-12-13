package greetings

import (
	"errors"
	"fmt"
)

// Hello returns a greeting for the named person
// ※先頭は大文字にすること (間違えて、小文字にしていたら、どうしても動かなかった)
func Hello(name string) (string, error) {
	// IF no name was given, return an error with a message.
	if name == "" {
		return "", errors.New("empty name")
	}
	// := は、宣言と初期化を同時にする省略形みたい (コンパイラが推論できるように初期化するみたい)
	message := fmt.Sprintf("Hi, %v. Welcome!", name)
	// Return a greeting that embeds the name in a message.
	return message, nil
}

