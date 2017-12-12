import React from 'react'
import Good from '../Good/good'
import ShopCart from '../cart/cart'
const data = require('../.././util/data')

export default class GoodWrap extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shopList:[],
            goodInfo:[]
        }
    }
    
    componentWillMount() {
        this.setState({
            goodInfo:data.goodInfo.data
        })
    }
    foodCountAdd = food =>{
        if(!food.counts){
            food.counts = 0;
        };
        food.counts++;
        if(!this.state.shopList.find(v => v === food)){
            this.state.shopList.push(food);
        }
        this.setState({});
        this.addToShopCart(food)
    }
    foodCountDecrease = food => {
        food.counts--;        
        if(food.counts < 1){
            let index = this.state.shopList.findIndex(v => v === food);
            this.state.shopList.splice(index,1);
            this.setState({});
            this.refs.shopcart.setState({
                isShow:false
            })
        }
        this.setState({});
    }
    addToShopCart = food => {
        this.setState({});
    }
    clear = () => {
        this.state.goodInfo.forEach(v => {
            v.foods.forEach(item => {
                item.counts = 0
            })
        });
        this.refs.shopcart.cartToggle();
        this.state.shopList = [];
        this.setState({});
    }
    render(){
        return (
            <div>
                <Good ref='good' addCart={this.addToShopCart}
                    goodInfo={this.state.goodInfo}
                    clear={this.clear}
                    foodCountDecrease = {this.foodCountDecrease}
                    foodCountAdd = {this.foodCountAdd}
                    ></Good>
                <ShopCart 
                          ref = 'shopcart'  
                          GoodList={this.state.shopList}
                          shopcount={this.state.shopList.length}
                          clearList = {this.clear}
                          foodCountDecrease = {this.foodCountDecrease}
                          foodCountAdd = {this.foodCountAdd}
                >
                </ShopCart>
            </div>
        )
    }
}