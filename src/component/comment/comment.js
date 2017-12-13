import React from 'react'
import css from './comment.styl'
import Scroll from 'component/common/scroll'
import Star from 'component/common/star'


const data = require('../../util/data')
function Header(props){
    return (
        <div className={css.overview}>
            <div className={css.overviewLeft}>
                <h1 className={css.score}>
                    {props.seller.score}
                </h1>
                <div className={css.title}>
                    综合评分
                </div>
                <div className={css.rank}>
                    超越周边{props.seller.rankRate}%商家
                </div>
            </div>
            <div className={css.overviewRight}>
                <div className={css.scoreWrapper}>
                    <span className={css.title}>
                        服务态度
                    </span>
                    <div className={css.starwrap}>
                        <Star s36={true} rating={props.seller.serviceScore}>
                        </Star>
                    </div>
                    <div className={css.score}>
                        {props.seller.serviceScore}
                    </div>
                </div>
                <div className={css.scoreWrapper}>
                    <span className={css.title}>
                    商品评分
                    </span>
                    <div className={css.starwrap}>
                        <Star s36={true} rating={props.seller.foodScore}>

                        </Star>
                    </div>
                    <div className={css.score}>
                        {props.seller.foodScore}
                    </div>
                </div>
                <div className={css.deliveryWrapper}>
                    <span className={css.title}>
                        送达时间
                    </span>
                    <span className={css.delivery}>
                        {props.seller.deliveryTime}分钟
                    </span>
                </div>
            </div>
        </div>
    )
}

class RatingSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RatingList : this.props.RatingList,
            positiveList:[],
            negativeList:[],
            currentIndex:'0'
        }
    }
    componentWillMount(){
        let arr = this.props.RatingList.filter(v => {
            return v.rateType === 0;
        }),
        arr1 = this.props.RatingList.filter(v => {
            return v.rateType === 1;
        })
        this.setState({
            positiveList : arr,
            negativeList : arr1
        })
    }
    renderLi(){
        return this.state.RatingList.map((v,i) => {
                return (
                    <li key={i} className={css.ratingItem}> 
                        <div className={css.avatar}>
                            <img width='28' height='28' alt='avatar' src={v.avatar}/>
                        </div>
                        <div className={css.content}>
                            <h1 className={css.name}>
                                {v.username}
                            </h1>
                            <div className={css.starWrapper}>
                                <Star s24={true} rating={v.score}></Star>
                                {v.deliveryTime && <span className={css.delivery}>
                                    {v.deliveryTime}分钟送达
                                </span>}
                            </div>
                            <p className={css.text}>
                                {v.text}
                            </p>
                            <div className={css.recommend}>
                                {v.recommend.map(item => {
                                    return(
                                        <span className={css.item} key={item}>
                                            {item}
                                        </span>
                                    )
                                })}
                            </div>
                            <div className={css.time}>
                                {new Date(v.rateTime).toLocaleString()}
                            </div>
                        </div>  
                    </li>
                )
            })
        }
    ListToggle = e => {
        const el = e.currentTarget,
              type = +el.dataset.type;
              if(type === 0) {
                  this.setState({
                      currentIndex:type,
                      RatingList : this.props.RatingList
                  })
              } else if(type === 1){
                  this.setState({
                    currentIndex:type,
                      RatingList : this.state.positiveList
                  })
              } else if(type === 2){
                  this.setState({
                    currentIndex:type,
                      RatingList : this.state.negativeList
                  })
              }
    }
    render(){
        return (
            <div>
            <div className={css.ratingselect}>
                <div className={css.ratingType}>
                    <div className={`${css.block} ${css.positive} ${this.state.currentIndex == 0 ? css.active : ''}`}
                        data-type='0'
                        onClick={this.ListToggle}>
                        全部
                        <span className={css.count}>
                            {this.props.RatingList.length}
                        </span>
                    </div>
                    <div 
                    className={`${css.block} ${css.positive} ${this.state.currentIndex == 1 ? css.active : ''}`}
                    data-type='1'
                    onClick={this.ListToggle}>
                        满意
                        <span className={css.count}>
                            {this.state.positiveList.length}
                        </span>
                    </div>
                    <div className={`${css.block} ${css.nagative} ${this.state.currentIndex == 2 ? css.active : ''}`}
                    data-type='2'
                    onClick={this.ListToggle}>
                        不满意
                        <span className={css.count}>
                            {this.state.negativeList.length}
                        </span>
                    </div>
                </div>
                <div className={css.switch}>
                    <span className={css.text}>
                        只看有内容的评价
                    </span>
                </div>
            </div>
            <div className={css.ratingWrap}>
                <ul>
                    {this.renderLi()}
                </ul>
            </div>
            </div>
        )
    }
}




export default class CommentWrap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seller:data.seller.data,
            RatingList:data.ratingList.data
        }
    }
    
    render(){
        return (
            <div className={css.ratings}>
                <Scroll>
                    <div>
                        <Header seller={this.state.seller}></Header>
                        <div className={css.split}></div>
                        <RatingSelect RatingList={this.state.RatingList}></RatingSelect>
                    </div>
                </Scroll>
            </div>
        )
    }
}