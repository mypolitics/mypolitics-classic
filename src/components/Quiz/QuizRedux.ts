import { RootState } from 'store';

export const mapStateToProps = ({ quiz }: RootState) => {
  const { introDone } = quiz;
  return { introDone };
};

export default mapStateToProps;
