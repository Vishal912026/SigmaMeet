# 🎥 SigmaMeet

A full-stack, real-time video conferencing platform built from scratch — supporting multi-user video calls, live chat, screen sharing, and user authentication with meeting history tracking.

🔗 **Live Demo:** [sigmameet-1.onrender.com](https://sigmameet-1.onrender.com)

> ⚠️ Note: This app is hosted on Render's free tier. If the backend has been 
> inactive, the first request may take 30-50 seconds to wake up the server.

---

## ✨ Features

- 🔐 **User Authentication** — Secure register/login with bcrypt password hashing
- 📹 **Multi-User Video Calls** — Peer-to-peer WebRTC mesh architecture supporting multiple participants in a single meeting
- 💬 **Real-Time Chat** — In-call messaging powered by Socket.io
- 🖥️ **Screen Sharing** — Share your screen with other participants mid-call
- 🎙️ **Media Controls** — Toggle camera/microphone on the fly
- 📜 **Meeting History** — Logged-in users can view their past meeting activity
- 📱 **Cross-Device Support** — Fully functional across desktop and mobile browsers

## 🛠️ Tech Stack

**Frontend:** React, React Router, Material UI (MUI), Axios, Socket.io-client

**Backend:** Node.js, Express, MongoDB (Mongoose), Socket.io, bcrypt

**Real-Time Communication:** WebRTC (peer-to-peer), STUN server for NAT traversal

**Deployment:** Render (Web Service for backend, Static Site for frontend)

## 🏗️ Architecture

- REST API (`/api/v1/users`) handles authentication and meeting history
- Socket.io server manages signaling for WebRTC connections, chat messages, and room/participant management
- MongoDB Atlas stores user accounts and meeting activity logs

## 🚀 Running Locally

**Backend:**
```bash
cd Backend
npm install
npm start
```
Create a `.env` file in `Backend/` with:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

