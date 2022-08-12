import { useContext } from 'react';
import { useRouter } from 'next/router';
import AppContext from '../../../store/app-context';
import editions from '../../../data/editions';
import SpringBounceWhenInView from '../../animation/SpringBounceWhenInView';
import EditionConfigOption from './EditionConfigOption';

const EditionSelection: React.FC = () => {
  const appCtx = useContext(AppContext);
  const router = useRouter();

  const selectedEditionHandler = (edition: string) => {
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
            <SpringBounceWhenInView key={edition.title}>
              <EditionConfigOption
                edition={edition}
                price={edition.price}
                onClick={() => selectedEditionHandler(edition.id)}
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
