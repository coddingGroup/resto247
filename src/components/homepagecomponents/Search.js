import {Component} from 'react';
import '../../css/Some.css'
class Search extends Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.cleanSearch = this.cleanSearch.bind(this);
    }
  
    handleChange(event) {
      this.props.setText(event.target.value);
      this.props.searchText();
    }

    cleanSearch(event){
        this.props.searchText('');
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
<div className="d-flex justify-content-center">
        <div className={this.props.searchbar}>
          <input className="search_input" type="text" name=""
          value={this.props.text} onChange={this.handleChange} onBlur={this.cleanSearch} onFocus={this.handleChange}
          placeholder="Search..."/>
          <a href="#" className="search_icon"><i className="fa fa-search"></i></a>
        </div>
      </div>
        </form>
      );
    }
  }

  export default Search;