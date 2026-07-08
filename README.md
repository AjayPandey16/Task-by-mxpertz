# Verde — Farm to Table Restaurant (MERN)

A full-stack restaurant website built with the **MERN** stack.

- **client/** — React 19 + Vite + Tailwind CSS v4
- **server/** — Node + Express 5 + MongoDB (Mongoose)

## Features

- Marketing site: hero, seasonal menu (tabbed), story, contact, reservation form
- **Reservations** — booking form saved to MongoDB
- **Contact messages** — contact form saved to MongoDB
- **Newsletter** — email signups (footer) saved to MongoDB
- **Admin dashboard** (`/admin`) — JWT-protected view of reservations, messages, and subscribers

## Project structure

```
restaurant-website/
├── client/                 # React + Vite frontend
│   └── src/
│       ├── components/      # UI + form components
│       ├── pages/           # HomePage, AdminLoginPage, AdminDashboardPage
│       └── lib/             # content data, api client, auth helpers
├── server/                 # Express API
│   └── src/
│       ├── config/          # db connection
│       ├── models/          # Reservation, Contact, Subscriber, Admin
│       ├── controllers/     # request handlers
│       ├── routes/          # route definitions
│       └── middleware/      # auth, error handling
└── package.json            # root scripts to run both apps
```

## Getting started

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure the backend

```bash
cp server/.env.example server/.env
```

Edit `server/.env` and set `MONGODB_URI` (local MongoDB or Atlas) and a strong `JWT_SECRET`.

### 3. Seed an admin account

```bash
npm run seed
```

Uses `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `server/.env`.

### 4. Run both apps

```bash
npm run dev
```

- Client: http://localhost:5173
- API: http://localhost:5000
- Admin: http://localhost:5173/admin/login

The Vite dev server proxies `/api` to the Express server, so no CORS config is needed in development.

## API

| Method | Endpoint             | Access | Description               |
| ------ | -------------------- | ------ | ------------------------- |
| POST   | `/api/reservations`  | Public | Create a reservation      |
| GET    | `/api/reservations`  | Admin  | List reservations         |
| POST   | `/api/contact`       | Public | Send a contact message    |
| GET    | `/api/contact`       | Admin  | List contact messages     |
| POST   | `/api/newsletter`    | Public | Subscribe an email        |
| GET    | `/api/newsletter`    | Admin  | List subscribers          |
| POST   | `/api/auth/login`    | Public | Admin login → JWT         |
| GET    | `/api/health`        | Public | Health check              |
