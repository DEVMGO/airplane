import { useState } from 'react';
import type { FlightItemType } from '../../api/type';
import DetailsModal from './details-modal';
import { formatDateTime } from '../../../../utils/time';

const MobileFlightCard = ({ flight }: { flight: FlightItemType }) => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(!showModal)
    const srcTime = formatDateTime(flight.src.time)
    const dstTime = formatDateTime(flight.dst.time)

    return (
        <div
            onClick={handleOpenModal}
            className='w-full cursor-pointer md:hidden block'
        >
            <div
                className="w-full h-40 bg-white overflow-hidden rounded-2xl shadow-base 
                flex items-center justify-end flex-col relative z-30"
            >
                {flight.class === 'economy' &&
                    <p className="absolute w-40 -left-14 top-4 bg-red-500 text-center text-sm text-white font-normal -rotate-45">Economy</p>
                }
                <div className="w-full flex items-center justify-start flex-col">
                    <div className="w-full flex items-center justify-center gap-3">
                        <div className="w-24 flex items-center justify-center flex-col gap-1">
                            <p className="text-2xl text-black font-extrabold">{srcTime.time || '_'}</p>
                            <p className="text-base text-gray-400">{srcTime.date || '_'}</p>
                        </div>
                        <img
                            src="/images/airplane.png"
                            alt="airplane"
                            className="w-8"
                            width={32}
                        />
                        <div className="w-24 flex items-center justify-center flex-col gap-1">
                            <p className="text-2xl text-black font-extrabold">{dstTime.time || '_'}</p>
                            <p className="text-base text-gray-400">{dstTime.date || '_'}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-around">
                    <div className="flex items-center justify-center px-4 border-2 border-dashed border-gray-400 rounded">
                        <p className="text-lg text-black font-medium">${flight.price}</p>
                    </div>
                    <div className=" flex items-center justify-center">
                        <img
                            src={flight.logoSrc}
                            alt="airline image"
                            className="h-14 object-contain"
                            width={120}
                        />
                    </div>
                </div>
            </div>
            <DetailsModal flight={flight} isOpen={showModal} handleOpenModal={handleOpenModal} />
        </div>
    );
};

export default MobileFlightCard
