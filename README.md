# 🚖 Smart Airport Ride Pooling Backend System

A production-style backend system that intelligently groups airport passengers into shared cabs while optimizing seat usage, luggage capacity, route matching, and pricing — built with concurrency safety and real-time performance in mind.

---

# 📌 Problem Statement

Build a backend system that:

- Groups passengers into shared airport cabs
- Respects seat & luggage constraints
- Minimizes allocation conflicts
- Handles real-time cancellations
- Supports high concurrency
- Maintains low latency

---

# 🧠 Features

- 🚕 Smart ride pooling
- 👥 Seat & luggage constraint validation
- 🔐 Redis-based distributed locking (Concurrency safe)
- 💰 Dynamic pricing calculation
- ❌ Ride cancellation support
- 🔄 Cab lifecycle management
- 📘 Swagger API documentation
- ⚡ Load testing support
- 🌍 Environment-based configuration (.env)

---

# 🏗️ Tech Stack

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL
- Sequelize ORM

Concurrency Layer:
- Redis (Distributed Locking)

Documentation:
- Swagger (OpenAPI)

Testing:
- Axios (Load test script)

Environment:
- dotenv

---

# 📂 Project Structure

```
smart-airport-ride-pooling-backend/
│
├── src/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── models/
│   ├── config/
│   │    ├── db.js
│   │    └── redis.js
│   └── app.js
│
├── server.js
├── loadTest.js
├── package.json
├── requirements.txt
├── .env.example
└── README.md
```

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Prathamesh5152/ride-sharing-backend
cd ride-pooling-backend
```

---

## 2️⃣ Install All Dependencies

Install all required backend packages:

```bash
npm install express sequelize pg pg-hstore redis dotenv swagger-ui-express swagger-jsdoc axios
```

For development (auto-restart server):

```bash
npm install --save-dev nodemon
```

OR simply install everything from package.json:

```bash
npm install
```


---

## 3️⃣ Configure Environment Variables

Create a file named:

```
.env
```

Add the following:

```
PORT=3000

DB_NAME=ride_pool
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost

REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

---

## 4️⃣ Setup PostgreSQL

Open PostgreSQL and run:

```sql
CREATE DATABASE ride_pool;
```

Tables will be auto-created using Sequelize when the server starts.

---

## 5️⃣ Start Redis

If Redis installed locally:

```bash
redis-server
```

Verify:

```bash
redis-cli ping
```

Expected output:

```
PONG
```

---

## 6️⃣ Run Server

```bash
node server.js
```

Server starts at:

```
http://localhost:3000
```

---

# 📘 API Documentation

Swagger UI available at:

```
http://localhost:3000/api-docs
```

You can test all APIs interactively from the browser.

---

# 📬 API Endpoints Overview

### Ride Requests

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/requests | Create ride request |
| POST | /api/requests/:id/cancel | Cancel ride |

### Cab Management

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/cabs | View all cabs |
| GET | /api/cabs/available | View active cabs |
| GET | /api/cabs/:id/passengers | View passengers in cab |

### Ride Lifecycle

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/rides/complete/:cabId | Complete ride & free cab |

---

# 🧪 Sample Test Data

Use this JSON in Swagger/Postman:

```json
{
  "passengerId": 1,
  "originLat": 19.076,
  "originLng": 72.8777,
  "destLat": 19.0896,
  "destLng": 72.8656,
  "seatCount": 1,
  "luggageUnits": 1,
  "detourTolerance": 5
}
```

Test multiple requests to simulate pooling.

---

# 🧠 DSA Approach

Greedy First-Fit (Bin Packing style):

1. Fetch active cabs
2. Check seat + luggage availability
3. Assign to first suitable cab
4. If none found → create new cab

### Time Complexity

```
O(n) per request
```

Where n = number of active cabs.

---

# 🔐 Concurrency Strategy

Implemented using Redis Distributed Locking.

Flow:

```
Request → Lock Cab → Update Seats → Release Lock
```

Prevents:
- Double booking
- Race conditions
- Negative seat counts

---

# 💾 Database Schema

### Cabs Table
- id (PK)
- capacity
- availableSeats
- luggageCapacity
- availableLuggage
- status
- timestamps

### RideRequests Table
- id (PK)
- passengerId
- originLat
- originLng
- destLat
- destLng
- seatCount
- luggageUnits
- detourTolerance
- cabId (FK)
- status
- timestamps

---

# 📊 Indexing Strategy

Indexes used on:

- cab.id
- cab.status
- RideRequest.cabId
- RideRequest.status

Improves:
- Matching performance
- Passenger lookup speed

---

# 💰 Dynamic Pricing Model

```
Price = BaseFare 
      + (Distance × PerKmRate)
      + (SeatCount × SeatFactor)
      + (LuggageUnits × LuggageFactor)
```

Factors:
- Distance
- Seats booked
- Luggage units

---

# 📈 Performance & Load Testing

Load testing done using:

```
node loadTest.js
```

Results observed:

- ~1000+ requests/sec supported
- ~6–10 ms average latency
- 200 concurrent users simulated successfully

System meets requirements:

✔ Supports high concurrency  
✔ Handles 100+ requests/sec  
✔ Maintains low latency  

---

# 🧩 Assumptions

- Passenger location coordinates are approximated
- Distance is estimated using simple math formula
- Route optimization is simplified
- Redis used for concurrency control
- Cab allocation is greedy-based
- Detour logic is assumed tolerable within threshold

---

# 🧑‍💻 Author

**Prathamesh Salokhe**  
BTech Computer Engineering  
Backend Systems & Cybersecurity Enthusiast
