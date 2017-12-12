import React from 'react'
import css from './cart.styl'
import Control from '../control/control'

export default class ShopCart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow:false,
            enoughMoney:20
        }
    }
    cartToggle = () => {
        if(!this.props.GoodList.length > 0){
            return
        }
        this.setState({
            isShow : !this.state.isShow
        })
    }
    _calculaPrice = () => {
        let totalPrice = 0;
        this.props.GoodList.forEach(v => {
            totalPrice += v.counts * v.price
        });
        return totalPrice;
    }
    pay(){
        console.log(this)
        let price = this._calculaPrice() + 4;
        alert(`需支付${price}元`)
    }
    componentWillReceiveProps(props){
        
    }

    render(){
        return (
            <div>
            <div className={css.shopcart}>
                <div className={css.content}>
                    <div className={css.left}>
                        <div className={css.logowrap} onClick={this.cartToggle}>
                            <div className={css.logo}>
                                <svg className={`${css.icon} icon`} aria-hidden="true">
                                    <use xlinkHref="#icon-gouwuche"></use>
                                </svg>}
                            </div>
                            {this.props.shopcount > 0 && 
                                <div className={css.num}>
                                    {this.props.shopcount}
                                </div>
                            }
                        </div>
                        <div className={css.price}>
                            ￥{this._calculaPrice()}
                        </div>
                        <div className={css.desc}>
                            另需配送费￥4元
                        </div>
                    </div>
                    <div className={css.right} >
                        <div className={`${css.pay} ${this._calculaPrice() < 20 ?  css.notEnough : css.Enough}`} >
                            { this._calculaPrice() < 20 ?
                                <span>￥{this.state.enoughMoney}元起送</span> :
                                <span onClick={this.pay.bind(this)}>去结算</span>
                            }
                        </div>
                    </div>
                </div>
                {this.state.isShow &&
                    <div className={css.shopcartList}>
                        <div className={css.listHeader}>
                            <div className={css.title}>
                                购物车
                            </div>
                            <span className={css.empty} onClick={() => this.props.clearList()}>
                                清空
                            </span>
                        </div>
                        <div className={css.listContent}>
                            <ul>
                                {this.props.GoodList.map((v,i) => {
                                    return (
                                        <li className={css.food} key={i}>
                                            <span className={css.name}>
                                                {v.name}
                                            </span>
                                            <div className={css.price}>
                                                <span>
                                                    ￥{v.price}
                                                </span>
                                            </div>
                                            <div className={css.cartcontrolWrapper}>
                                                <Control food={v}
                                                    add={this.props.foodCountAdd}
                                                    decrease={this.props.foodCountDecrease}
                                                >
                                                    
                                                </Control>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
            {this.state.isShow && 
            <div className={css.listMask} onClick={this.cartToggle}>

            </div>
            }
            </div>
        )
    }
}