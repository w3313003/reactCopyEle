import React from 'react'
import Rheader from './component/header/header'
import Routers from './component/router/router'
import css from './index.css'
class Main extends React.Component{
    render(){
        return (
            <div className={css.root}>
                <Rheader></Rheader>
                <Routers></Routers>
            </div>
        )
    }
}
export default Main