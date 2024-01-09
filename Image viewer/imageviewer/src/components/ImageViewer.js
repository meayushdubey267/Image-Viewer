import React from 'react';

function ImageViewer() {
  const images = [
    'https://images.pexels.com/photos/8155442/pexels-photo-8155442.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4239104/pexels-photo-4239104.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5217900/pexels-photo-5217900.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6781117/pexels-photo-6781117.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6690221/pexels-photo-6690221.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6187540/pexels-photo-6187540.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1883385/pexels-photo-1883385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    // Add more image paths as needed
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-viewer">
      <button onClick={prevImage} className='nav-button'>Previous</button>
      <img src={images[currentImageIndex]} alt="Gallery" />
      <button onClick={nextImage} className='nav-button'>Next</button>
    </div>
  );
}

export default ImageViewer;
