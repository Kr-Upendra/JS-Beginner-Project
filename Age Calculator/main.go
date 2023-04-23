package main

import (
	"fmt"
)

func main() {
	fmt.Println("Array thing!")

	// arr := [5]int{1, 2, 3, 4, 5}
	arr := [5]string{}


	for i := 0; i < len(arr); i++ {
		fmt.Scan(&arr[i])
	}

	fmt.Println(arr)

}