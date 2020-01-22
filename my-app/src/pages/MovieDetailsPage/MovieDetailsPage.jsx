import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';
import { articleMapper } from '../../js/mapper';
import * as API from '../../services/server';
import Article from '../../components/Article/Article';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import routes from '../../routes/routes';
import styles from './MovieDetailsPage.module.css';

const getIdFromProps = props => props.match.params.movieId;

class MovieDetailsPage extends Component {
  state = { article: null, prevPage: null };

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const id = getIdFromProps(this.props);
    API.getArticlesById(id).then(({ data }) =>
      this.setState({ article: articleMapper(data) }),
    );
    if (location.state && location.state.from) {
      this.setState({
        prevPage: location.state.from,
      });
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { prevPage } = this.state;
    if (prevPage) {
      history.push({ ...prevPage });
      return;
    }
    history.push('/');
  };

  render() {
    const { article } = this.state;
    const { match } = this.props;
    const id = getIdFromProps(this.props);
    return (
      <>
        {// eslint-disable-next-line react/jsx-props-no-spreading
        article && <Article onGoBack={this.handleGoBack} {...article} />}
        <ul className={styles.detailsList}>
          <li className={styles.detailsItem}>
            <NavLink
              to={{
                pathname: `${match.url}${routes.CAST.path}`,
              }}
              activeClassName={styles.detailsLinkActive}
              className={styles.detailsLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.detailsItem}>
            <NavLink
              to={{
                pathname: `${match.url}${routes.REVIEW.path}`,
              }}
              activeClassName={styles.detailsLinkActive}
              className={styles.detailsLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path={`${match.url}${routes.CAST.path}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            render={props => <Cast {...props} id={id} />}
          />
          <Route
            path={`${match.url}${routes.REVIEW.path}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            render={props => <Reviews {...props} id={id} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
