import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const Filters = () => {
    return (
        <>
            <div className="sticky top-5 min-w-72 min-h-80 bg-white rounded-xl p-5 hidden lg:block">
                <div className="w-full border-b border-red-400 py-2">
                    <h5><FilterAltRoundedIcon color="error" /> Filters</h5>
                </div>
            </div>
            <div className="sticky top-0 w-full bg-white border-b border-red-400 py-1 px-5 mb-5 lg:hidden block z-40">
                <div className="py-2">
                    <h5><FilterAltRoundedIcon color="error" /> Filters</h5>
                </div>
            </div>
        </>
    )
}

export default Filters