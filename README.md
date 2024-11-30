# E-commerce Frontend

This is the frontend of the E-commerce website built with Next.js and React. It showcases products, handles user authentication, and provides a seamless user interface.

## Features

- Server-Side Rendering (SSR) for optimized performance and SEO.
- User authentication (signup, login) using JWT.
- Product listing with filters and pagination.
- Shopping cart with add, view, and remove functionality.
- Dynamic meta tags for SEO optimization.

## Tech Stack

- **Next.js**: For server-side rendering and React framework.
- **React**: For building the user interface.
- **Shadcn Components**: For styling.
- **Axios**: For API requests.

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- Backend API should be running (check [backend repo](https://github.com/prathmesh796/ecommerce-assignment-backend)).

### Steps to Run

1. **Clone the repository**:
   ```bash
   cd e-commerce-frontend
   git clone https://github.com/prathmesh796/ecommerce-assignment-frontend.git

2. **Install dependencies:**
    ```bash
    npm install

3. **Set up environment variables:**
    Create a .env.local file in the root directory:
    ```bash
    NEXT_PUBLIC_API_URL=http://localhost:5000/api

4. **Build and Run for Production:**
    ```bash
    npm run dev

5. **Visit the App:**
    Open the localhost in your browser: http://localhost:3000
## Screenshots

![Home Page](https://github.com/prathmesh796/ecommerce-assignment-frontend/blob/main/public/Screenshot%202024-11-30%20112435.png)

![Products Page](https://github.com/prathmesh796/ecommerce-assignment-frontend/blob/main/public/Screenshot%202024-11-30%20112511.png)

![Cart Page](https://github.com/prathmesh796/ecommerce-assignment-frontend/blob/main/public/Screenshot%202024-11-30%20112536.png)

