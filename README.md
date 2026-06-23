# 🐳 Docker Test Stack

A modern, containerized stack featuring a TypeScript API built with **Hono** and a **PostgreSQL** database, configured for seamless local development and deployment.

> [!IMPORTANT]
> **This is a test project only.** Its primary purpose is to demonstrate and test the capability of using Docker and Docker Compose through a **Remote-SSH** connection.

---

## 🏗️ Project Architecture

This project is fully containerized using Docker and orchestrated with Docker Compose:

- **API Service** (`/api`): A fast, lightweight TypeScript API built using the [Hono](https://hono.dev/) framework. It runs on [Node.js](https://nodejs.org/) inside an Alpine container, leveraging `tsx` for zero-config TypeScript execution.
- **Database Service** (`db`): A [PostgreSQL 15](https://www.postgresql.org/) database service with persistent volume storage.

### Repository Structure

```
docker-test/
├── api/
│   ├── src/
│   │   └── index.ts          # Main entry point for the Hono API
│   ├── Dockerfile            # Container definition for the API
│   ├── tsconfig.json         # TypeScript configuration
│   ├── package.json          # Node dependencies and metadata
│   └── package-lock.json
├── docker-compose.yml        # Orchestrates the API and DB services
├── docker-cheatsheet.md      # Reference sheet for Docker commands
└── README.md                 # Project documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

1. **Clone the repository** (if not already done).
2. **Start the containers** in the background:
   ```bash
   docker compose up -d --build
   ```
   *This will build the API container, pull the PostgreSQL image, set up the network, and start both services.*

3. **Verify the services are running**:
   ```bash
   docker compose ps
   ```

4. **Access the API**:
   Open [http://localhost:3000](http://localhost:3000) in your browser or make a request using `curl`:
   ```bash
   curl http://localhost:3000
   ```
   **Expected Response:**
   ```json
   {
     "status": "success",
     "message": "Docker Remote-SSH connection is solid! Hono API is running.",
     "timestamp": "2026-06-23T05:57:50.000Z"
   }
   ```

---

## 🛠️ Configuration

The database credentials and connection string are managed via environment variables in [docker-compose.yml](file:///root/repos/docker-test/docker-compose.yml):

- **Database Host**: `db` (internal Docker network hostname)
- **Database Port**: `5432`
- **Database Name**: `testdb`
- **User**: `postgres`
- **Password**: `supersecret`
- **DATABASE_URL** (provided to API): `postgres://postgres:supersecret@db:5432/testdb`

---

## 🐳 Useful Docker Commands

For a full reference on Docker and Docker Compose commands, check out [docker-cheatsheet.md](file:///root/repos/docker-test/docker-cheatsheet.md).

Here are the most common commands:

| Action | Command |
| :--- | :--- |
| **Start Services** | `docker compose up -d` |
| **Rebuild & Start** | `docker compose up -d --build` |
| **Stop Services** | `docker compose down` |
| **Stop & Clear Volumes** | `docker compose down -v` |
| **View Live API Logs** | `docker compose logs -f api` |
| **View Live DB Logs** | `docker compose logs -f db` |

---

## 📝 License

This project is licensed under the ISC License.
