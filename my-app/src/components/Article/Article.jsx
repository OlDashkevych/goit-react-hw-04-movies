import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Article.module.css';

const Article = ({
  posterPath,
  title,
  userScore,
  overview,
  genres,
  onGoBack,
}) => (
  <div className={styles.articleWrapper}>
    <button type="button" onClick={onGoBack} className={styles.button}>
      <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} /> Go back
    </button>
    <div className={styles.article}>
      <img src={posterPath} alt="film-banner" className={styles.articleImg} />.
      <div className={styles.articleDescription}>
        <h2>{title}</h2>
        <span>Score: {userScore}</span>
        <div className="">
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div className="">
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
    </div>
  </div>
);

Article.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  onGoBack: PropTypes.func.isRequired,
};

export default Article;
