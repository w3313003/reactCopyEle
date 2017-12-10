
import React from 'react'
import Scroll from 'component/common/scroll'
import Control from '../control/control'
import css from './good.styl'
class Good extends React.Component{
    constructor(props){
        super(props)
    }
    /**
     * @output 左侧边栏
     */
    
    asideLeft(){
        return this.props.goodInfo.map((v,i)=> {
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
    /**
     * @output 右侧边栏
     */
    asideRight(){
        return this.props.goodInfo.map((v,i) => {
            return (
                <li className={css.foodList}  key={i}>
                    <h1 className={css.title}>
                        {v.name}
                    </h1>
                    <ul>
                        {v.foods.map((item,index) => {
                            return (
                                <li className={css.foodItem} key={index}>
                                    <div className={css.icon}>
                                        <img alt='icon' width='57' height='57' src={item.icon}/>
                                    </div>
                                    <div className={css.content}>
                                        <h2 className={css.name}>
                                            {item.name}
                                        </h2>
                                        <p className={css.desc}>
                                            {item.description}
                                        </p>
                                        <div className={css.extra}>
                                            <span className={css.count}>
                                                月售{item.sellCount}
                                            </span>
                                            <span>
                                                好评率{item.rating}%
                                            </span>
                                        </div>
                                        <div className={css.price}>
                                            <span className={css.now}>
                                                ￥{item.price}
                                            </span>
                                            {item.oldPrice > 0 && 
                                                <span className={css.old}>
                                                    ￥{item.oldPrice}
                                                </span>
                                            }
                                        </div>
                                        <div className={css.controlWrap}>
                                            <Control food={item} i={i} index={index} 
                                                decrease={this.props.foodCountDecrease}
                                                add={this.props.foodCountAdd}
                                                >
                                            </Control>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </li>
            )
        })
    }

    foodCounDecrease = food =>{
        if(food.counts === 0){
            food.counts = 0;
            return;
        };
        food.counts--;
        this.setState({})
    }
    
    hasScroll  = () => {
        console.log('滚动')
    }
    render(){
        return(
            <div className={css.goods}>
                <div className={css.menuWrapper}>
                    <Scroll ref='scrollLeft' isScroll={this.hasScroll}>
                        <ul>
                            {this.asideLeft()}
                        </ul>
                    </Scroll>
                </div>
                <div className={css.foodsWrapper}>
                    <Scroll ref='scrollRight' isScroll={this.hasScroll}>
                        <ul>
                            {this.asideRight()}
                        </ul>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default Good