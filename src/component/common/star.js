import React from 'react'
import star from './common.styl'

class Star extends React.Component{
    constructor(props){
        super(props);
    }
    renderStar(score){
        let result = [],
            integer = Math.floor(score);
        let decimal = score % 1;
        
            for (let i = 0; i < integer; i++) {
                result.push('full');
            };
            if (decimal >= 0.5) {                      
                result.push('half');
            };
            while(result.length < 5){
                result.push('empty')
            };
        let spans = result.map((v,i) => {
            return (
                <span className={`${star.starItem} ${v}`} key={i}>
                    
                </span>
            )
        });
        return spans;
    } 
    render(){
        return (
                <div className={`
                                 ${this.props.s36 && star.star36} 
                                 ${this.props.s48 && star.star48}
                                 ${this.props.s24 && star.star24}
                                `
                                }>
                    {this.renderStar(this.props.rating)}
                </div>
        )
    }
}
export default Star