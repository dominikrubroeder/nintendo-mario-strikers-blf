import Image from "next/image";
import React, { useContext, useState } from "react";
import AppContext from "../../store/appContext";

interface CharacterGalleryProps {
  images: string[];
}

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ images }) => {
  const appCtx = useContext(AppContext);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-16">
        <Image
          width={500}
          height={500}
          src={
            images[activeImage - 1 < 0 ? images.length - 1 : activeImage - 1]
          }
          alt="Image of Mario"
          className="flex-1 scale-75 cursor-pointer transition hover:scale-100"
          onClick={() => {
            setActiveImage(
              activeImage - 1 < 0 ? images.length - 1 : activeImage - 1
            );
            appCtx?.setCharacter("mario");
          }}
        />

        <Image
          width={500}
          height={500}
          src={images[activeImage]}
          alt="Image of Mario"
          className="flex-2"
        />

        <Image
          width={500}
          height={500}
          src={
            images[
              activeImage + 1 < images.length
                ? images.length - 1
                : activeImage + 1
            ]
          }
          alt="Image of Mario"
          className="flex-1 scale-75 cursor-pointer transition hover:scale-100"
          onClick={() => {
            setActiveImage(
              activeImage + 1 < images.length
                ? images.length - 1
                : activeImage + 1
            );
            appCtx?.setCharacter("peach");
          }}
        />
      </div>

      <div className="sticky top-0 z-50 flex items-center p-4">
        <ul className="mx-auto flex items-center gap-4">
          {images.map((_, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveImage(index);
              }}
              className={`interactive block rounded-xl bg-accent px-4 themed:bg-accent-dark ${
                index === activeImage ? "scale-110 opacity-100" : "opacity-20"
              }`}
            >
              <Image
                width={48}
                height={48}
                src="/images/characters/NSwitch-character-sketch-yoshi.png"
                alt="Icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CharacterGallery;
