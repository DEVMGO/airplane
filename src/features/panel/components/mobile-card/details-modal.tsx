import { calculateDuration, formatDateTime, secondsToTimeFormat } from "../../../../utils/time"
import type { FlightItemType } from "../../api/type"
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const DetailsModal = ({ flight, isOpen, handleOpenModal

}: {
    flight: FlightItemType, isOpen: boolean, handleOpenModal: () => void
}) => {
    const srcTime = formatDateTime(flight.src.time)
    const dstTime = formatDateTime(flight.dst.time)
    const duration = calculateDuration(flight.src.time, flight.dst.time);
    const formattedDuration = `${duration.hours.toString()}h ${duration.minutes
        .toString()}min`;

    return (
        <div
            onClick={handleOpenModal}
            className={`fixed top-0 left-0 w-full h-dvh bg-black/20 flex items-end justify-center z-50
            ${isOpen ? 'opacity-100' : ' opacity-0 pointer-events-none'} transform transition-all duration-300`}
        >
            <div
                className={`w-full h-3/4 bg-white flex items-center justify-start flex-col rounded-t-2xl py-2
                ${isOpen ? 'delay-100 translate-y-0' : 'translate-y-full'} transform transition-all duration-300`}
            >
                <div className="w-full flex items-center justify-between px-4">
                    {flight.class === 'economy' ? <p className="bg-red-500 rounded-md py-1 px-4 text-base text-white font-bold">Economy</p> : <span className="opacity-0" />}
                    <button onClick={handleOpenModal}>
                        <EastRoundedIcon />
                    </button>
                </div>
                <div className="w-full flex items-center justify-center mt-7">
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-sm text-black font-bold">From</p>
                        <p className="text-xl text-black font-extrabold">{flight.src.iso3 || '_'}</p>
                        <p className="max-w-28 text-xs text-gray-400 font-medium text-center">{flight.src.airline}</p>
                    </div>
                    <div className="flex items-center justify-center flex-col gap-2">
                        <div className="px-5 flex items-center justify-center relative overflow-hidden dotsBackground">
                            <img
                                src="/images/airplane.png"
                                alt="airplane"
                                className="w-8 z-10"
                                width={32}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-sm text-black font-bold">To</p>
                        <p className="text-xl text-black font-extrabold">{flight.dst.iso3 || '_'}</p>
                        <p className="max-w-28 text-xs text-gray-400 font-medium text-center">{flight.dst.airline}</p>
                    </div>
                </div>

                <div className="w-full flex items-center justify-between gap-6 px-10 mt-10">
                    <div className="flex items-center flex-col gap-2">
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{srcTime.time || '...'} - {dstTime.time || '...'}</p>
                            <p className="text-base text-gray-400 font-medium">Flight Time</p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{flight.transfer ? 'YES' : 'NO'}</p>
                            <p className="text-base text-gray-400 font-medium">Transfer</p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{flight.seat}</p>
                            <p className="text-base text-gray-400 font-medium">Seat</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col gap-2">
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{formattedDuration}</p>
                            <p className="text-base text-gray-400 font-medium">Duration</p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{flight.gates}</p>
                            <p className="text-base text-gray-400 font-medium">Gate</p>
                        </div>
                        <div className="flex items-center justify-center flex-col gap-1">
                            <p className="text-xl text-gray-700 font-bold">{secondsToTimeFormat(flight.boarding)}</p>
                            <p className="text-base text-gray-400 font-medium">Boarding</p>
                        </div>
                    </div>
                </div>

                <div className="min-w-36 flex items-center justify-center bg-gray-200 rounded mt-4">
                    <p className="text-3xl text-black font-bold">${flight.price}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsModal