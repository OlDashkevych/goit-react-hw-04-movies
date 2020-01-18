import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/server';
import { castMapper } from '../../js/mapper';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: null,
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { id } = this.props;
    API.getArticleCredits(id).then(({ data }) =>
      this.setState({ cast: castMapper(data.cast.slice(0, 8)) }),
    );
  }

  render() {
    const { cast } = this.state;

    return (
      <ul className={styles.castList}>
        {cast &&
          cast.map(({ name, id, character, profilePath }) => (
            <li key={id} className={styles.castListItem}>
              <img src={profilePath} alt="profile" width="100" height="150" />
              <span>Actor: {name}</span>
              <span>Character: {character}</span>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
