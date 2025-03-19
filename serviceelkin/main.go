package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func sayHi(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "Elkin Service built on Golang, if you are reading this it means the server is up 😺 (I hope 😿..)."})
}

func main() {
	router := gin.Default()

	config := cors.Config{
		AllowOrigins:     []string{"*"}, // Permite cualquier origen
		AllowMethods:     []string{"GET"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}

	router.Use(cors.New(config))

	router.GET("/api", sayHi)

	router.Run(":5010")
}
