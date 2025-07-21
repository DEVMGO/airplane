import { Button, FormHelperText, Input } from "@mui/joy"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { Person } from "@mui/icons-material"
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import { FormStateSchema, type FormStateType } from "./validation";
import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "./api/api";
import { toast } from "react-toastify";
import type { ResLoginType } from "./api/types";
import Cookies from 'js-cookie';

const LoginPage = () => {
    const { mutate } = useMutation({
        mutationFn: (data: { username: string, password: string }) => {
            return postLoginApi(data)
        },
        onSuccess: (res: ResLoginType) => {
            if (res.result === "success") {
                Cookies.set('token', res.token)
                window.location.assign('/')
                toast.success('You have successfully logged in.')
            } else {
                toast.error('The username or password is invalid.')
            }
        },
    })

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormStateType>({
        resolver: zodResolver(FormStateSchema),
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const onSubmit = (formData: FormStateType) => {
        mutate(formData)
    }
    return (
        <div className='w-full h-screen bg-gray-100 flex items-center justify-center flex-col'>
            <div className="w-full bg-white max-w-80 border border-gray-300 rounded-lg p-5 flex items-center justify-start flex-col">
                <h5 className="text-xl text-gray-800 font-bold mb-5">Login</h5>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 max-w-md"
                >
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <>
                                <Input
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={!!errors.username?.message}
                                    startDecorator={<Person />}
                                    slotProps={{ input: { placeholder: 'username' } }}
                                    sx={{ '--Input-minHeight': '45px', '--Input-radius': '6px' }}
                                    autoComplete="username"
                                />
                                {errors.username?.message && <FormHelperText>{errors.username?.message}</FormHelperText>}
                            </>
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input
                                value={field.value}
                                onChange={field.onChange}
                                error={!!errors.password?.message}
                                startDecorator={<HttpsRoundedIcon />}
                                slotProps={{ input: { placeholder: 'password', type: 'password' } }}
                                sx={{ '--Input-minHeight': '45px', '--Input-radius': '6px' }}
                                autoComplete="current-password"
                            />
                        )}
                    />

                    <div className="flex gap-4">
                        <Button className="w-full" color="primary" type="submit">
                            submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage