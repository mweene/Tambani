export default function MovieCard({imageSrc}) {
    return (
        <div className="movie-card">
            <img src={imageSrc} alt="image" />
            <div className="hidden text">
                <h2 className="text-3xl font-bold">48 hours</h2>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis corrupti minima maxime officiis distinctio!</p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </div>
    );
}