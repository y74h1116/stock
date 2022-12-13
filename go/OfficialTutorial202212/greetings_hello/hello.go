package main

import (
	"fmt"
	"log"

	"example.com/greetings"
)

func main() {
	// Set properties of the predefined Logger, including
	// the log entry prefix and a flag to disable printing
	// the time, source file, and line number.
	// 
	// ※log パッケージのドキュメントは下記
	//   https://pkg.go.dev/log
	//   https://pkg.go.dev/log#SetPrefix
	//   https://pkg.go.dev/log#SetFlags
	log.SetPrefix("greetings: ")
	log.SetFlags(0)

	// Request a greeeting message.
	// このチュートリアルは、エラーハンドリングがテーマなので
	// 意図的にエラーになるパラメータを渡す
	message, err := greetings.Hello("")
	// If an error as returned, print it to the console and
	// exit the program.
	if err != nil {
		log.Fatal(err)
	}

	// Get a greeting message and print it.
	fmt.Println(message)
}
