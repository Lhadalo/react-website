import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Grommet
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

// Screens
import Home from '../screens/Home';
import Photos from '../screens/Photos';
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
    const {
      nav: { active: navActive, enabled: navEnabled, responsive }
    } = this.props;

    const includeNav = (navActive && navEnabled);
    let nav;
    if (includeNav) {
      nav = <NavigationBar />;
    }

    const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    return (
      <App centered={true}>
        <Router>
          <Route render={({ location }) => (
            <Article 
              priority={priority}
              onResponsive={this._onResponsive}>
              {nav}
              <Section pad='none'>
                <TransitionGroup>
                  <CSSTransition key={location.key} classNames='fade' timeout={300}>
                    <Switch location={location}>
                      <Route exact={true} path='/' component={Home} />
                      <Route exact={true} path='/home' component={Home} />
                      <Route exact={true} path='/photos' component={Photos} />
                      <Route exact={true} path='/projects' component={Projects} />
                      <Route exact={true} path='/contact' component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </Section>
            </Article>
          )} />
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
