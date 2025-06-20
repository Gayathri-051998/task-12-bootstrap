# Password Reset Frontend (React + Bootstrap)

This is a React.js frontend for a user authentication system, including Register, Login, Forgot Password, and Reset Password pages. It is styled using Bootstrap and integrates with a Node.js backend for sending password reset emails.

---

## 🚀 Features

- User registration and login
- Forgot password with reset link via email
- Password reset via token-based link
- React Router for navigation
- Axios for API integration
- Bootstrap for UI styling
- Deployed on **Netlify**

---

## 🛠️ Technologies Used

- React.js
- Bootstrap 5
- React Router v6
- Axios
- React Toastify
- Netlify (for deployment)

---

## 📁 Folder Structure

```
task-12-bootstrap/
├── public/
│   ├── index.html
│   └── _redirects           # Important for Netlify routing
├── src/
│   ├── pages/               # Pages (Register, Login, Forgot, Reset)
│   ├── utils/               # Axios config
│   ├── App.js               # Route configuration
│   └── index.js             # App entry point
├── .env                     # Contains API base URL
├── package.json
└── README.md
```

---

## 🔧 Environment Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Create `.env` file
```env
REACT_APP_API_BASE_URL=https://password-reset-backend-1-iy8o.onrender.com/api/auth
```



## 🧪 Run Locally

```bash
npm start
```

- App runs at: `http://localhost:3000`
and also in `https://fascinating-gumdrop-a1a555.netlify.app/`
---

## 📦 Build for Production

```bash
npm run build
```

> Don’t forget to add `_redirects` file in `public/` folder:
```txt
/*    /index.html   200
```

This ensures Netlify can handle React Router routes (like `/reset-password/:token`) correctly.

---

## 🌐 Deploy to Netlify

1. Run `npm run build`
2. Upload **contents of the `build/` folder** (not the folder itself) to Netlify
3. Make sure `_redirects` is in the build output
4. You’re live!

---



## 📬 Contact

For any help or queries:
**Name**: Gayathri Vijay  
**Email**: gayuvijay0504@gmail.com  
**Deployed frontend**: [Netlify App]`https://fascinating-gumdrop-a1a555.netlify.app/`

---
