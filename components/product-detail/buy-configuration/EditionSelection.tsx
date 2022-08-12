import { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../../store/app-context';
import editions from '../../../data/editions';
import SpringBounceWhenInView from '../../animation/SpringBounceWhenInView';
import EditionConfigOption from './options/EditionConfigOption';

const EditionSelection = (props) => {
  const appCtx = useContext(AppContext);
  const router = useRouter();

  const selectedEditionHandler = (edition) => {
    appCtx.validateEdition(edition);

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
            <SpringBounceWhenInView key={edition.edition}>
              <EditionConfigOption
                edition={edition.edition}
                price={edition.price}
                onClick={() => selectedEditionHandler(edition.edition)}
              >
                <ul className="list-disc pl-4">
                  {edition.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </EditionConfigOption>
            </SpringBounceWhenInView>
          );
        })}
      </div>
    </div>
  );
};

export default EditionSelection;
