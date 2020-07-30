import * as React from 'react';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Test.scss';
import Info from './Info';
import Question from './Question';
import Actions from './Actions';
import { mapStateToProps, mapDispatcherToProps } from './TestRedux';

library.add(faTools);

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;
type Props = ReduxType;

const TestView: React.FC<Props> = (props) => {
  const { question, loading } = props;
  const [showRepair, setShowRepair] = React.useState<boolean>(false);

  const handleRepair = () => {
    localStorage.removeItem('persist:root');
    window.location.reload();
  };

  React.useEffect(() => {
    const loadingTimestamp = new Date().getTime();

    const interval = setInterval(() => {
      if (loading) {
        const currentTimestamp = new Date().getTime();
        const bigDifference = (currentTimestamp - loadingTimestamp) > 5000;
        if (bigDifference) {
          setShowRepair(true);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [loading]);

  React.useEffect(() => {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="test">
      <div>
        <Info
          category={question.category}
          questionNumber={question.index + 1}
          questionsTotalCount={question.totalCount}
        />
        <Question text={question.text} loading={loading} />
        {showRepair && (
          <button
            type="button"
            className="test__button-repair"
            onClick={handleRepair}
          >
            <FontAwesomeIcon icon={faTools} />
            Coś nie działa? Kliknij tutaj i napraw!
          </button>
        )}
        <Actions question={question} loading={loading} />
      </div>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          marginTop: '1rem',
        }}
        data-ad-client="ca-pub-2006154132998057"
        data-ad-slot="4587520303"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatcherToProps)(TestView);
