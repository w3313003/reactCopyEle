import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'
import css from './router.styl'

import Good from 'component/Good/good'
import Scroll from '../common/scroll'
class Routers extends React.Component{
    render(){
        var a  = <div>
                    <div className={css.routeWrap}>
                    
                </div>
                </div>;
        return (
            <Router>
                <div className={css.routerWrap}>
                    <ul className={css.tab}>
                        <li className={css.tabItem}><NavLink activeStyle={{color:'#f01414'}} to="/Good">商品</NavLink></li>
                        <li className={css.tabItem}><NavLink activeStyle={{color:'#f01414'}} to="/comment">评价</NavLink></li>
                        <li className={css.tabItem}><NavLink activeStyle={{color:'#f01414'}} to="/seller">商家</NavLink></li>
                    </ul>
                    <Route  exact  path="/"  render={() => (
                        <Redirect to="/Good"/>
                    )}/>
                    <Route path='/Good' component={Good}></Route>
                    <Route  path="/comment" component={Comment}/>
                    <Route  path="/seller" component={Seller}/>
                </div>
            </Router>
        )
    }
}
function Comment(){
    return (
        <div>
            456
        </div>
    )
}
function Seller(){
    return (
        <div>
            789
        </div>
    )
}

export default Routers
  