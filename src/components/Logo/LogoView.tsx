import React from 'react';
import { ReactComponent as ClassicLogo } from 'assets/vectors/logoClassic.svg';
import { ReactComponent as ModernLogo } from 'assets/vectors/logo.svg';

type Props = {
  modern: boolean
};

const Logo: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { modern } = props;
  return modern ? <ModernLogo /> : <ClassicLogo />;
};

export default Logo;
