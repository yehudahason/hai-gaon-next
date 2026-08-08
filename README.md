Auto docker update

```
sudo docker run -d   --name watchtower   --restart unless-stopped   -v /var/run/docker.sock:/var/run/docker.sock   nickfedor/watchtower   --interval 180   --cleanup
```
