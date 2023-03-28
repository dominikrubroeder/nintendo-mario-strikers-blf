import React, { useContext } from "react";
import AudioContext from "../../store/audioContext";

interface Props {
  className?: string;
}

export default function LightningShape({ className }: Props) {
  const audioCtx = useContext(AudioContext);

  return (
    <svg
      width="206"
      height="614"
      viewBox="0 0 206 614"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""} ${
        audioCtx?.playSoundtrackOnce ? "animate-shakeScale" : ""
      }`}
    >
      <g filter="url(#filter0_d_669_1198)">
        <path
          d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613C126.212 138.346 121.64 149.922 117.42 190.366C113.199 230.811 112.144 257.627 112.144 265.979L109.507 284.883L115.222 343.79C111.705 343.79 106.429 349.945 104.231 353.022L79.1734 387.752V392.587L75.2169 418.524V442.703L79.1734 545.572L70.8208 442.703L65.1059 418.524H68.1832L70.8208 429.515L73.0189 431.713V397.423L70.8208 392.587L75.2169 387.752V383.795V375.003H79.1734V383.795L107.309 343.79L104.231 336.757V265.979L107.309 268.177L115.222 190.366L112.144 183.772V162.671L117.42 137.613Z"
          fill="#FBF7AD"
        />
        <path
          d="M117.42 137.613L127.97 105.961L100.714 82.2221L105.11 62L112.144 71.6714V82.2221L141.159 105.961L127.97 137.613M117.42 137.613H127.97M117.42 137.613L112.144 162.671V183.772L115.222 190.366L107.309 268.177L104.231 265.979V336.757L107.309 343.79L79.1734 383.795V375.003H75.2169V383.795V387.752L70.8208 392.587L73.0189 397.423V431.713L70.8208 429.515L68.1832 418.524H65.1059L70.8208 442.703L79.1734 545.572L75.2169 442.703V418.524L79.1734 392.587V387.752L104.231 353.022C106.429 349.945 111.705 343.79 115.222 343.79L109.507 284.883L112.144 265.979C112.144 257.627 113.199 230.811 117.42 190.366C121.64 149.922 126.212 138.346 127.97 137.613"
          stroke="#FBF7AD"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_669_1198"
          x="0.473938"
          y="0.803711"
          width="205.289"
          height="612.809"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="32" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.960784 0 0 0 0 0.65098 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_669_1198"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_669_1198"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
