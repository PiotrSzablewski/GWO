import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import axios from '../../axios-orders';
import _ from 'lodash';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import ListItem from '../../components/ListItem/ListItem';
import Button from '../../components/UI/Button/Button';
import Warning from '../../components/UI/Warning/Warning';
class BookList extends Component {
  state = {
    page: 0,
    noMore: false
  }
  listRender = () => {
    let list = this.props.books.isFetching ? <Spinner /> : null;
    let pageList = [];
    if (!this.props.books.isFetching) {
      pageList = _.chunk(this.props.books.books, 6);
        console.log(pageList);
      let listShow = pageList[this.state.page];
      if (listShow && listShow.length !==0) {
        list = listShow.map((book, index) => (
          <ListItem key={book.men + index} book={book} />
        ))
    }


    }
    return list
  }
  pageUp = () => {
    if (this.props.books.pages - 1 === this.state.page) {
      this.setState({
        noMore: true
      })
      return
    }
    this.setState({
      page: this.state.page + 1
    })
  }
  pageDown = () => {
    if (this.state.page <= 0) {
      return
    }
    this.setState({
      page: this.state.page - 1,
      noMore: false
    })
    console.log(this.state.page)
  }
  render() {

    return (
      <div className="container">
                <div className="row">
                    {this.props.books.isEmpty ? <Warning/> : this.listRender()}

                </div>
                {this.state.noMore ? <p className="text-muted text-center">Nie ma więcej wyników</p>:null}
                <div className="container" style={{textAlign:'center'}}>
                    <Button
                        disabled={this.state.page === 0}
                        btnType='Danger' clicked={this.pageDown}>Prev
                    </Button>
                    <Button
                        btnType='Success'
                        clicked={this.pageUp}>Next
                    </Button>
                </div>
            </div>
    );
  }

}
const mapStateToProps = state => {
  return {
    books: state.books,
    isFetching: state.isFetching,
  }
}
export default connect(mapStateToProps)(withErrorHandler(BookList, axios));
