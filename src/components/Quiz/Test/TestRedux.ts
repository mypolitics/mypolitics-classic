import { RootState } from 'store';

export const mapStateToProps = ({ quiz }: RootState) => {
  const { question, loading } = quiz;
  return { question, loading };
};

export default mapStateToProps;
