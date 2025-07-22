import { useState } from "react"
import EyeIcon from "../../../assets/icons/eye-icon"
import EyeSlashIcon from "../../../assets/icons/eye-slash-icon"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string
}

const Input = ({ ...props }: Props) => {
    const [showPass, setShowPass] = useState(true)
    return (
        <div className="w-full flex items-start justify-start flex-col">
            <div className={`w-full flex items-center justify-between relative`}>
                <input
                    {...props}
                    type={showPass ? props.type : 'text'}
                    className={`w-full h-11 outline-none text-base text-gray-800 font-medium
                    border-b-2 ${props.error ? 'border-red-400' : 'border-gray-300'} focus:!border-red-500`}
                />
                {props.type === 'password' &&
                    <button
                        type="button"
                        className="absolute right-0"
                        onClick={() => setShowPass(!showPass)}
                    >
                        {showPass ? <EyeIcon fill="#6b7280" /> : <EyeSlashIcon fill="#6b7280" />}
                    </button>
                }
            </div>
            {props.error && <p className="text-xs text-red-400">{props.error}</p>}
        </div>
    )
}

export default Input