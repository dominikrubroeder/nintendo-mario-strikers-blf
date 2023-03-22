import { useRouter } from "next/router";
import React, { useContext } from "react";
import AppContext from "../../store/appContext";
import AudioContext from "../../store/audioContext";

interface ButtonProps {
  variant: "contained" | "text" | "plain";
  text?: string;
  /** This property will tell the Button component to apply special classes to use a button within a text block. */
  isInline?: boolean;
  children?: React.ReactNode | string;
  icon?: JSX.Element;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  href?: string;
  className?: string;
  disabled?: boolean;
  sound?: "coin" | "nintendo-woho" | "nintendo-switch-click" | "team";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  text,
  isInline = false,
  children,
  icon,
  hasIconLeft,
  hasIconRight,
  href,
  className,
  disabled = false,
  sound,
  onClick,
}) => {
  const router = useRouter();
  const audioCtx = useContext(AudioContext);
  const appCtx = useContext(AppContext);
  const inlineClasses = isInline
    ? "inline-block p-0 text-left hover:bg-none hover:text-accent themed:bg-transparent themed:hover:bg-signal themed:hover:text-white"
    : "";

  const onClickHandler = () => {
    switch (sound) {
      case "coin":
        audioCtx?.setSound("/audio/nintendo-super-mario-coin.wav");
        break;
      case "nintendo-woho":
        audioCtx?.setSound("/audio/nintendo-woohoo.wav");
        break;
      case "nintendo-switch-click":
        audioCtx?.setSound("/audio/nintendo-switch-click.mp3");
        break;
      case "team":
        audioCtx?.setSound(`/audio/sound-${appCtx?.selectedTeam}-0.mp3`);
        break;
      default:
        audioCtx?.setSound("/audio/nintendo-switch-click.mp3");
    }

    if (onClick) onClick();

    if (href) router.push(href);
  };

  let variantClassName =
    variant === "contained"
      ? "button--contained"
      : variant === "text"
      ? "button--text"
      : "button--plain";

  return (
    <button
      className={`group ${variantClassName} ${inlineClasses} ${
        className ? className : ""
      }`}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {hasIconLeft && icon && icon}
      {text && text}
      {children ? children : null}
      {hasIconRight && icon ? icon : null}
    </button>
  );
};

export default Button;
