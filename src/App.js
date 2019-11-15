import React, { Component } from 'react';

// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Ahlem',
    age: 24,
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Level0 = (props) => (
  <div className="family">
    <Level1 />
  </div>
)

class Level1 extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
              <Level2 />
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class Level2 extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.growAYearOlder}>🍰🍥🎂</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Level0 />
        </div>
      </MyProvider>
    );
  }
}


export default App;
