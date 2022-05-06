const galleryItems = [
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

export default function TheGallery() {
  return (
    <section className="h-screen p-4 overflow-x-auto whitespace-nowrap">
      <div className="h-full">
        {galleryItems.map((galleryItem, index) => {
          return (
            <div
              key={galleryItem.src}
              style={{ backgroundImage: `url(${galleryItem.src})` }}
              className="inline-block mr-4 w-[85vw] md:w-[95vw] h-full bg-cover bg-center rounded-3xl"
            ></div>
          );
        })}
      </div>
    </section>
  );
}
