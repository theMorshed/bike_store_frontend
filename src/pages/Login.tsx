import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
        setError("Please fill in all fields.");
        return;
        }

        // Mock authentication logic
        if (email === "test@bikestore.com" && password === "password123") {
        alert("Login successful!");
        setError("");
        } else {
        setError("Invalid email or password.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                {error && (
                <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
                    {error}
                </div>
                )}

                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                    Password
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                    Login
                </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account? <a href="#register" className="text-blue-600 hover:underline">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
