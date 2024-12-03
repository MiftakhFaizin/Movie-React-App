const Movie = (props) => {
    return (
        <div className="min-h-screen bg-slate-900 px-[30px] pt-[80px]">
            <h1 className="w-full max-md:text-center text-[30px] text-neutral-50 font-bold">List Movies</h1>
            <div className="grid grid-cols-4 max-md:flex max-md:justify-center max-md:flex-wrap gap-[30px] pb-[50px] pt-[50px]">
                {props.movies.map((movie, index) => (
                <div key={index} className="flex flex-col bg-slate-800 max-md:w-[250px] gap-[10px] border-2 border-slate-800 rounded-md shadow shadow-slate-500">
                    <img className="w-full h-[200px]" src={movie.Poster}></img>
                    <div className="flex flex-col pb-[15px] px-[10px]">
                        <p className="text-neutral-50 text-[18px] font-bold">{movie.Title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Movie