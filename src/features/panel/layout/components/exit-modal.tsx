interface Props {
    onClose: () => void
    handleExit: () => void
    isLoading: boolean
}
export const ExitModal = ({ onClose, handleExit, isLoading }: Props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-dvh bg-black/30 flex items-center justify-center p-5 z-50">
            <div className="w-full max-w-96 h-56 bg-white rounded-lg p-3 flex items-center justify-center flex-col gap-10 shadow-lg">
                <p className="text-sm text-center leading-6 text-black font-medium">Do you want to exit the panel?</p>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="w-32 h-11 flex items-center justify-center rounded-md border 
                      border-gray-500 text-sm text-gray-500 font-medium">No</button>
                    <button
                        onClick={handleExit}
                        disabled={isLoading}
                        className="w-32 h-11 flex items-center justify-center rounded-md border 
                      bg-red-400 border-red-400 text-sm text-white font-medium">Yes</button>
                </div>
            </div>
        </div>
    )
}
