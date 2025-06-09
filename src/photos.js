import birth from './images/birthday.jpg';
import cafemexico from './images/Cafe Mexico_2022Jul15.png';
import cafemexico2 from './images/cafemexico2.jpeg';
import elklake from './images/Elk_Beaver Lake Regional Park_2021Oct10.jpg';
import elklake2 from './images/elklake.jpeg';
import mnw from './images/massonnathoowei.jpg';
import sooke from './images/sooke.jpg';
import hiking from './images/hiking.png';

const rawImages = [
  { src: birth, alt: 'Birthday' },
  { src: cafemexico, alt: 'Cafe Mexico 1' },
  { src: cafemexico2, alt: 'Cafe Mexico 2' },
  { src: elklake, alt: 'Elk Lake 1' },
  { src: elklake2, alt: 'Elk Lake 2' },
  { src: mnw, alt: 'Masson Nathoo Wei' },
  { src: sooke, alt: 'Sooke' },
  { src: hiking, alt: 'Hiking' },
];

const photos = await Promise.all(
  rawImages.map(({ src, alt }) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve({
          src,
          alt,
          width: img.naturalWidth,
          height: img.naturalHeight,
        });
      };
    });
  })
);

export default photos;
