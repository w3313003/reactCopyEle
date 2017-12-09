import Bscroll from 'better-scroll'
import React from 'react'
import css from './common.styl'

export default class Scroll extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount = () => {
        setTimeout(() => {
            this._initScroll();
            this.scroll.on('scroll',()=>{
                this.props.isScroll()
            })
        },20);
        
    }
    _initScroll(){
        if(!this.scroll){
            this.scroll = new Bscroll(this.refs.scrollWrap,{
                probeType:this.props.probeType || 2,
                click : true
            })
        } else {
            this.scroll.refresh();
        }
    }
    render(){
        return (
            <div className={css.scrollWrap} ref='scrollWrap'>
                {this.props.children}
            </div>
        )
    }
}
