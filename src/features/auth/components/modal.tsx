interface Props {
    text: string
    isOpen: boolean
    onClose: () => void
    isLoading?: boolean
}

const Modal = ({ text, onClose, isLoading, isOpen }: Props) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-dvh flex items-center justify-center bg-black/30 p-6
            ${isOpen ? 'opacity-100' : ' opacity-0 pointer-events-none'} transform transition-all duration-300`}
        >
            <div
                className={`w-full max-w-96 h-40 bg-white rounded-lg p-3 flex items-center justify-center flex-col gap-10 shadow-lg
                ${isOpen ? 'delay-100 scale-100' : 'scale-0'} transform transition-all duration-300`}
            >
                <p className="text-sm text-center leading-6 text-black font-medium">{text}</p>
                <div className="flex items-center">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="w-32 h-11 flex items-center justify-center rounded-md border 
                      bg-red-400 border-red-400 hover:bg-red-600 text-sm text-white font-medium">OK</button>
                </div>
            </div>
        </div>
    )
}

export default Modal