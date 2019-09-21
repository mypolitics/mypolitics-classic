import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

type Props = {
  loading: boolean
  resultsId: string
  handleSubmit: Function
  handleChange: any
};

const FormView: React.FC<Props> = (props) => {
  const {
    loading, resultsId, handleSubmit, handleChange,
  } = props;
  return (
    <form className="history__form" onSubmit={(event) => handleSubmit(event)}>
      <input
        name="resultid"
        type="text"
        placeholder="ID lub link do wyników"
        value={resultsId}
        onChange={(event) => handleChange(event)}
      />
      <button type="submit" disabled={loading}>
        <FaIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default FormView;
