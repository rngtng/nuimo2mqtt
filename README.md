# Go

```
tobi@megatonne:~/nuimo-golang$ sudo docker build -t go .
tobi@megatonne:~/nuimo-golang$ sudo docker run -it go:latest bash
root@04b1ba1c593e:/go# go run src/github.com/tolleiv/nuimo/examples/inputs/main.go
2020/04/22 19:54:41 init hci failed: can't create socket: address family not supported by protocol
exit status 1
 ```
 
 ```
root@04b1ba1c593e:/go# go run src/github.com/tolleiv/nuimo/examples/display/main.go
2020/04/22 19:54:57 init hci failed: can't create socket: address family not supported by protocol
exit status 1
```
