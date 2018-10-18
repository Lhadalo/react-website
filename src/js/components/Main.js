import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Grommet
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
// Screens
import Home from '../screens/Home';
import Photos from '../screens/Photos';
import PhotosShow from '../screens/PhotosGallery';
import PhotoViewer from './PhotoViewer';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';

import { navResponsive } from '../actions/nav';
import NavigationBar from './NavigationBar';

class Main extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  render() {
    const Routes = withRouter(({ location }) => (
      <TransitionGroup exit={false}>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Switch location={location} >
            <Route exact={true} path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/photos/gallery/:id' component={PhotosShow} />
            <Route path='/photos/photo/:id' component={PhotoViewer} />
            <Route path='/photos' component={Photos} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    ));
    
    return (
      <App centered={false}>
        <Router>
          <Article>
            <NavigationBar />
            <Routes />
          </Article>
        </Router>
      </App>
    );
  }
}

Main.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

function mapStateToProps(state) {
  return { nav: state.nav };
}

export default connect(mapStateToProps)(Main);
