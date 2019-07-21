import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { getLanguage, changeLanguage } from '../actions/action_languages';
import { connect } from 'react-redux';

// Grommet
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';

// Screens
import Home from '../screens/Home';
import Projects from '../screens/Projects';
import Contact from '../screens/Contact';

// Components
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import BottomBar from './BottomBar';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
    this._languageChanged = false;
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    this.props.handleGetLanguage();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.locale);
    console.log(nextProps.locale);
    if (this.props.locale !== nextProps.locale && this.props.locale !== null) {
      console.log('Language Changed');
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    const { locale } = this.props;
    const isMobile = this.state.width <= 500;
    const style = {
      marginBottom: '60px',
    };
    console.log(this._languageChanged);
    
    const Routes = withRouter(({ location }) => (
      <TransitionGroup exit={false}>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Switch location={location} >
            <Route exact={true} path='/' render={() => <Home locale={locale} />} />
            <Route path='/home' render={() => <Home locale={locale} />} />
            <Route path='/projects' render={() => <Projects locale={locale} />} />
            <Route path='/contact' render={() => <Contact locale={locale} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    ));
    
    if (isMobile) {
      return (
        <App centered={true} style={style}>
          <Router>
            <Article>
              <NavigationBar locale={locale} />
              <Routes />
              <Footer locale={locale} />
              <BottomBar locale={locale} changeLanguage={this.props.handleChangeLanguage} />
            </Article>
          </Router>
        </App>
      );
    }

    return (
    <App centered={true}>
      <Router>
        <Article>
          <NavigationBar locale={locale} />
          <Routes />
          <Footer locale={locale} changeLanguage={this.props.handleChangeLanguage} />
        </Article>
      </Router>
    </App>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.language.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetLanguage: () => dispatch(getLanguage()),
    handleChangeLanguage: () => dispatch(changeLanguage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
