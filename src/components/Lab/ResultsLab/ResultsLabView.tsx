import React, { ChangeEvent } from 'react';
import { AxesResults, Results } from 'store/results/types';
import {
  faRandom,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axesConfig, { Sides, Widths } from 'utils/axesConfig';
import Axis from 'components/Results/Axes/AxesAxis';
import service from 'service';
import { Container, ButtonGroup, Button } from './ResultsLabStyle';

library.add(faRandom, faSave);

const ResultsLab: React.FC = () => {
  const [results, setResults] = React.useState<AxesResults>({
    anarchism: 20,
    anthropocentrism: 20,
    authoritarianism: 20,
    capitalism: 20,
    communism: 20,
    cosmopolitanism: 20,
    environmentalism: 20,
    interventionism: 20,
    laissezfaire: 20,
    militarism: 20,
    nationalism: 20,
    pacifism: 20,
    progressivism: 20,
    traditionalism: 20,
  });

  const getRandomInt = (min: number, max: number) => {
    const ceilMin = Math.ceil(min);
    const floorMax = Math.floor(max);
    return Math.floor(Math.random() * (floorMax - ceilMin)) + ceilMin;
  };

  const handleRandomize = () => {
    const updatedResults: AxesResults = {
      ...results,
    };

    for (let i = 0; i < axesConfig.length; i++) {
      const axis = axesConfig[i];
      const leftTitle = axis.sides.left.title;
      const rightTitle = axis.sides.right.title;

      const leftValue = getRandomInt(0, 100);
      const rightValue = getRandomInt(0, leftValue);

      updatedResults[leftTitle] = leftValue;
      updatedResults[rightTitle] = rightValue;
    }

    setResults(updatedResults);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, sides: Sides) => {
    const isLeftSide = sides.left.title === e.target.name;
    const leftValue = results[sides.left.title];
    const rightValue = results[sides.right.title];
    const opposedSideValue = isLeftSide ? rightValue : leftValue;
    const maxCorrectValue = 100 - opposedSideValue;

    const valueInt = parseInt(e.target.value, 10);
    const value = valueInt > maxCorrectValue ? maxCorrectValue : valueInt;
    const updatedResults: AxesResults = {
      ...results,
      [e.target.name]: value,
    };

    setResults(updatedResults);
  };

  const handleSave = async () => {
    const data: Results = {
      axes: results,
      additionDate: new Date().toISOString(),
    };

    const result = await service.addResults(data);
    (window as any).location.href = `/results/${result.addResults.id}`;
  };

  const getBuiltWidths = (sides: Sides): Widths => {
    const leftValue = results[sides.left.title];
    const rightValue = results[sides.right.title];
    const centerValue = 100 - (leftValue + rightValue);

    return {
      left: leftValue,
      right: rightValue,
      center: centerValue,
    };
  };

  React.useEffect(() => {
    handleRandomize();
  }, []);

  return (
    <Container>
      <div className="axes">
        {axesConfig.map((axis) => (
          <Axis
            key={axis.index}
            config={axis.sides}
            widths={getBuiltWidths(axis.sides)}
            onChange={(e) => handleChange(e, axis.sides)}
            editable
          />
        ))}
      </div>
      <ButtonGroup>
        <Button onClick={handleRandomize}>
          <FontAwesomeIcon icon={faRandom} />
          Losuj
        </Button>
        <Button onClick={handleSave}>
          <FontAwesomeIcon icon={faSave} />
          Zapisz
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default ResultsLab;
