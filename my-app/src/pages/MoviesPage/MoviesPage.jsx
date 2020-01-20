import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import qs from 'query-string';
import * as API from '../../services/server';
import ArticleList from '../../components/ArticleList/ArticleList';
import { listMapper } from '../../js/mapper';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  state = {
    value: '',
    articles: null,
  };

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const searchParams = qs.parse(location.search).query;
      this.searchMovie(searchParams);
    }
  }

  searchMovie = query => {
    API.getSearchArticles(query).then(({ data }) =>
      this.setState({ articles: listMapper(data.results) }),
    );
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.searchMovie(value);
  };

  render() {
    const { value, articles } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            onChange={this.handleChange}
            value={value}
            type="text"
            className={styles.pageInput}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
        {articles && <ArticleList items={articles} />}
      </>
    );
  }
}

export default MoviesPage;
