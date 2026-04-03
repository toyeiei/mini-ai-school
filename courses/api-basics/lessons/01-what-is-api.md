# What is an API

An API (Application Programming Interface) lets apps talk to each other.

## Real-World Analogy

Restaurant metaphor:
- **You** (client) order food
- **Menu** (API) lists what's available
- **Kitchen** (server) prepares your order
- You don't enter the kitchen - you use the menu

APIs work the same way:
- Apps request data through the API
- Server processes and returns data
- Client doesn't see the internal workings

## Types of APIs

| Type | Example |
|------|---------|
| **Web APIs** | REST, GraphQL |
| **Library APIs** | jQuery, React |
| **Operating System** | Windows API, macOS API |

We'll focus on **Web APIs**.

## Client-Server Model

```
┌─────────┐     Request      ┌─────────┐
│  Client │ ───────────────→ │ Server  │
│ (You)   │ ←─────────────── │ (API)   │
└─────────┘     Response     └─────────┘
```

## Why APIs Matter

- Apps share data (weather, maps, payments)
- Mobile apps connect to backends
- Microservices architecture
- Third-party integrations

## Summary

- API = menu for programs
- Clients request, servers respond
- Enables communication between apps
- Web APIs are everywhere
