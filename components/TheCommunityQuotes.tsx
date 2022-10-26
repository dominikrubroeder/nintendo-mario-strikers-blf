import { useContext, useEffect, useRef, useState } from "react";
import SpringBounceWhenInView from "./SpringBounceWhenInView";
import Button from "./Button";
import BouncingItems from "./BouncingItems";
import AudioContext from "../store/audioContext";

const communityQuotes = [
  {
    quote: "NOSTALGIE PUR.",
    author: "Dominik Rubröder",
    platform: "YouTube",
    isHighlight: true,
  },
  {
    quote: "10/10 Hyped!",
    author: "One Piece Theoretiker",
    platform: "YouTube",
    isHighlight: true,
  },
  {
    quote:
      "15 Jahre auf diesen Tag gewartet und jetzt ist es endlich so weit 🔥",
    author: "Shy Crack",
    platform: "YouTube",
    isHighlight: false,
  },
  {
    quote:
      "Ich liebe Nintendo für diesen Move. Ich werde jeden Tag nach dem Training in dieses Spiel versinken 😂💯",
    author: "GoalKEEPERz",
    platform: "YouTube",
    isHighlight: false,
  },
  {
    quote: "Hat nur 15 Jahre gedauert, hätte ich nie mit gerechnet <3",
    author: "Shawn Gesell Gaming",
    platform: "YouTube",
    isHighlight: false,
  },
  {
    quote:
      "Nach Jahren tretet ein göttliches Spiel wieder aus den Schatten heraus :)",
    author: "Fvbiii",
    platform: "YouTube",
    isHighlight: false,
  },
];

export default function TheCommunityQuotes() {
  const audioCtx = useContext(AudioContext);
  const [showQuotes, setShowQuotes] = useState(false);
  const quotesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (showQuotes) {
      quotesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      audioCtx?.setSound("/audio/nintendo-switch-click.mp3");
    }
  }, [showQuotes, audioCtx]);

  return (
    <section className="mt-[10vh]">
      <header>
        <div className="flex flex-col items-center justify-center text-sm italic text-gray-600 themed:text-white/50">
          Die Community schreibt...
        </div>

        <div>
          {communityQuotes.map((communityQuote) => {
            if (communityQuote.isHighlight) {
              return (
                <div key={communityQuote.quote}>
                  <div className="headline--gradient">
                    &ldquo;{communityQuote.quote}&rdquo;
                  </div>
                </div>
              );
            }
          })}
        </div>
      </header>

      <div className="my-16 grid justify-center">
        <BouncingItems size={32} />

        <Button
          variant="text"
          sound="coin"
          onClick={() => setShowQuotes((previousState) => !previousState)}
        >
          Zeige {showQuotes ? "weniger" : "mehr"}
        </Button>
      </div>

      {showQuotes && (
        <div
          className="m-auto grid w-full max-w-3xl gap-8 px-4"
          ref={quotesRef}
        >
          {communityQuotes.map((communityQuote, index) => {
            if (!communityQuote.isHighlight) {
              return (
                <SpringBounceWhenInView key={communityQuote.quote}>
                  <div
                    className={`grid gap-2 ${
                      index % 2 ? "text-left" : "text-right"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-8 w-8 flex-none rounded-full bg-gray-100 themed:bg-accent-dark ${
                          index % 2 ? "order-1" : "order-2"
                        }`}
                      ></div>
                      <div
                        className={`flex items-center justify-center rounded-3xl bg-gray-100 themed:bg-accent-dark md:rounded-full ${
                          index % 2
                            ? "order-2 text-left"
                            : "order-1 ml-auto text-right"
                        }`}
                      >
                        <span className="mx-auto px-8 py-4 md:px-6">
                          &ldquo;{communityQuote.quote}&rdquo;
                        </span>
                      </div>
                    </div>
                    <p className="text-sm">
                      {communityQuote.platform} - {communityQuote.author}
                    </p>
                  </div>
                </SpringBounceWhenInView>
              );
            }
          })}
        </div>
      )}
    </section>
  );
}
