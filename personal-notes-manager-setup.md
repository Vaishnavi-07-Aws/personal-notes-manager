# Personal Notes Manager - Setup Instructions

## 1. Backend - `.env` File

Create a file named `.env` in the `backend/` directory with the following content:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/personal-notes-manager
JWT_SECRET=your_jwt_secret_key
```

> Replace `your_jwt_secret_key` with a secure random string in production.

---

## 2. Hardcoded Credentials (if any)

There are no hardcoded credentials in the repository. For development/testing purposes, you may register a user using the frontend or use the following dummy credentials **after manual registration**:

- **Email:** test@example.com
- **Password:** Test@123

---

## 3. Project Setup Instructions

### Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file as described above.
4. Start the server:
    ```bash
    npm run dev
    ```

> The backend will run on `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

> The frontend will be accessible at `http://localhost:3000`.

---

Please reach out if a hosted version or Postman collection is required.
