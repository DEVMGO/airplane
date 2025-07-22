import { useState } from "react";
import useOutSideClick from "../../../../hooks/use-outside-click";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUsernameApi, postLogoutApi } from "../api/api";
import { ExitModal } from "./exit-modal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LogoutIcon from "../../../../assets/icons/logout-icon";
import ArrowDownIcon from "../../../../assets/icons/arrow-down-icon";
import UserIcon from "../../../../assets/icons/user-icon";

const Navbar = () => {
    const { ref, isShow, setIsShow } = useOutSideClick();
    const [modalExit, setModalExit] = useState(false);

    const { data } = useQuery({
        queryKey: ['get_username'],
        queryFn: () => getUsernameApi(),
        staleTime: Infinity,
        retry: 0,
        refetchOnWindowFocus: false,
    })


    const { mutate, isPending } = useMutation({
        mutationFn: () => {
            return postLogoutApi()
        },
        onSuccess: (res: { result: string }) => {
            if (res.result === "success") {
                toast.success('You are logged out.')
                const cookies = document.cookie.split(';');
                const accessToken = cookies.find(cookie => cookie.split('=')[0].trim() === "token");

                if (accessToken) {
                    const name = accessToken.split('=')[0].trim();
                    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                }
                window.location.assign('/');
            } else {
                toast.error('Logout failed.')
            }
            setModalExit(!modalExit)
        },
    })

    const handleExit = () => mutate();


    return (
        <div className="w-full bg-white flex items-center justify-center border-b border-gray-300">
            <div className="w-full max-w-7xl lg:h-20 h-16 flex items-center justify-between p-5">
                <Link to='/'>
                    <img
                        src="/images/japan-airlines.png"
                        alt="airline logo"
                        width={80}
                        className="lg:w-20 w-16 object-contain"
                    />
                </Link>
                <div ref={ref} className="w-fit flex items-end justify-start flex-col relative z-50">
                    <div
                        onClick={() => setIsShow(!isShow)}
                        className="w-40 flex items-center justify-between gap-1 hover:bg-gray-100 cursor-pointer 
                        transition-all duration-300 ease-in-out lg:py-3 py-2 px-2 rounded-md border border-gray-300 z-30"
                    >
                        <div className="w-4/5 flex items-center gap-1">
                            <UserIcon className="min-w-6 max-w-6" />
                            <p className="text-sm text-black font-normal truncate">{data?.username}</p>
                        </div>
                        <ArrowDownIcon stroke="#1f2937" className="max-w-3 min-w-3" />
                    </div>

                    <div
                        className={`absolute w-40 bg-white transition-all duration-300 ease-in-out shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] rounded-lg px-3
                        ${isShow ? 'translate-y-16' : '-translate-y-0 opacity-0 pointer-events-none'} z-10`}
                    >
                        <button
                            type="button"
                            onClick={() => setModalExit(true)}
                            className="w-full h-[58px] gap-2 text-base text-red-400 font-medium flex items-center justify-start">
                            <LogoutIcon fill="#f87171" />
                            Logout
                        </button>
                    </div>
                </div>

                {modalExit &&
                    <ExitModal
                        onClose={() => setModalExit(false)}
                        handleExit={handleExit}
                        isLoading={isPending}
                    />
                }
            </div>
        </div>
    )
}

export default Navbar