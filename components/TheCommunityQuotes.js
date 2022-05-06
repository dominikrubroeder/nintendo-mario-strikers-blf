const communityQuotes = [
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
      <div>
        {communityQuotes.map((communityQuote) => {
          if (communityQuote.isHighlight) {
            return (
              <div
                key={communityQuote.quote}
                className="mx-auto my-8 leading-tight text-center text-8xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                "{communityQuote.quote}"
              </div>
            );
          }
        })}
      </div>
      <div className="max-w-3xl w-full m-auto grid gap-8">
        {communityQuotes.map((communityQuote, index) => {
          if (!communityQuote.isHighlight) {
            return (
              <div
                key={communityQuote.quote}
                className={`grid gap-2 ${
                  index % 2 ? 'text-left' : 'text-right'
                }`}
              >
                <div
                  className={`max-w-max bg-gray-100 rounded-full p-4 ${
                    index % 2 ? 'text-left' : 'text-right ml-auto'
                  }`}
                >
                  "{communityQuote.quote}"
                </div>
                <p className="text-sm">
                  {communityQuote.platform} - {communityQuote.author}
                </p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
