Here's a comprehensive `README.md` file for your 3-tier application project, incorporating all the commands and setup steps from your terminal history:

```markdown
# 3-Tier Application Deployment (College Project)

A complete 3-tier application with React frontend, Node.js backend, and MongoDB database, deployed using Docker and Kubernetes (Minikube).

## Project Structure

```
3tier-app/
├── frontend/       # React application
├── backend/        # Node.js/Express API
├── database/       # MongoDB initialization scripts
├── k8s/           # Kubernetes deployment files
│   ├── mongo-deployment.yaml
│   ├── mongo-service.yaml
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
└── README.md
```

## Prerequisites

1. **System Requirements**:
   - Linux/macOS (Windows with WSL2)
   - Minimum 4GB RAM, 2 CPU cores
   - 20GB free disk space

2. **Install Required Tools**:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Docker
sudo apt install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
newgrp docker

# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Install kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Setup Instructions

### 1. Start Minikube Cluster

```bash
minikube start --driver=docker
eval $(minikube docker-env)
```

### 2. Build Docker Images

```bash
# Build frontend
cd frontend
docker build -t frontend:latest .
cd ..

# Build backend
cd backend
docker build -t backend:latest .
cd ..
```

### 3. Deploy to Kubernetes

```bash
# Apply all Kubernetes manifests
kubectl apply -f k8s/
```

### 4. Verify Deployment

```bash
# Check running pods
kubectl get pods -w

# Check services
kubectl get services

# Access the application
minikube service frontend
```

## Key Commands

### Development Commands
```bash
# Start React development server
cd frontend && npm start

# Start Node.js server
cd backend && node server.js
```

### Kubernetes Management
```bash
# View all resources
kubectl get all

# View logs
kubectl logs <pod-name>

# Delete resources
kubectl delete -f k8s/

# Scale deployments
kubectl scale deployment/frontend --replicas=3
```

### Docker Commands
```bash
# List images
docker images

# Remove unused images
docker system prune
```

## Troubleshooting

### Common Issues

1. **ImagePullBackOff Error**:
   ```bash
   # Rebuild images in Minikube environment
   eval $(minikube docker-env)
   docker build -t frontend:latest ./frontend
   docker build -t backend:latest ./backend
   
   # Set imagePullPolicy to Never in deployment YAMLs
   ```

2. **Minikube Service Unavailable**:
   ```bash
   # Check pod status
   kubectl describe pod <pod-name>
   
   # View cluster events
   kubectl get events --sort-by=.metadata.creationTimestamp
   ```

3. **Docker Permission Denied**:
   ```bash
   sudo usermod -aG docker $USER
   newgrp docker
   ```

## Project Features

- **Frontend**: React.js with Hooks
- **Backend**: Node.js/Express REST API
- **Database**: MongoDB with initialization scripts
- **Infrastructure**: 
  - Docker containers
  - Kubernetes orchestration
  - Minikube local cluster

## Contributors

- [Your Name](https://github.com/yourusername)

## License

This project is licensed under the MIT License.
```

This README includes:
1. Clear project structure visualization
2. Step-by-step setup instructions
3. Key commands for development and operations
4. Troubleshooting section for common issues
5. Technology stack overview
6. License information

You can customize the contributors section and license as needed. The markdown formatting makes it easy to read both on GitHub and in code editors.
