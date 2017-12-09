/*
 * @Author: ZhaoJie 
 * @Date: 2017-12-08 16:37:25 
 * @Last Modified by: 赵杰
 * @Last Modified time: 2017-12-09 00:34:04
 */
import React from 'react'
import css from './header.styl'
import Star from '../common/star'
import 'assets/animate.css'
import {Transition , CSSTransition} from 'react-transition-group';
const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
}

const transitionStyles = {
        entering: { 
                    opacity: 0,
                    display:'block'
                  },
        entered: {    
                    opacity: 1,
                    display:'none'
                },
};
const data = require('../.././util/data')

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seller:{},
            detailShow:false
        }
    }
    componentWillMount() {
        this.setState({
            seller : data.seller.data
        });
        setTimeout(() => {
            console.log(this.state.seller)            
        },100)
        // axios.get('http://192.168.31.205:6060/seller').then(res => {
        //     this.setState({
        //         seller:res.data.data
        //     });
        //     console.log(this.aab)
        // })
    }
    detailOpen = () => {
        this.setState({
            detailShow: true
        })
    }
    detailClose = () => {
        this.setState({
            detailShow: false
        })
    }
    render() {
        const Fade = ({ in: inProp }) => (
            <Transition in={inProp} timeout={duration}>
              {(state) => (
                <Detail
                    style={{
                      ...defaultStyle,
                      ...transitionStyles[state]
                    }}
                    seller={this.state.seller}
                    detailClose = {this.detailClose}
                >
                </Detail>
              )}
            </Transition>
          );  
        return ( 
                <div className = { css.header }>
                    <Content 
                        detailOpen={this.detailOpen} 
                        seller={this.state.seller}
                    >
                    </Content>
                    <Background seller={this.state.seller}></Background>
                    <Bulletin 
                    detailOpen={this.detailOpen}
                    seller={this.state.seller}>
                    </Bulletin>
                    {this.state.detailShow && 
                    <Detail
                    seller={this.state.seller}
                    detailClose = {this.detailClose}>
                    </Detail>
                    
                    }
                    
                </div> 
        )
    }
}
function Content(props){
    return (
        <div className={css.contentWrap}>
            <div className={css.avatar}>
                <img width='64' height='64' src={props.seller.avatar} alt='头像'/>
            </div>
            <div className={css.content}>
                <div className={css.title}>
                    <span className={css.brand}></span>
                    <span className={css.name}>
                        {props.seller.name}
                    </span>
                </div>
                <div className={css.description}>
                    {props.seller.description}/{props.seller.deliveryTime}分钟送达
                </div>
                <div className={css.support}>
                    <span className={`${css.icon} ${css.decrease}`}></span>
                    <span className={css.text}>
                        {props.seller.supports[0].description}
                    </span>
                </div>
            </div>
            <div className={css.supportCount} onClick={props.detailOpen}>
                <div className={css.count}>
                    {props.seller.supports.length}个
                    <svg className={`icon ${css.icon}`} aria-hidden="true">
                        <use xlinkHref="#icon-jiantou"></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}
function Background(props){
    return (
        <div className={`${css.background}`}>
            <img  width="100%" height="100%"  src={props.seller.avatar} alt='北京' />
        </div>
    )
}
function Bulletin(props) {
    return (
        <div className={css.bulletinWrapper} onClick={props.detailOpen}>
            <span className={css.bulletinTitle}></span>
            <span className={css.bulletinText}>
                {props.seller.bulletin}
            </span>
        </div>
    )
}
function Detail(props){
    let iconName = '';
    let lis = props.seller.supports.map((v,i) => {
        switch(i){
            case 0:
            iconName = 'decrease';
            break;
            case 1:
            iconName = 'discount';
            break;
            case 2:
            iconName = 'special';
            break;
            case 3:
            iconName = 'invoice';
            break;
            case 4:
            iconName = 'guarantee';
            break;
            default:
                console.log(999)
        }
        return (
            <li className={css.supportItem} key={i}>
                <span className={`icons ${iconName}`}></span>
                <span className={css.text}>
                    {v.description}
                </span>
            </li>
        )
    })
    return (
            <div className={css.detail}>
                <div className={`${css.detailWrapper} clearfix`}>
                    <div className={css.detailMain}>
                        <h1 className={css.name}>
                            {props.seller.name}
                        </h1>
                        <Star rating={props.seller.score}>
                        </Star>
                        <div className={css.title}>
                            <div className={css.line}></div>
                            <div className={css.text}>
                                优惠信息
                            </div>
                            <div className={css.line}></div>
                        </div>
                        <ul className={css.supports}>
                            {lis}
                        </ul>
                        <div className={css.title}>
                            <div className={css.line}></div>
                            <div className={css.text}>
                                商家公告
                            </div>
                            <div className={css.line}></div>
                        </div>
                        <div className={css.bulletin}>
                            <div className={css.content}>
                                {props.seller.bulletin}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.detailClose} onClick={props.detailClose}>
                    <svg className={`icon ${css.icon}`} aria-hidden="true">
                        <use xlinkHref="#icon-guanbi"></use>
                    </svg>
                </div>
            </div>
    )
}


export default Header