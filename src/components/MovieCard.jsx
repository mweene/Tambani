export default function MovieCard({imageSrc}) {
    return (
        <div className="movie-card">
            <button className="relative">
                
                <div className="card-gradient absolute w-full h-full z-20 hover:opacity-90 opacity-40"></div>

                <div className="movie-img">
                    <img src={imageSrc} alt="image" />
                </div>

                <div className="hidden text">
                    <h2 className="text-3xl font-bold">48 hours</h2>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis corrupti minima maxime officiis distinctio!</p>
                    <div className="rating">
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </button>
        </div>
    );
}