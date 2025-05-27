/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppDispatch } from "../redux/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";

import { Link } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import PHInput from "../components/form/PHInput";
import { Button } from "antd";

const Login = () => {
    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async(data: FieldValues) => {
        const toastId = toast.loading('Logging in', {duration: 2000});
        try {
            const userInfo = {
                email: data.email,
                password: data.password
            };
            const result = await login(userInfo).unwrap();
            const user = verifyToken(result.data.token) as TUser;
            dispatch(setUser({ user: user, token: result.data.token }));

            if (location.state?.from) {
                navigate(`${location.state.from}`);
                toast.success('Logged in', {id: toastId, duration: 2000});
            } else {
                navigate(`/${user.role}`);
                toast.success('Logged in', {id: toastId, duration: 2000});
            }

        } catch(err) {
            toast.error('Something went wrong!', {id: toastId, duration: 2000});
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
                <h2 className="text-amber-600 text-2xl font-bold text-center mb-4">Login</h2>
                <PHForm onSubmit={onSubmit}>
                    <PHInput type='text' name='email' label='Email: ' />
                    <PHInput type='text' name='password' label='Password: ' />
                    <Button size="large" className="w-full" htmlType="submit">Login</Button>                    
                </PHForm>
                <p className="text-center text-sm text-gray-600 mt-4">
                Don't have an account? <Link to="/register" className="text-amber-600 hover:underline">Register Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
