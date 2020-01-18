const apiImgPath = 'https://image.tmdb.org/t/p/w400/';

export const articleMapper = item => {
  const {
    poster_path: posterPath,
    title,
    popularity: userScore,
    overview,
    genres,
  } = item;
  return {
    posterPath: apiImgPath + posterPath,
    title,
    userScore,
    overview,
    genres: genres.map(({ name }) => name).join('  '),
  };
};

export const listMapper = items => {
  const emptyBackdrop =
    'http://davidsonfilmclub.com/wp-content/uploads/2017/06/Films-Hero-1260x600.jpg';
  return items.map(({ id, title, name, backdrop_path: backdropPath }) => ({
    id,
    title,
    name,
    backdropPath: backdropPath ? apiImgPath + backdropPath : emptyBackdrop,
  }));
};

export const castMapper = items => {
  const emptyProfile =
    'https://stempel.fiu.edu/wp-content/uploads/sites/75/2017/12/profile-empty.png';
  return items.map(({ id, profile_path: profilePath, name, character }) => ({
    id,
    profilePath: profilePath ? apiImgPath + profilePath : emptyProfile,
    name,
    character,
  }));
};

export const reviewsMapper = items => {
  return items.map(({ id, author, content }) => ({
    id,
    author,
    content: content.length > 700 ? `${content.slice(0, 500)}...` : content,
  }));
};
