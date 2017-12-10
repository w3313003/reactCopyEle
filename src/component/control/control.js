import React from 'react'
import css from './control.styl'


export default class Control extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={css.cartcontrol}>
                    {this.props.food.counts > 0 && 
                    <svg className={css.decrease} aria-hidden="true"
                    onClick={() => this.props.decrease(this.props.food)}>
                        <use xlinkHref="#icon-weibiaoti-"></use>
                    </svg>}
                    {this.props.food.counts &&
                        <div className={css.count}>
                            {this.props.food.counts}
                        </div>
                    }
                    <svg className={css.add} aria-hidden="true"  
                    onClick={() => this.props.add(this.props.food)}>
                        <use xlinkHref="#icon-jiahao-24"></use>
                    </svg>
            </div>
        )
    }
}