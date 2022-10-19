import { useEffect, useRef, useState } from 'react';
import SpringBounceWhenInView from './animation/SpringBounceWhenInView';
import Button from './base/Button';
import BouncingItems from './BouncingItems';

const communityQuotes = [
  {
    quote: 'NOSTALGIE PUR.',
    author: 'Dominik Rubröder',
    platform: 'YouTube',
    isHighlight: true,
  },
  {
    quote: '10/10 Hyped!',
    author: 'One Piece Theoretiker',
    platform: 'YouTube',
    isHighlight: true,
  },
  {
    quote:
      '15 Jahre auf diesen Tag gewartet und jetzt ist es endlich so weit 🔥',
    author: 'Shy Crack',
    platform: 'YouTube',
    isHighlight: false,
  },
  {
    quote:
      'Ich liebe Nintendo für diesen Move. Ich werde jeden Tag nach dem Training in dieses Spiel versinken 😂💯',
    author: 'GoalKEEPERz',
    platform: 'YouTube',
    isHighlight: false,
  },
  {
    quote: 'Hat nur 15 Jahre gedauert, hätte ich nie mit gerechnet <3',
    author: 'Shawn Gesell Gaming',
    platform: 'YouTube',
    isHighlight: false,
  },
  {
    quote:
      'Nach Jahren tretet ein göttliches Spiel wieder aus den Schatten heraus :)',
    author: 'Fvbiii',
    platform: 'YouTube',
    isHighlight: false,
  },
];

export default function TheCommunityQuotes() {
  const [showQuotes, setShowQuotes] = useState(false);
  const quotesRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (showQuotes) {
      quotesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showQuotes]);

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

      <div className="grid justify-center my-16">
        <BouncingItems size={32} />

        <Button
          variant="text"
          onClick={() => setShowQuotes((previousState) => !previousState)}
        >
          Zeige {showQuotes ? 'weniger' : 'mehr'}
        </Button>
      </div>

      {showQuotes && (
        <div
          className="max-w-3xl w-full grid gap-8 px-4 m-auto"
          ref={quotesRef}
        >
          {communityQuotes.map((communityQuote, index) => {
            if (!communityQuote.isHighlight) {
              return (
                <SpringBounceWhenInView key={communityQuote.quote}>
                  <div
                    className={`grid gap-2 ${
                      index % 2 ? 'text-left' : 'text-right'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 flex-none rounded-full bg-gray-100 themed:bg-accent-dark ${
                          index % 2 ? 'order-1' : 'order-2'
                        }`}
                      ></div>
                      <div
                        className={`flex items-center justify-center bg-gray-100 themed:bg-accent-dark rounded-3xl md:rounded-full ${
                          index % 2
                            ? 'text-left order-2'
                            : 'text-right ml-auto order-1'
                        }`}
                      >
                        <span className="px-8 py-4 md:px-6 mx-auto">
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
