import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom'
import css from './router.styl'

import CommentWrap from 'component/comment/comment'
import GoodWrap from 'component/goodwrap/goodwrap'
import Seller from 'component/seller/seller'

class Routers extends React.Component{
    render(){
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
                    <Route  path='/Good' component={GoodWrap}/>
                    <Route  path="/comment" component={CommentWrap}/>
                    <Route  path="/seller" component={Seller}/>
                </div>
            </Router>
        )
    }
}


export default Routers
  