
import "./Slider.css";

// import img1 from "../assets/slider/img1.jpg";
// import img2 from "../assets/slider/img2.jpg";
// import img3 from "../assets/slider/img3.jpg";
// import img4 from "../assets/slider/img4.jpg";
// import img5 from "../assets/slider/img5.jpg";
// import img6 from "../assets/slider/img6.jpg";

export default function ImageSlider() {


    const images = [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    ];

    return (
        <div className="slider-container">

            <div className="slider-track">

                {/* DOUBLE FOR INFINITE LOOP */}

                {[...images, ...images].map((img, index) => (

                    <div className="slide" key={index}>

                        <img src={img} alt="slider" />

                    </div>

                ))}

            </div>

        </div>
    );
}
