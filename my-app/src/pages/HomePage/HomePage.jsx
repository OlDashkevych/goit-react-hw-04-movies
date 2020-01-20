import React, { Component } from 'react';
import * as API from '../../services/server';
import ArticleList from '../../components/ArticleList/ArticleList';
import { listMapper } from '../../js/mapper';

class HomePage extends Component {
  state = {
    articles: null,
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    API.getArticles().then(({ data }) =>
      this.setState({ articles: listMapper(data.results) }),
    );
  };

  render() {
    const { articles } = this.state;
    return <>{articles && <ArticleList items={articles} />}</>;
  }
}

export default HomePage;
