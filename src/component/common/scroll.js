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
            this._listenScroll();
        },20)
        
    }
    componentWillReceiveProps(){
        this._initScroll();
    }
    _listenScroll(){
        if(this.props.listenScroll){
            this.scroll.on('scroll',pos=>{
            this.props.scrollHandle(pos)
            })
        }
    }
    _initScroll(){
        if(!this.scroll){
            this.scroll = new Bscroll(this.refs.scrollWrap,{
                probeType:this.props.probeType || 3,
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
