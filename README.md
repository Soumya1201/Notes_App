# 📝 Notes App (Full Stack)

A full-stack Notes application built with the MERN stack, featuring rate limiting, modern UI, and deployment on the cloud.

---

##  Live Demo

 https://notes-app-stjo.onrender.com/

---

##  Features

*  Create, edit, and delete notes
*  Fast and responsive UI
*  Rate limiting to prevent API abuse
*  Secure backend with MongoDB
*  Fully deployed (frontend + backend)
*  Responsive design using Tailwind CSS

---

##  Tech Stack

### Frontend

* React.js
* Tailwind CSS + DaisyUI
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose

### Other Tools

* Upstash Redis (Rate Limiting)
* Render (Deployment)

---

##  Project Structure

```
Notes_App/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── src/server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── dist/
│
└── package.json
```

---

##  Environment Variables

Create a `.env` file in the backend:

```
MONGODB_URI=your_mongodb_uri
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
NODE_ENV=production
```

---

##  Run Locally

### 1. Clone the repo

```
git clone https://github.com/Soumya1201/Notes_App.git
cd Notes_App
```

### 2. Install dependencies

```
npm install --prefix backend
npm install --prefix frontend
```

### 3. Run backend

```
cd backend
npm run dev
```

### 4. Run frontend

```
cd frontend
npm run dev
```

---

##  Future Improvements

*  User authentication (JWT)
*  Categories / tags for notes
*  Search & filter functionality
*  Pagination / infinite scroll

---

##  Contributing

Feel free to fork this repo and submit a pull request.

---

##  License

This project is licensed under the MIT License.

---

##  Author

**Soumyadip Adhikary**
GitHub: https://github.com/Soumya1201
