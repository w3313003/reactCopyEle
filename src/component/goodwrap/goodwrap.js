import React from 'react'
import Good from '../Good/good'
import ShopCart from '../cart/cart'
export default class GoodWrap extends React.Component{
    render(){
        return (
            <div>
                <Good></Good>
                <ShopCart></ShopCart>
            </div>
        )
    }
}