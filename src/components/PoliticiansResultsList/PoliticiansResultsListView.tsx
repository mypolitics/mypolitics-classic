import React from 'react';
import { ListContainer, ListElement, ListElementImage, ListElementTitle } from './PoliticiansResultsListStyle';
import { politiciansResults } from '../../utils/politiciansResults';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

const PoliticiansResultsListView: React.FC = () => {
  const politiciansResultsShuffled = politiciansResults.sort(() => 0.5 - Math.random());

  const handleClick = (name: string) => {
    ReactGA.event({
      category: 'PoliticiansResults',
      action: 'PersonClicked',
      label: name,
    });

    ReactPixel.trackCustom('PoliticiansResultsPersonClicked', {
      name,
    });
  };

  return (
    <ListContainer>
      {politiciansResultsShuffled.map(({ id, person }) => (
        <ListElement key={id} to={`/results/${id}`} onClick={() => handleClick(person.name)}>
          <ListElementImage
            src={`/images/politicians/${person.imgName}#title`}
            alt={person.name}
          />
          <ListElementTitle>
            {person.name}
          </ListElementTitle>
        </ListElement>
      ))}
    </ListContainer>
  );
};

export default PoliticiansResultsListView;
