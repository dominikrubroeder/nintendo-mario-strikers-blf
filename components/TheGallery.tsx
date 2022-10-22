import Image from 'next/image';
import { useCallback, useState } from 'react';

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
      if (index > activeItem) return index * 100 + 2 * index;
      if (index < activeItem) return -(index * 100 + 2 * index);

      return 0;
    },
    [activeItem]
  );

  return (
    <section className="p-4 overflow-hidden">
      <div className="relative h-[75vh] md:h-[85vh]">
        {galleryData.map((galleryItem, index) => {
          return (
            <div
              key={galleryItem.src}
              style={{
                backgroundImage: `url(${galleryItem.src})`,
                transform: `translateX(${calcValue(index)}%)`,
              }}
              className={`absolute left-0 top-0 w-full h-full bg-cover bg-center rounded-3xl transition-all duration-1000 ${
                index === activeItem
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-50'
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
              <Image
                width={32}
                height={32}
                src="/images/items/CI_NSwitch_MarioStrikersBLF_AW_Items_Mushroom.png"
                alt="Icon"
                className={`block rounded-full p-4 bg-accent themed:bg-accent-dark interactive ${
                  index === activeItem ? 'opacity-100 scale-110' : 'opacity-20'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
