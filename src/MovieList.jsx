import * as React from 'react';
import * as Styles from './style';

export default class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            // movieList: ["Mean Girls", "High School Musical", 'Ex Machina', 'The Grey']
        };
    }


    render(){
        return (
            <Styles.MovieListContainer className="list-group">
                {
                    this.props.movieList.map((item, index) => {
                        return (<Styles.MovieListItem key={index} className={'list-group-item'} >{item}</Styles.MovieListItem>)
                    })
                }
            </Styles.MovieListContainer>
        )
    }

}
