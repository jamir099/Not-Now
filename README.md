# NotNow

## Project Overview

**NotNow** is a full-featured e-commerce website built with React - Redux and styled with tailwindCSS. It supports user registration, login, and authentication using React Context. Users have a personalized dashboard to view products, manage their profile (update name, email, password), log out, and even delete their account. The cart page displays products added by the user.

**Landing page :**
![Screenshot 2025-08-07 200828](https://github.com/user-attachments/assets/193f39da-39ba-4d72-84ce-c86d25b40306)


Admins have a separate dashboard to manage products, including creating, updating, and deleting products, as well as updating admin settings. All product data is managed using the [FakeStore API](https://fakestoreapi.com/) and a custom backend powered by `json-server`.

**Register and Login :**
![MixCollage-07-Aug-2025-08-24-PM-9219](https://github.com/user-attachments/assets/1384e976-c366-490e-a3db-e7bebde55cd2)


The backend exposes the following endpoints:
- `http://localhost:3000/users`
- `http://localhost:3000/products`

This project demonstrates complete CRUD operations, user authentication, and state management with React-Redux.

**User Dashboard :**
![Screenshot 2025-08-07 202719](https://github.com/user-attachments/assets/b52e67b6-8780-418d-844a-6f868c396491)
![Screenshot 2025-08-07 201032](https://github.com/user-attachments/assets/c193ec5f-2601-4466-b1a6-901adcf9a72d)
![Screenshot 2025-08-07 201058](https://github.com/user-attachments/assets/599fed42-eea4-4b81-b43c-08a804ac3862)

---
**Admin Dashboard :**
![Screenshot 2025-08-07 201221](https://github.com/user-attachments/assets/30d00889-4b0b-46ec-ab13-e93a5f2e063c)
![Screenshot 2025-08-07 201138](https://github.com/user-attachments/assets/b2e9afa4-7b90-44b0-bd49-35062136e930)

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
---
**Login Credentials :**
1) User -> email : user@gmail.com , pass : 123
2) Admin -> email : master@admin.com , pass : 12345
