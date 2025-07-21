import { formatDateTime } from "../../../../utils/time"
import type { FlightItemType } from "../../api/type"

const CloseCard = ({ flight }: { flight: FlightItemType }) => {
    const srcTime = formatDateTime(flight.src.time)
    const dstTime = formatDateTime(flight.dst.time)

    return (
        <div
            className="w-full h-40 bg-white overflow-hidden rounded-2xl shadow-base 
            flex items-center justify-center flex-col relative z-30"
        >
            {flight.class === 'economy' &&
                <p className="absolute w-40 -left-10 top-5 bg-red-500 text-center text-lg text-white font-normal -rotate-45">Economy</p>
            }
            <div className="w-full flex items-center justify-between">
                <div className="w-1/2 flex items-center justify-center">
                    <img
                        src={flight.logoSrc}
                        alt="airline image"
                        style={{
                            ...flight.logoStyle
                        }}
                        className="object-contain"
                    />
                </div>
                <div className="w-1/2 flex items-center justify-center gap-3 mb-7">
                    <div className="w-32 flex items-center justify-center flex-col gap-1">
                        <p className="text-base text-center text-gray-400">{flight.src.country}</p>
                        <p className="text-3xl text-black font-extrabold">{srcTime.time || '_'}</p>
                        <p className="text-base text-gray-400">{srcTime.date || '_'}</p>
                    </div>
                    <img
                        src="/images/airplane.png"
                        alt="airplane"
                        className="w-10"
                        width={40}
                    />
                    <div className="w-32 flex items-center justify-center flex-col gap-1">
                        <p className="text-base text-center text-gray-400">{flight.dst.country}</p>
                        <p className="text-3xl text-black font-extrabold">{dstTime.time || '_'}</p>
                        <p className="text-base text-gray-400">{dstTime.date || '_'}</p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 flex items-center justify-center px-7 border-2 border-dashed border-gray-400 rounded">
                <p className="text-2xl text-black font-medium">${flight.price}</p>
            </div>
        </div>
    )
}

export default CloseCard