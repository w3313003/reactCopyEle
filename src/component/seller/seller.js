import React from 'react'
import Scroll from 'component/common/scroll'
import Star from 'component/common/star'
import seller from './seller.styl'
import Bscroll from 'better-scroll'

const data = require('../../util/data')

export default class Seller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            seller : data.seller.data
        }
        console.log(this.state.seller)
    }
    componentDidMount(){
        setTimeout(() => {
            new Bscroll(this.refs.scrollWrap,{
                scrollX:true
            })
        },20)
    }
    render(){
        return (
            <div className={seller.seller}>
                <Scroll>
                    <div>
                        <div className={seller.overview}>
                            <h1 className={seller.title}>
                                    {this.state.seller.name}
                            </h1>
                            <div className={seller.desc}>
                                <Star s36={true} rating={this.state.seller.score}>
            
                                </Star>
                                <span className={seller.text}>
                                    (24)
                                </span>
                                <span className={seller.text}>
                                    月售{this.state.seller.sellCount}件
                                </span>
                            </div>
                            <ul className={seller.remark}>
                                <li className={seller.block}>
                                    <h2>
                                        起送价
                                    </h2>
                                    <div className={seller.content}>
                                        <span className={seller.stress}>
                                                20
                                        </span>
                                        元
                                    </div>
                                </li>
                                <li className={seller.block}>
                                    <h2>
                                        商家配送
                                    </h2>
                                    <div className={seller.content}>
                                        <span className={seller.stress}>
                                                {this.state.seller.deliveryPrice}
                                        </span>
                                        元
                                    </div>
                                </li>
                                <li className={seller.block}>
                                    <h2>
                                    平均配送时间
                                    </h2>
                                    <div className={seller.content}>
                                        <span className={seller.stress}>
                                                {this.state.seller.deliveryTime}
                                        </span>
                                        分钟
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={seller.split}>
                        </div>
                        <div className={seller.bulletin}>
                            <h1 className={seller.title}>
                                活动与公告   
                            </h1>
                            <div className={seller.contentWrap}>
                                <p className={seller.content}>
                                    {this.state.seller.bulletin}
                                </p>
                            </div>
                            <ul className={seller.supports}>
                                {this.state.seller.supports.map(v => {
                                    return (
                                        <li key={v.type} className={seller.supportItem}>
                                            <span className={`icons
                                                ${v.type === 0 ? 'decrease1' : ''}
                                                ${v.type === 1 ? 'discount1' : ''}
                                                ${v.type === 2 ? 'special1' : ''}
                                                ${v.type === 3 ? 'invoice1' : ''}
                                                ${v.type === 4 ? 'guarantee1' : ''}
                                            `}>
                                            
                                            </span>
                                            <span className={seller.text}>
                                                {v.description}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={seller.split}>
                        </div>
                        <div className={seller.pics}>
                            <h1 className={seller.title}>
                                商家实景
                            </h1>
                            <div className={seller.picWrapper} ref='scrollWrap'>
                                <ul className={seller.picList}>
                                {
                                    this.state.seller.pics.map((v,i) => {
                                        return (
                                            <li className={seller.picitem} key={i}>
                                                <img src={v} width='120' height='90' alt='pic'/>
                                            </li>
                                        )
                                    })
                                }
                                    
                                </ul>
                            </div>
                        </div>
                        <div className={seller.split}>
                        </div>
                        <div className={seller.info}>
                            <h1 className={seller.title}>
                                商家信息
                            </h1>
                            <ul>
                                {
                                    this.state.seller.infos.map((v,i) => {
                                        return (
                                            <li className={seller.infoItem} key={i}>
                                                {v}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </Scroll>
            </div>
        )
    }
}