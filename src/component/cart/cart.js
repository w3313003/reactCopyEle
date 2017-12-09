import React from 'react'
import css from './cart.styl'
export default class ShopCart extends React.Component{
    render(){
        return (
            <div className={css.shopcart}>
                <div className={css.content}>
                    <div className={css.left}>
                        <div className={css.logowrap}>
                            <div className={css.logo}>
                                <svg className={`${css.icon} icon`} aria-hidden="true">
                                    <use xlinkHref="#icon-gouwuche"></use>
                                </svg>}
                            </div>
                            <div className={css.num}>
                                0
                            </div>
                        </div>
                        <div className={css.price}>
                            ￥0
                        </div>
                        <div className={css.desc}>
                            另需配送费￥4元
                        </div>
                    </div>
                    <div className={css.right} >
                        <div className={`${css.pay} ${true && css.notEnough}`} >
                            ￥20元起送
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}