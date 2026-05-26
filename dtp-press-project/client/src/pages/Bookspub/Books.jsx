import React from "react";
import "./Bookpub.css";

import img2 from "../../asset/booksimg/2.jpg";
import img3 from "../../asset/booksimg/3.jpg";
import img4 from "../../asset/booksimg/4.jpg";
import img5 from "../../asset/booksimg/5.jpg";
import img6 from "../../asset/booksimg/6.jpg";
import img7 from "../../asset/booksimg/7.jpg";
import img8 from "../../asset/booksimg/8.jpg";
import img9 from "../../asset/booksimg/11-1.jpg";
import img10 from "../../asset/booksimg/10.jpg";
import img12 from "../../asset/booksimg/12.jpg";
import img13 from "../../asset/booksimg/13.jpg";
import img14 from "../../asset/booksimg/14.jpg";
import img15 from "../../asset/booksimg/15.jpg";
import img16 from "../../asset/booksimg/16.jpg";
import img17 from "../../asset/booksimg/17.jpg";
import img18 from "../../asset/booksimg/18.jpg";
import img19 from "../../asset/booksimg/19.jpg";
import img20 from "../../asset/booksimg/20.jpg";

export default function Books() {
  const publications = [

   {
  id: 2,
  title: "Srotaswini",
  author: "Literature",
  description: "A thoughtful Odia book filled with emotions and life experiences.",
  rating: "4.6",
  badge: "Popular",
  image: img2,
},
{
  id: 3,
  title: "Kala Tarangini",
  author: "Art & Culture",
  description: "A creative Odia book celebrating art, culture and imagination.",
  rating: "4.3",
  badge: "Creative",
  image: img3,
},
{
  id: 4,
  title: "Jyotirupa",
  author: "Literature",
  description: "An inspiring Odia book filled with thoughtful ideas and creativity.",
  rating: "4.1",
  badge: "Inspirational",
  image: img4,
},
{
  id: 5,
  title: "Godhuli",
  author: "Poetry Book",
  description: "A beautiful journey through nature and village life.",
  rating: "4.7",
  badge: "Popular",
  image: img5,
},
{
  id: 6,
  title: "Dhanya Tume Dhaneshwar",
  author: "Memorial Book",
  description: "A touching book of memories and emotions.",
  rating: "3.9",
  badge: "Emotional",
  image: img6,
},
{
  id: 7,
  title: "Bani",
  author: "Poetry Book",
  description: "A book filled with knowledge and inspiration.",
  rating: "4.1",
  badge: "Recommended",
  image: img7,
},
{
  id: 8,
  title: "Samujwala",
  author: "Magazine",
  description: "A creative cultural magazine featuring art and literature.",
  rating: "4.5",
  badge: "Trending",
  image: img8,
},
{
  id: 10,
  title: "Santidhara",
  author: "Spiritual",
  description: "A peaceful spiritual book with inspiring thoughts.",
  rating: "4.8",
  badge: "Spiritual",
  image: img10,
},
{
  id: 12,
  title: "Mu Para Mo Chai",
  author: "Tunibala Biswal",
  description: "Poetic reflections on life and memories.",
  rating: "4.6",
  badge: "Featured",
  image: img12,
},
{
  id: 13,
  title: "Sita Sathe Asa Basiba Mita",
  author: "Pavan Kumar Nayak",
  description: "A heart warming Odia story about friendship and emotions.",
  rating: "4.1",
  badge: "New Release",
  image: img13,
},
{
  id: 14,
  title: "Gapa Ru Sikhiba",
  author: "Dr. Purushtom Dhal",
  description: "A collection of meaningful stories with life lessons.",
  rating: "4.3",
  badge: "Popular",
  image: img14,
},
{
  id: 15,
  title: "Mangalbadya",
  author: "Dr. Atala Bihari Nayak",
  description: "A journey into deep thinking and self-discovery.",
  rating: "4.8",
  badge: "Best Seller",
  image: img15,
},
{
  id: 16,
  title: "Daru Dehi Shree Jagannath",
  author: "Pandit Nursingha Charan Nayak",
  description: "A devotional Odia book dedicated to Lord Jagannath.",
  rating: "4.8",
  badge: "Devotional",
  image: img16,
},
{
  id: 17,
  title: "Giti Kabitar Sure",
  author: "Dr. Anil Kumar Das",
  description: "A romantic Odia poetry collection filled with emotions.",
  rating: "4.4",
  badge: "Romantic",
  image: img17,
},
{
  id: 18,
  title: "Anta Hina Joshna",
  author: "Rudrakanta Routray",
  description: "A heartfelt book of memories and life experiences.",
  rating: "4.2",
  badge: "Popular",
  image: img18,
},

  ];

  return (
    <section className="books-section">
      <div className="section-title">
        <h2>Our Publications</h2>
        <p>Explore our latest published books and creative works.</p>
      </div>
      <div className="books-container">
        {publications.map((book) => (
          <div className="book-card" key={book.id}>
            <div className="book-image">
              <img src={book.image} alt={book.title} />
              <span className="book-rating">⭐ {book.rating}</span>
              <span className="book-badge">{book.badge}</span>
            </div>

            <div className="book-content">
              <h3>{book.title}</h3>

              <h4>By:{book.author}</h4>

              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}