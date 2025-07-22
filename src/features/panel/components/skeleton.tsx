const Skeleton = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <div className="w-full h-32 bg-gray-200 animate-pulse rounded-lg mb-5" />
            <div className="w-full h-32 bg-gray-200 animate-pulse rounded-lg mb-5" />
            <div className="w-full h-32 bg-gray-200 animate-pulse rounded-lg mb-5" />
        </div>
    )
}

export default Skeleton