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
            <div className={`w-full flex items-center justify-between border-b-2 ${props.error ? 'border-red-400' : 'border-gray-300'}`}>
                <input
                    {...props}
                    type={showPass ? props.type : 'text'}
                    className={`w-full h-11 border-none outline-none focus:border-red-500 text-base text-gray-800 font-medium`}
                />
                {props.type === 'password' &&
                    <button
                        type="button"
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