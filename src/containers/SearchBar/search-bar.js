import React, {
  Component
} from 'react';
import classes from './search-bar.css';
import axios from '../../axios-orders'
import {
  connect
} from 'react-redux';
import {
  fetchBooks
} from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

class SearchBar extends Component {
    state = {
        placeholder: 'Wpisz szukany produkt...',
        emptyInput: false
    }
  changeHandler = (e) => {
    if (e.target.value.length < 4) {
        this.setState({emptyInput: true})
       return
    }
    this.setState({emptyInput: false})
    this.props.fetchBooks(e.target.value)
  }
  render() {
    return (
      <div className={classes.Container}>
                <input
                    className={classes.Input}
                    type="text"
                    onChange={(e) => this.changeHandler(e)}
                    onFocus = {()=>{this.setState({placeholder:''})}}
                    onBlur = {()=>{this.setState({placeholder:'Wpisz szukany produkt...'})}}
                    placeholder = {this.state.placeholder}
                />
                <div className="container text-center text-muted" style={{display: this.state.emptyInput ? 'block' : 'none' }}>Musisz podać szukaną frazę!</div>
            </div>
    );
  }

}

export default connect(null, {
  fetchBooks
})(withErrorHandler(SearchBar, axios));
