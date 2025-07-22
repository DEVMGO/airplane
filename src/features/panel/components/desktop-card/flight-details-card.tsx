import type { FlightItemType } from "../../api/type"

const FlightDetailsCard = ({ flight }: { flight: FlightItemType }) => {
    return (
        <div className="w-full h-full bg-white flex items-center justify-center gap-3 rounded-2xl relative -z-10">
            {flight.class === 'economy' &&
                <p className="absolute w-40 -left-10 top-5 bg-red-500 text-center text-lg text-white font-normal -rotate-45">
                    Economy
                </p>
            }
            <div className="flex items-center justify-center flex-col">
                <p className="text-base text-black font-bold">From</p>
                <p className="text-4xl text-black font-extrabold">{flight.src.iso3 || '_'}</p>
                <p className="max-w-28 text-base text-gray-400 font-medium text-center">{flight.src.airline}</p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
                <div className="px-5 flex items-center justify-center relative overflow-hidden dotsBackground">
                    <img
                        src="/images/airplane.png"
                        alt="airplane"
                        className="w-10 z-10"
                        width={40}
                        loading="lazy"
                    />
                </div>
                <div className="flex items-center justify-center px-7 bg-gray-200 rounded">
                    <p className="text-2xl text-black font-bold">${flight.price}</p>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <p className="text-base text-black font-bold">To</p>
                <p className="text-4xl text-black font-extrabold">{flight.dst.iso3 || '_'}</p>
                <p className="max-w-28 text-base text-gray-400 font-medium text-center">{flight.dst.airline}</p>
            </div>
        </div>
    )
}

export default FlightDetailsCard