import React from 'react'
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom'
import axios from 'axios'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to='/TheNew'>TheNew</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/TheNew" component={TheNew}/>
    </div>
  </Router>
)

class TheNew extends React.Component{
    componentDidMount(){
        axios.get('http://10.0.0.21:6060').then(res => {
            console.log(res.data)
        })
    }
    componentWillReceiveProps(newprops){

    }
    render(){
        return (
            <div>
                {this.props.match.url}
            </div>
        )
    }
}
// const TheNew = () => (
//     <div>
//         <h2>213</h2>
//     </div>
// )

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default App



// class App extends Component {
//     render() {
//         return (
//             <div className={css.App}>
//                 <header className={css.AppHeader}>
//                     <img src={logo} className={css.AppLogo} alt="logo" />
//                     <h1 className={css.AppTitle}>Welcome to React</h1>
//                 </header>
//                 <p className={css.AppIntro}>
//                     To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//                 <a className={style.b}>
//                     123
//         </a>
//             </div>
//         );
//     }
// }

// export default App;