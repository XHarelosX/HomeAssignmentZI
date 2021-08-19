interface Props {
  SelectedMovie: any;
}

const MovieInfoSection: React.FC<Props> = ({ SelectedMovie }) => {
  return (
    <>
      {SelectedMovie ? (
        <section>
          <div>{SelectedMovie.title}</div>
          <div></div>
        </section>
      ) : (
        <p>Please Selecet Movie.</p>
      )}
    </>
  );
};

export default MovieInfoSection;
