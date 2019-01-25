import * as React from 'react';
import * as Styles from './style';

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputVal: '',
        };
    }

    onInputChange = (e) =>{
        this.setState({
            inputVal: e.target.value
        })
    }

    onEnter =(e) => {
        if(e.key === 'Enter'){
            this.onSubmit()
            // console.log('enter', e.target.value)
        }
    }

    onSubmit = () => {
        //handle search 
        this.props.handleSearch(this.state.inputVal)
    }

    render(){
        return(
            <Styles.SearchContainer className={'input-group'} >
            <Styles.SearchInput onKeyPress={this.onEnter} onKeyUp={this.onInputChange} type="text" className="form-control" placeholder="Search" />
            <Styles.SearchButton onClick={this.onSubmit} type="button" className="btn btn-light">Go!</Styles.SearchButton>
            </Styles.SearchContainer>
        )
    }
}