import { calculateDuration, formatDateTime, secondsToTimeFormat } from "../../../../utils/time"
import type { FlightItemType } from "../../api/type"

const FlightTimingCard = ({ flight }: { flight: FlightItemType }) => {
    const srcTime = formatDateTime(flight.src.time)
    const dstTime = formatDateTime(flight.dst.time)
    const duration = calculateDuration(flight.src.time, flight.dst.time);
    const formattedDuration = `${duration.hours.toString()}h ${duration.minutes
        .toString()}min`;

    return (
        <div
            className="w-full h-full bg-white overflow-hidden rounded-2xl shadow-base 
            flex items-center justify-center flex-col relative"
        >
            <div className="w-full flex items-center justify-between gap-6 px-10">
                <div className="flex items-start flex-col gap-2">
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{srcTime.time || '...'} - {dstTime.time || '...'}</p>
                        <p className="text-base text-gray-400 font-medium">Flight Time</p>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{flight.transfer ? 'YES' : 'NO'}</p>
                        <p className="text-base text-gray-400 font-medium">Transfer</p>
                    </div>
                </div>
                <div className="flex items-start flex-col gap-2">
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{formattedDuration}</p>
                        <p className="text-base text-gray-400 font-medium">Duration</p>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{flight.gates}</p>
                        <p className="text-base text-gray-400 font-medium">Gate</p>
                    </div>
                </div>
                <div className="flex items-start flex-col gap-2">
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{secondsToTimeFormat(flight.boarding)}</p>
                        <p className="text-base text-gray-400 font-medium">Boarding</p>
                    </div>
                    <div className="flex items-start justify-center flex-col gap-1">
                        <p className="text-xl text-gray-700 font-bold">{flight.seat}</p>
                        <p className="text-base text-gray-400 font-medium">Seat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlightTimingCard