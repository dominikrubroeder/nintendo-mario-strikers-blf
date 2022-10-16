import { useCallback, useEffect, useState } from 'react';

const galleryData = [
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_01.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_02.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_03.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_04.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_05.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_06.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_07.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_08.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_09.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_10.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_11.jpg',
  },
  {
    src: '/images/gallery/NSwitch_MarioStrikersBattleLeagueFootball_12.jpg',
  },
];

// Check quote slider animation on change: https://de.kickbase.com/
export default function TheGallery() {
  const [activeItem, setActiveItem] = useState(0);

  // include multiple view options like sider, grid, list, ...

  const calcValue = useCallback(
    (index: number) => {
      if (index > activeItem) return index * 100;
      if (index < activeItem) return -(index * 100);

      return 0;
    },
    [activeItem]
  );

  return (
    <section className="p-4 overflow-x-auto whitespace-nowrap">
      <div className="relative h-[75vh] md:h-[80vh]">
        {galleryData.map((galleryItem, index) => {
          return (
            <div
              key={galleryItem.src}
              style={{
                backgroundImage: `url(${galleryItem.src})`,
                transform: `translateX(${calcValue(index)}%)`,
              }}
              className={`absolute left-0 top-0 w-[85vw] h-full bg-cover bg-center rounded-3xl transition-all duration-1000 md:w-[95vw] md:h-[80vh] ${
                index === activeItem ? 'scale-100' : 'scale-95'
              }`}
            ></div>
          );
        })}
      </div>

      <div className="flex items-center p-8">
        <ul className="flex items-center gap-4 mx-auto">
          {galleryData.map((_, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveItem(index);
              }}
            >
              <span
                className={`block w-4 h-4 rounded-full themed:bg-themed-dark cursor-pointer transition-all hover:scale-150 ${
                  index === activeItem ? 'bg-accent' : 'bg-accent/20'
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
