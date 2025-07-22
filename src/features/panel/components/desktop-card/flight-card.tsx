import { useState } from 'react';
import CloseCard from './close-card';
import FlightDetailsCard from './flight-details-card';
import FlightTimingCard from './flight-timing-card';
import type { FlightItemType } from '../../api/type';

const FlightCard = ({ flight }: { flight: FlightItemType }) => {
    const [foldAngle, setFoldAngle] = useState(180);
    const handleFold = () => {
        if (foldAngle === 0) {
            setFoldAngle(180)
        } else {
            setFoldAngle(0)
        }
    }

    return (
        <div
            onClick={handleFold}
            style={{
                perspective: 1000,
                height: foldAngle === 0 ? '320px' : '160px'
            }}
            className='w-full transition-all duration-500 ease-in-out cursor-pointer md:block hidden'>
            <div className='w-full h-40 border-b-4 border-dashed border-gray-300 rounded-2xl overflow-hidden'>
                <FlightDetailsCard flight={flight} />
            </div>

            <div
                style={{
                    transform: `rotateX(${foldAngle}deg)`,
                    transformOrigin: 'center top',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                }}
                className='w-full h-40 transition-all duration-500 ease-in-out bg-white rounded-2xl'
            >
                <FlightTimingCard flight={flight} />
                <div
                    className='w-full h-full bg-white overflow-hidden rounded-2xl shadow-base 
                    flex items-center justify-center flex-col absolute inset-0'
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateX(180deg) translateZ(.5px)',
                    }}
                >
                    <CloseCard flight={flight} />
                </div>
            </div>
        </div>
    );
};

export default FlightCard
