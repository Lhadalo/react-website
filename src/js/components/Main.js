import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
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
    const isMobile = this.state.width <= 500;
    const style = {
      marginBottom: '60px',
    };
    
    const Routes = withRouter(({ location }) => (
      <TransitionGroup exit={false}>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Switch location={location} >
            <Route exact={true} path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    ));
    
    if (isMobile) {
      return (
        <App centered={true} style={style}>
          <Router>
            <Article>
              <NavigationBar />
              <Routes />
              <Footer />
              <BottomBar />
            </Article>
          </Router>
        </App>
      );
    }

    return (
    <App centered={true}>
      <Router>
        <Article>
          <NavigationBar />
          <Routes />
          <Footer />
        </Article>
      </Router>
    </App>
    );
  }
}

export default Main;
