import AppearWhenInView from './animation/AppearWhenInView';
import PulsingDots from './PulsingDots';

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
  return (
    <section>
      <div className="my-16">
        <PulsingDots size={8} />
      </div>

      <div className="flex flex-col items-center justify-center text-sm italic text-gray-600 mt-8">
        Die Community schreibt...
      </div>

      <div>
        {communityQuotes.map((communityQuote) => {
          if (communityQuote.isHighlight) {
            return (
              <div key={communityQuote.quote}>
                <div className="mx-auto px-4 my-8 text-6xl md:text-8xl md:leading-tight text-center break-all font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-fill-color-transparent">
                  "{communityQuote.quote}"
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="max-w-3xl w-full grid gap-8 px-4 m-auto">
        {communityQuotes.map((communityQuote, index) => {
          if (!communityQuote.isHighlight) {
            return (
              <AppearWhenInView key={communityQuote.quote}>
                <div
                  className={`grid gap-2 ${
                    index % 2 ? 'text-left' : 'text-right'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 flex-none rounded-full bg-gray-100 theme-mario:bg-mario-dark theme-luigi:bg-luigi-dark theme-peach:bg-peach-dark theme-yoshi:bg-yoshi-dark theme-daisy:bg-daisy-dark theme-bowser:bg-bowser-dark theme-wario:bg-wario-dark theme-waluigi:bg-waluigi-dark theme-donkey-kong:bg-donkey-kong-dark ${
                        index % 2 ? 'order-1' : 'order-2'
                      }`}
                    ></div>
                    <div
                      className={`flex items-center justify-center bg-gray-100 rounded-3xl md:rounded-full ${
                        index % 2
                          ? 'text-left order-2'
                          : 'text-right ml-auto order-1'
                      }`}
                    >
                      <span className="px-8 py-4 md:px-6 mx-auto">
                        "{communityQuote.quote}"
                      </span>
                    </div>
                  </div>
                  <p className="text-sm">
                    {communityQuote.platform} - {communityQuote.author}
                  </p>
                </div>
              </AppearWhenInView>
            );
          }
        })}
      </div>
    </section>
  );
}
