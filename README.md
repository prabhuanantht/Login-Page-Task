# Login Page

This is a simple login page built with Next.js and Tailwind CSS.

---
### Prerequisites

- Node.js and npm installed

---
### Installation

1. Clone the repository:
   ```
   git clone https://github.com/prabhuanantht/Login-Page-Task.git
   cd Login-Page-Task
2. Install dependencies:
    ```
    npm install
    ```
3. Run the development server:
    ```
    npm run dev
    ```
4. Open your browser and go to http://localhost:3000 to see the application.

---
### Features

- Dynamic user type switching (Student, Instructor, School)
- Form validation (required fields)
- Smooth transitions when switching categories
- Form field reset when switching categories
- "Forgot Password" link (currently logs a message to the console)

---
### Project Structure

```
login-modal/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   └── components/
│       └── LoginModal.tsx
│
├── public/
│
├── package.json
├── next.config.js
├── tailwind.config.js
└──README.md
```

---
### Key Components

#### LoginModal.tsx

This component contains the main logic for the login modal, including:

- User type switching
- Form handling and validation
- Smooth transitions
- "Forgot Password" functionality

#### page.tsx

This is the main page component that renders the LoginModal.

#### Styling

This project uses Tailwind CSS for styling. The main styles are defined inline in the LoginModal component.

---
### Contributing

Pull requests are welcome.

---
### License

This project is licensed under the MIT License.