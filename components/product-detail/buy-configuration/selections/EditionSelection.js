import { useRouter } from 'next/router';
import editions from '../../../../data/editions';
import SpringBounceWhenInView from '../../../animation/SpringBounceWhenInView';
import EditionConfigOption from '../../buy-configuration/options/EditionConfigOption';

const EditionSelection = (props) => {
  const router = useRouter();

  const selectedEditionHandler = (edition) => {
    if (edition === 'standard') {
      document.body.className = '';
      props.setSelectedTeam(null);
      props.setBuyable(true);
      localStorage.removeItem('themed');
      localStorage.removeItem('theme');
    }

    if (edition === 'nostalgie') {
      props.setBuyable(false);
    }

    props.setSelectedEdition(edition);

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
                team={props.selectedTeam}
                price={edition.price}
                onClick={() => selectedEditionHandler(edition.edition)}
                selectedEdition={props.edition}
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
