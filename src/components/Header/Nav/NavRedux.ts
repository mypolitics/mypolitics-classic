import { RootState } from 'store';

export const mapStateToProps = ({ quiz }: RootState) => {
  const { answers } = quiz;
  return { answers };
};

export default mapStateToProps;
