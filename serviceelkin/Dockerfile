FROM golang:1.24

WORKDIR /usr/src/web-service

COPY go.mod go.sum ./
RUN go mod download


COPY . .
RUN go build -v -o /usr/local/bin/web-service ./...

CMD ["web-service"]