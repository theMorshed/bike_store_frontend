/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Button } from "antd";
import { useRegisterUserMutation } from "../redux/features/auth/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterUserMutation();
  const onSubmit = async(data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Registering...', {duration: 2000});
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password
      }
      const result = await register(userInfo).unwrap();
      console.log(result);
      navigate(`/login`);
      toast.success('User registered successfully', {id: toastId, duration: 2000});
    } catch(err) {
        toast.error('Something went wrong!', {id: toastId, duration: 2000});
    }
}

  return (    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-4 text-amber-600">Register</h2>
          <PHForm onSubmit={onSubmit} >
              <PHInput type='text' name='name' label='Name: ' />
              <PHInput type='text' name='email' label='Email: ' />
              <PHInput type='text' name='password' label='Password: ' />
              <Button size="large" className="w-full" htmlType="submit">Register</Button>                    
          </PHForm>
          <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-amber-600 hover:underline">Login Here</Link>
          </p>
      </div>
  </div>
  );
};

export default Register;
