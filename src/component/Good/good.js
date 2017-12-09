import React from 'react'
import Scroll from 'component/common/scroll'
import css from './good.styl'
const data = require('../.././util/data')
class Good extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            goodInfo:{}
        }
    }
    componentWillMount(){
        this.setState({
            goodInfo: data.goodInfo.data
        });
        setTimeout(() => {
            console.log(this.state.goodInfo)
        },20)
    }
    hasScroll  = () => {
        console.log('滚动')
    }
    aside(){
        return this.state.goodInfo.map((v,i)=> {
            return (
                <li className={css.menuItem} 
                key = {i}>
                    <span className={css.text}>
                        {v.name}
                    </span>
                </li>
            )
        })
    }
    render(){
        return(
            <div className={css.goods}>
                <div className={css.menuWrapper}>
                    <Scroll isScroll={this.hasScroll}>
                        <ul>
                            {this.aside()}
                        </ul>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default Good