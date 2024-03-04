import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Field from "../common/Field";
const LoginForm = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading, isSubmitting },
        reset,
    } = useForm();

    const handleFormSubmit = (data) => {
        console.log(data);
        const user = { ...data };
        setAuth({ user });
        reset();
        navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]'>
            <Field
                label='Email'
                error={!!errors && errors.email}>
                <input
                    {...register("email", {
                        required: "Email is required",
                    })}
                    className='auth-input'
                    type='email'
                    name='email'
                    placeholder='Enter your email address'
                    id='email'
                />
            </Field>
            {/* password */}
            <Field
                label='Password'
                error={!!errors && errors.password}>
                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message:
                                "Password needs to be at least 8 characters",
                        },
                    })}
                    className='auth-input'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    id='password'
                />
            </Field>
            {/* Submit */}
            <Field>
                <button
                    className='auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90'
                    type='submit'>
                    {isSubmitting ? "Loading..." : "Login"}
                </button>
            </Field>
        </form>
    );
};

export default LoginForm;

