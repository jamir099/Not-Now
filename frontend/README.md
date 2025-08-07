# NotNow

## Project Overview

**NotNow** is a full-featured e-commerce website built with React and Redux. It supports user registration, login, and authentication using React Context. Users have a personalized dashboard to view products, manage their profile (update name, email, password), log out, and even delete their account. The cart page displays products added by the user.

Admins have a separate dashboard to manage products, including creating, updating, and deleting products, as well as updating admin settings. All product data is managed using the [FakeStore API](https://fakestoreapi.com/) and a custom backend powered by `json-server`.

The backend exposes the following endpoints:
- `http://localhost:3000/users`
- `http://localhost:3000/products`

This project demonstrates complete CRUD operations, user authentication, and state management with React-Redux.

## Project Workflow

1. **Backend Setup**
    - Navigate to the backend directory:
      ```bash
      cd backend
      npm install
      npx json-server db.json
      ```
2. **Frontend Setup**
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      npm install
      npm run dev
      ```

3. **Features**
    - **User:** Register, login, dashboard, update profile, logout, delete account, manage cart.
    - **Admin:** Login, dashboard, manage products (create, update, delete), update admin settings.
    - **Data:** All data operations are handled via RESTful endpoints using `json-server`.

---

Feel free to contribute or customize as needed!