import { useState } from "react";
import CustomContainer from "../../../Components/Container/Container";

const AdminLoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            const loginUrl = import.meta.env.VITE_API_ENDPOINT_LOGIN;
            if (!loginUrl) {
                throw new Error("API endpoint is not defined");
            }
            console.log(loginUrl)
            const response = await fetch(loginUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, pwd: password })
            });
            
            const text = await response.text();
            const data = text ? JSON.parse(text) : {};
            
            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }
            
            console.log("Login successful", data);
            // Xử lý lưu token hoặc điều hướng
        } catch (err) {
            console.error("Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <CustomContainer align={true} justify={true}>
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center text-gray-700">Admin Login</h2>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form className="mt-4" onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-600">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600">Password</label>
                            <input
                                type="password"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                </div>
            </CustomContainer>
        </div>
    );
};

export default AdminLoginScreen;