import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import BouncingItems from "./BouncingItems";
import { communityQuotes } from "../data/communityquotes";

export default function CommunityQuotes() {
  return (
    <section className="grid gap-8">
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

      <div className="m-auto grid w-full max-w-3xl gap-8">
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
                          : "order-1 ml-auto text-left md:text-right"
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
    </section>
  );
}
