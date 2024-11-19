import React from 'react';

const ImageGallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433',
      alt: 'Volunteers distributing supplies',
      caption: 'Our dedicated volunteers distributing essential supplies to those in need'
    },
    {
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
      alt: 'Water distribution',
      caption: 'Providing clean water to combat the desert heat'
    },
    {
      url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
      alt: 'Food distribution',
      caption: 'Regular food distribution events in the community'
    },
    {
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b',
      alt: 'Medical supplies',
      caption: 'Offering basic medical supplies and first aid kits'
    },
    {
      url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433',
      alt: 'Hygiene kits',
      caption: 'Distributing hygiene kits and personal care items'
    },
    {
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a',
      alt: 'Community outreach',
      caption: 'Building connections within our community'
    }
  ];

  return (
    <section className="image-gallery">
      <h2>Our Impact</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.url} alt={image.alt} loading="lazy" />
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;