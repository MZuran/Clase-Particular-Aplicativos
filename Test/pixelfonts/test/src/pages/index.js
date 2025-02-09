import { fonts, renderPixels, renderImage } from "js-pixel-fonts";
import { useState } from "react";

import { getImgFromArr, getDataUrlFromArr } from 'array-to-image';



export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);

  const picture = renderImage("Testing pixel package", fonts.sevenPlus, {
    foreground: [0, 0, 0],
    background: [255, 255, 255],
    scale: 2,
  }).pipe(fs.createWriteStream(`./samples/prueba.png`));;


  return (
    <>
      <h1>Test</h1>
    </>
  );
}
