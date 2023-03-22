import { useContext } from "react";
import AppContext from "../store/appContext";
import editions from "../data/editions";
import SpringBounceWhenInView from "./animation/SpringBounceWhenInView";
import EditionConfigOption from "./EditionConfigOption";

const EditionSelection: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
    <div className="grid gap-4">
      <h4>Wähle deine Edition:</h4>

      <div className="grid gap-2">
        {editions.map((edition) => {
          return (
            <EditionConfigOption
              key={edition.name}
              edition={edition}
              price={edition.price}
              onClick={() => appCtx?.setTeam(edition.team)}
            >
              <ul>
                {edition.details.map((detail) => (
                  <li key={detail} className="star">
                    {detail}
                  </li>
                ))}
              </ul>

              {edition.moreDetails && (
                <ul className="mt-4">
                  {edition.moreDetails.map((detail) => (
                    <li className="star" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </EditionConfigOption>
          );
        })}
      </div>
    </div>
  );
};

export default EditionSelection;
