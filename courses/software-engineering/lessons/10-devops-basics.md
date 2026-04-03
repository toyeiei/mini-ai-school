# DevOps Basics

DevOps bridges development and operations. It focuses on automation, continuous delivery, and reliable deployments.

## Continuous Integration (CI)

Automatically run tests and checks when code changes.

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
```

## Continuous Deployment (CD)

Automatically deploy verified code to environments.

```yaml
# Deploy to staging on merge to develop
# Deploy to production on merge to main
```

## Environments

| Environment | Purpose | Access |
|-------------|---------|--------|
| Local | Development | Developer machines |
| Development | Integration testing | Development team |
| Staging | Pre-production testing | QA, Stakeholders |
| Production | Live application | End users |

## Container Basics with Docker

Containers package your application with its dependencies.

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# Build and run
docker build -t myapp .
docker run -p 3000:3000 myapp
```

## Basic Monitoring

Track application health in production.

### Metrics to Watch

- **Response time** - How fast is your app responding?
- **Error rate** - How often do requests fail?
- **Uptime** - Is the application available?
- **Resource usage** - CPU, memory, disk

### Logging

```javascript
// Structured logging
console.log(JSON.stringify({
    level: 'info',
    message: 'User logged in',
    userId: user.id,
    timestamp: new Date().toISOString()
}));
```

## Infrastructure as Code

Define infrastructure in code files, not manually.

```yaml
# docker-compose.yml
version: '3'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## Deployment Best Practices

1. **Automate everything** - Manual steps fail
2. **Deploy small changes** - Easier to debug
3. **Rollback plan** - Know how to undo
4. **Monitor after deploy** - Catch issues quickly
5. **Feature flags** - Enable/disable without redeploying

## The Deploy Pipeline

```
Code → Build → Test → Stage → Deploy → Monitor
  │       │       │       │       │        │
 Commit   │       │       │       │        │
          ▼       │       │       │        │
      Compile     │       │       │        │
                  ▼       │       │        │
              Unit Tests   │       │        │
                          ▼       │        │
                       Build      │        │
                                  ▼        │
                             Integration Tests
                                          ▼
                                        Deploy
```

## Key Takeaways

- CI catches issues early
- CD deploys quickly and safely
- Containers provide consistency
- Monitor in production
- Automate everything possible
