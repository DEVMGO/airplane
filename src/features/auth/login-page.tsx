import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { FormStateSchema, type FormStateType } from "./validation";
import { useMutation } from "@tanstack/react-query";
import { postLoginApi } from "./api/api";
import { toast } from "react-toastify";
import type { ResLoginType } from "./api/types";
import Cookies from 'js-cookie';
import Input from "../shared/components/input";
import Modal from "./components/modal";
import { useState } from "react";

const LoginPage = () => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false)

    const { mutate, isPending } = useMutation({
        mutationFn: (data: { username: string, password: string }) => {
            return postLoginApi(data)
        },
        onSuccess: (res: ResLoginType) => {
            if (res.result === "success") {
                Cookies.set('token', res.token)
                window.location.assign('/')
                toast.success('You have successfully logged in.')
            } else {
                setShowModal(true)
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
            <div className="w-full bg-white max-w-80 rounded-lg p-5 flex items-center justify-start flex-col shadow-xl">
                <h5 className="text-xl text-gray-800 font-bold mb-5">Login</h5>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full flex flex-col gap-4 max-w-md"
                >
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                value={field.value}
                                onChange={field.onChange}
                                autoComplete="username"
                                placeholder="username"
                                error={errors.username?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="password"
                                value={field.value}
                                onChange={field.onChange}
                                placeholder="password"
                                autoComplete="current-password"
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full h-12 bg-red-400 hover:bg-red-600 text-white font-semibold rounded-md
                        transition-all duration-200 ease-in-out mt-5"
                    >
                        Login
                    </button>
                </form>
            </div>
            <Modal
                isOpen={showModal}
                onClose={handleCloseModal}
                text="! The username or password is invalid."
            />
        </div>
    )
}

export default LoginPage