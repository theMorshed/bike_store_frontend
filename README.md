# Bike Store Frontend Application

This is a simple application for managing a bike store. It includes functionalities for managing bike products and handling customer orders. The application uses **React**, **Redux**, **CORS**, and **TypeScript** to provide a complete solution for managing products and orders in the store.
This is the frontend of a Bike Store application built with **React**, **Redux**, and **Tailwind CSS**. It allows users to browse and manage bike products, place orders, and manage their accounts. The application uses Ant Design **(AntD)** for UI components, **jsonwebtoken** for authentication, **Sonner** for notifications, and **CORS** to handle cross-origin requests.

## Features

-   **Authentication:**

    -   User login and registration with JWT authentication.
    -   Role-based access control (Admin and Customer).
    -   Protected routes to restrict access to specific parts of the app based on the user's role.

-   **Product Management:**

    -   View a list of bikes available in the store.
    -   Search for bikes by name, brand, or category.
    -   View bike details (name, description, price, etc.).

-   **Order Management:**

    -   Place orders for bikes.
    -   Track orders based on customer email and product details.
    -   Reduce stock and manage inventory when an order is placed.
    -   View total orders placed by the customer.
    -   Admin can view all orders

-   **Inventory Management:**

    -   Update bike availability based on the stock.
    -   Display "Out of Stock" when a product is no longer available.

-   **UI And Notification:**

    -   Use of Ant Design (AntD) for professional and responsive UI components.
    -   Sonner for toast notifications (success, error, and info messages).

## Technologies Used

-   **React** –  A JavaScript library for building user interfaces.
-   **Redux** – A state management library for managing application state.
-   **CORS** – Middleware for enabling Cross-Origin Resource Sharing between frontend and backend.
-   **Ant Design(AntD)** – A UI component library for building modern web applications.
-   **Tailwind CSS** – A utility-first CSS framework for rapid UI development.
-   **JWT(jsonwebtoken)** – JSON Web Tokens for authentication and securing routes.
-   **Sonner** – A lightweight toast notification library for user feedback.

## Requirements

Before running the project locally, make sure you have the following installed:

-   **Node.js** – Version 16.x or higher
-   **npm or yarn** – Package managers for managing dependencies

## Setting Up the Project Locally

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/theMorshed/bike_store_frontend.git
```

### 2. Install Dependencies

Navigate to the project directory and install all required dependencies:

```bash
cd bike_store_frontend
npm install
```

### 3. Run the Application

Start the development server by running the following command:

```bash
npm run dev
```

This will start the server on the port specified in your .env file (default: 5000).

### 4. Access the Application

Once the server is running, you can access the application API at:

```bash
http://localhost:5173
```

## Development & Contribution

- Fork the repository to your own GitHub account.
- Clone your fork to your local machine.
- Create a new branch for your changes.
- Make your changes and commit them.
- Push your changes and create a pull request.

We welcome contributions and improvements! If you have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the developers of the libraries and tools used in this project:
    - [React](https://reactjs.org/) – JavaScript library for building user interfaces.
    - [Redux](https://redux.js.org/) – State management library.
    - [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework.
    - [Ant Design](https://ant.design/) – UI component library.
    - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) – Library for JWT authentication.
    - [Sonner](https://sonner.dev/) – Lightweight toast notifications.