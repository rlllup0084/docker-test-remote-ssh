# 🐳 Docker & Docker Compose Cheat Sheet

A quick-reference guide for the most essential Docker CLI and Docker Compose commands for day-to-day development and server management.

---

## 📦 Container Management

| Command | Description |
| :--- | :--- |
| `docker run -d -p 8080:80 <image>` | Run a container in the background (`-d`), mapping host port 8080 to container port 80. |
| `docker ps` | List all **running** containers. |
| `docker ps -a` | List **all** containers (running and stopped). |
| `docker stop <container_id/name>` | Gracefully stop a running container. |
| `docker start <container_id/name>` | Start a previously stopped container. |
| `docker rm <container_id/name>` | Remove a stopped container (use `-f` to force remove a running one). |
| `docker exec -it <container> sh` | Open an interactive shell inside a running container (use `bash` if available). |
| `docker logs -f <container>` | Tail the live console logs of a container. |

---

## 🖼️ Image Management

| Command | Description |
| :--- | :--- |
| `docker build -t <name>:<tag> .` | Build an image from the `Dockerfile` in the current directory and tag it. |
| `docker images` | List all locally stored images. |
| `docker pull <image_name>` | Download an image from Docker Hub (or configured registry). |
| `docker push <image_name>` | Upload a local image to a registry. |
| `docker rmi <image_id>` | Remove an image from your local machine. |

---

## 🐙 Docker Compose

*Note: Run these commands in the same directory as your `docker-compose.yml`.*

| Command | Description |
| :--- | :--- |
| `docker compose up -d` | Create and start all services in the background. |
| `docker compose up -d --build` | Force a rebuild of custom images before starting. |
| `docker compose down` | Stop and remove containers and internal networks. |
| `docker compose down -v` | Stop and remove containers, networks, **AND attached volumes**. |
| `docker compose ps` | List the status of services defined in the Compose file. |
| `docker compose logs -f <service>` | Tail the live logs for a specific service (e.g., `api` or `db`). |

---

## 💾 Volumes & Networks

| Command | Description |
| :--- | :--- |
| `docker volume ls` | List all Docker volumes. |
| `docker volume rm <volume_name>` | Delete a specific volume. |
| `docker network ls` | List all Docker networks. |
| `docker inspect <container>` | View low-level details of a container (IP address, mounts, environment variables). |

---

## 🧹 System & Cleanup (Housekeeping)

| Command | Description |
| :--- | :--- |
| `docker system df` | Show exactly how much disk space Docker resources are consuming. |
| `docker system prune` | **Standard Clean:** Remove stopped containers, unused networks, and dangling (unnamed) images. |
| `docker system prune --volumes` | **Deep Clean:** Same as above, but also removes any volume not attached to a running container. |
| `docker image prune -a` | Remove all images not currently used by a container. |
| `docker rm -f $(docker ps -aq)` | Danger: Stop and remove **all** containers on the system forcefully. |
