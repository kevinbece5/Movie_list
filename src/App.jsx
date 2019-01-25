import * as React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import { Container } from './style';
import Search from './Search';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movieList: ["Mean Girls", "High School Musical", 'Ex Machina', 'The Grey']
        };
    }

    handleSearch = (searchTerm) =>{
        console.log('search term', searchTerm);
        const searchTermArr = searchTerm.split(' ');
        let movieList = this.state.movieList.map((movie) => {
            console.log(movie.split(' '));
        })
        // this.setState({

        // })
    }
    
    render(){
     return(
        <Container >
            <Header/>
            <Search handleSearch={this.handleSearch} />
            <MovieList movieList={this.state.movieList} />
        </Container>
     )
    }
}