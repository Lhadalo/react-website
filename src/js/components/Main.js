import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Article 
            priority={priority}
            onResponsive={this._onResponsive}>
            {nav}
            <Section>
              <Switch>
                <Route exact={true} path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/photos' component={Photos} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
              </Switch>
            </Section>
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
