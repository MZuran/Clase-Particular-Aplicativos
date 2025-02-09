import { useEffect, useState } from 'react';

export function ImageRenderer({ imageData }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Convierte Uint8Array a un Blob tipo 'image/png'
    const blob = new Blob([imageData], { type: 'image/png' });
    
    // Genera una URL para usarla como fuente de la imagen
    const url = URL.createObjectURL(blob);
    setImageSrc(url);

    // Limpia la URL cuando se desmonta el componente
    return () => URL.revokeObjectURL(url);
  }, [imageData]);

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="Rendered PNG" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}