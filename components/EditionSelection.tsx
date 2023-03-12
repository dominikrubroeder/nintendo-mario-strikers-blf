import { useContext } from "react";
import { useRouter } from "next/router";
import AppContext from "../store/appContext";
import editions from "../data/editions";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import EditionConfigOption from "./EditionConfigOption";
import Accordion from "./ui/Accordion";
import QuestionBlock from "./img/QuestionBlock";

const EditionSelection: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();

  const selectedEditionHandler = (edition: string) => {
    appCtx?.validateEdition(edition);

    router.push(`${router.pathname}/?edition=${edition}`, undefined, {
      shallow: true,
    });
  };

  return (
    <div className="grid gap-4">
      <h4>Wähle deine Edition:</h4>

      <div className="grid gap-2">
        {editions.map((edition) => {
          return (
            <SpringBounceWhenInView key={edition.title}>
              <EditionConfigOption
                edition={edition}
                price={edition.price}
                onClick={() => selectedEditionHandler(edition.id)}
              >
                <ul>
                  {edition.details.map((detail) => (
                    <li key={detail} className="star">
                      {detail}
                    </li>
                  ))}
                </ul>

                {edition.moreDetails && (
                  <Accordion
                    title={
                      <div className="flex items-center justify-between gap-2">
                        Zeige mehr Infos
                        <QuestionBlock size={24} />
                      </div>
                    }
                    className="mt-4 flex bg-transparent"
                    showFooter={false}
                  >
                    <ul>
                      {edition.moreDetails.map((detail) => (
                        <li className="star" key={detail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                )}
              </EditionConfigOption>
            </SpringBounceWhenInView>
          );
        })}
      </div>
    </div>
  );
};

export default EditionSelection;
