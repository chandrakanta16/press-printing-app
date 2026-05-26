# Maa Santosi Computer Backend

Backend server for Maa Santosi Computer built using Node.js, Express.js, MongoDB, and Mongoose. This backend handles contact form submissions, admin authentication, dashboard APIs, and customer message management.

---

## 🚀 Live Backend

🌐 https://press-server-zjxz.onrender.com

---

## 📌 Features

- REST API Architecture
- MongoDB Database Integration
- Admin Authentication
- Contact Form API
- Delete Multiple Messages
- Environment Variable Support
- Secure Backend Deployment
- CORS Enabled
- JSON Request Handling
- Production Ready Setup

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS
- Nodemon

---

## 📂 Backend Structure

```bash
server/
│
├── models/
│   ├── Admin.js
│   └── Contact.js
│
├── routes/
│   ├── adminRoutes.js
│   └── contactRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Rabindra760/maa-santosi-computer.git
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Start Production Server

```bash
npm start
```

---

## 🔐 Environment Variables

Create `.env` file:

```env
PORT=5000

MONGO_URL=your_mongodb_connection_string
```

---

## 📦 Dependencies

Main dependencies configured in package.json: :contentReference[oaicite:0]{index=0}

- express
- mongoose
- dotenv
- cors
- nodemon

---

## 🌍 API Endpoints

### Contact APIs

#### Save Contact Message

```http
POST /api/contact
```

#### Get All Messages

```http
GET /api/contact
```

#### Delete Messages

```http
DELETE /api/contact/delete
```

Contact route implementation handles storing, retrieving, and deleting customer messages. :contentReference[oaicite:1]{index=1}

---

### Admin APIs

#### Admin Login

```http
POST /api/admin/login
```

Admin authentication checks email and password from MongoDB. :contentReference[oaicite:2]{index=2}

---

## 🗄️ Database Models

### Admin Model

Stores:
- Email
- Password

Defined using Mongoose schema. :contentReference[oaicite:3]{index=3}

---

### Contact Model

Stores:
- Name
- Phone
- Email
- Message
- Created Timestamp

MongoDB schema includes timestamps for message tracking. :contentReference[oaicite:4]{index=4}

---

## 🧠 Server Configuration

Main backend server setup includes:

- Express initialization
- MongoDB connection
- Middleware configuration
- Route handling
- CORS support
- JSON parsing
- Environment variable configuration

Configured in `server.js`. :contentReference[oaicite:5]{index=5}

---

## ☁️ Deployment

### Backend Hosting
- Render

### Database
- MongoDB Atlas

---

## 🔒 Security

- Environment Variables Protected
- MongoDB URL Hidden
- `.env` Ignored via `.gitignore`

---

## 📱 Frontend Connection

Frontend communicates using:

```env
VITE_API_URL=https://press-server-zjxz.onrender.com
```

---

## 👨‍💻 Developer

Developed by Rabindra Kumar for Maa Santosi Computer.

---

## 📧 Contact

Email:
maasantoshibdk@gmail.com

Website:
https://maasantosicomputer.vercel.app/

---

## ⭐ Support

