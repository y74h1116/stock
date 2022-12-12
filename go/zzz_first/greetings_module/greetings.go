package greetings

import "fmt"

// Hello returns a greeting for the named person
func hello(name string) string {
	// Return a greeting that embeds the name in a message.
	// := は、宣言と初期化を同時にする省略形みたい (コンパイラが推論できるように初期化するみたい)
	message := fmt.Sprintf("Hi, %v. Welcome!", name)
	return message
}

