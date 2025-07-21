import { useQuery } from "@tanstack/react-query";
import FoldableImage from "./components/desktop-card/flight-card"
import { getFlightListApi } from "./api/api";
import { Fragment, useEffect, useState } from "react";
import type { FlightItemType } from "./api/type";
import Filters from "./components/filters";
import Skeleton from "./components/skeleton";
import MobileFlightCard from "./components/mobile-card/flight-card";

const PanelPage = () => {
    const size = 3;
    const [page, setPage] = useState(1);
    const [allFlights, setAllFlights] = useState<FlightItemType[]>([]);

    const { data, isLoading } = useQuery({
        queryFn: () => getFlightListApi(page, size),
        queryKey: ['get_flight_list', page],
        staleTime: Infinity,
        retry: 0,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (data?.result?.length) {
            setAllFlights((prev) => [...prev, ...data.result]);
        }
    }, [data]);

    const handleLoadMore = () => {
        setPage((prev) => prev + 1);
    };

    return (
        <div className="w-full flex items-start justify-start lg:flex-row flex-col lg:p-5 p-0 pb-24">
            <Filters />
            <div className="w-full flex items-start justify-start flex-col gap-5 px-5">
                <div className="w-full flex items-center justify-between border-b border-gray-400 pb-2">
                    <p className="text-base text-black font-bold">Viewed: {allFlights.length}</p>
                    <p className="text-base text-black font-bold">Total: {data?.total}</p>
                </div>
                {allFlights.map((flight, index) => (
                    <Fragment key={`${flight.boarding}_${flight.class}_${index}`}>
                        <MobileFlightCard flight={flight} />
                        <FoldableImage flight={flight} />
                    </Fragment>
                ))}

                {isLoading && (<Skeleton />)}
                {allFlights.length > 0 && allFlights.length < (data?.total || 0) && (
                    <button
                        className="mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
                        onClick={handleLoadMore}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                )}
            </div>
        </div>
    )
}

export default PanelPage
