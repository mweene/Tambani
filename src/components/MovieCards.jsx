import MovieCard from "./MovieCard";
import image from "../assets/img.jpg";
import image2 from "../assets/img2.jpg";
import image4 from "../assets/img4.webp";
import image7 from "../assets/img7.webp";

export default function MovieCards() {
    return (
        <div className="grid grid-cols-4 gap-4 px-20 py-16">
            <MovieCard 
                imageSrc={image}
            />
            <MovieCard 
                imageSrc={image2}
            />
            <MovieCard 
                imageSrc={image7}
            />
            <MovieCard 
                imageSrc={image4}
            />
      </div>
    );
}