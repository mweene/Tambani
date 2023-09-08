import MovieCard from "./MovieCard";
import image from "../assets/img.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.webp";
import image4 from "../assets/img4.webp";
import image5 from "../assets/img5.webp";
import image6 from "../assets/img6.webp";
import image7 from "../assets/img7.webp";
import image8 from "../assets/img8.webp";

export default function MovieCards() {
    return (
        <div className="grid grid-cols-4 gap-4 p-20">
            <MovieCard 
                imageSrc={image}
            />
            <MovieCard 
                imageSrc={image2}
            />
            <MovieCard 
                imageSrc={image3}
            />
            <MovieCard 
                imageSrc={image4}
            />
            <MovieCard 
                imageSrc={image5}
            />
            <MovieCard 
                imageSrc={image6}
            />
            <MovieCard 
                imageSrc={image7}
            />
            <MovieCard 
                imageSrc={image8}
            />
      </div>
    );
}