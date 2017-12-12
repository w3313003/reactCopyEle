
import React from 'react'
import Scroll from 'component/common/scroll'
import Control from '../control/control'
import css from './good.styl'
class Good extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentIndex : 0,
            listheight:[]
        }
    }
    /**
     * @output 左侧边栏
     */
    componentDidMount(){
        this._calculateHeight();
        console.log(this.state.listheight)
    }
    asideLeft(){
        return this.props.goodInfo.map((v,i)=> {
            return (
                <li className={`${css.menuItem} ${this.state.currentIndex === i ? css.current : ''}`} 
                key = {i}
                onClick={() => this.scrollTo(i)}>
                    <span className={css.text}>
                    {i === 1 && 
                        <span className={`${css.icon} ${css.special}`}>

                        </span>}
                        {i === 2 && 
                        <span className={`${css.icon} ${css.discount}`}>
                            
                        </span>}
                        {v.name}
                        
                    </span>
                </li>
            )
        })
    }
    /**
     * @output 右侧边栏
     */
    asideRight() {
        return this.props.goodInfo.map((v,i) => {
            return (
                <li  className={css.foodList}  key={i}>
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
    scrollTo = i => {
        this.setState(() => ({
            currentIndex : i
        }));
        let Rel = this.refs.goodTypes.children[i],
            Lel = this.refs.menuTypes.children[i];
            this.refs.scrollLeft.scroll.scrollToElement(Lel,300);
        this.refs.scrollRight.scroll.scrollToElement(Rel,300);
    }
    // 计算右侧每一块距离顶部的距离
    _calculateHeight = () => {
        const list = this.refs.goodTypes.children;
        let height = 0;
        this.state.listheight.push(height);
        for(let i = 0 ; i< list.length ; i++){
            height += list[i].clientHeight;
            this.state.listheight.push(height)
        }
        this.setState(() => ({}))
    }
    // 待完善
    listenScroll = pos => {
        let top = pos.y,
            list = this.state.listheight;
            if(top > 0){
                return;
            };
        for(let i = 0 ; i<list.length ; i++){
            let height1 = list[i],
                height2 = list[i+1];
                if(!height2 || (-top >= height1 && -top < height2)){
                    if(i === this.state.currentIndex){
                        return ;
                    } else  {
                        this.setState({
                            currentIndex : i
                        });
                    };
                    break;      
                };
                
        };
    }
    render(){
        return(
            <div className={css.goods}>
                <div className={css.menuWrapper}>
                    <Scroll ref='scrollLeft'>
                        <ul ref='menuTypes'>
                            {this.asideLeft()}
                        </ul>
                    </Scroll>
                </div>
                <div className={css.foodsWrapper}>
                    <Scroll ref='scrollRight' scrollHandle={this.listenScroll}
                        listenScroll={true}
                        >
                        <ul ref='goodTypes'>
                            {this.asideRight()}
                        </ul>
                    </Scroll>
                </div>
            </div>
        )
    }
}

export default Good