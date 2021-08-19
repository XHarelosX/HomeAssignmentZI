
interface Props {
  SelectedMovie: any;
}

const MovieInfoSection: React.FC<Props> = ({ SelectedMovie }) => {
    
  return (
    <>
      {SelectedMovie ? <section> {SelectedMovie.title}</section> : <p>Please Selecet Movie.</p>}
    </>
  );
};

export default MovieInfoSection;
