import * as React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import './Quiz.scss';
import myPoliticsQuizThumbnail from 'assets/images/thumbnails/mypolitics-quiz.png';
import { mapStateToProps } from './QuizRedux';
import QuizIntro from './Intro';
import QuizTest from './Test';

type ReduxType = ReturnType<typeof mapStateToProps>;
type Props = ReduxType;

const QuizView: React.FC<Props> = (props) => {
  const { introDone } = props;

  return (
    <main className="quiz">
      <Helmet>
        <title>myPolitics – Quiz</title>
        <meta property="og:title" content="myPolitics – Quiz" />
        <meta name="description" content="Quiz po którego ukończeniu otrzymasz wyniki ukazujące twoje poglądy." />
        <meta property="og:description" content="Quiz po którego ukończeniu otrzymasz wyniki ukazujące twoje poglądy." />
        <meta property="og:image" content={myPoliticsQuizThumbnail} />
      </Helmet>
      {!introDone && <QuizIntro />}
      {introDone && <QuizTest />}
    </main>
  );
};

export default connect(mapStateToProps)(QuizView);
