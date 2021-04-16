import React from "react";
import ReactDOM from "react-dom";
import PaginationComponent from "react-reactstrap-pagination";


class PageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(selectedPage) {
    console.log("selected", selectedPage);
    this.setState({ selectedPage: selectedPage });
  }

  render() {
    return (
      <div className="container-fluid mt-2">
        
        <PaginationComponent
          totalItems={50}
          pageSize={3}
          onSelect={this.handleSelected}
        />
        <h3>Reacstrap Pagination Component</h3>
        <hr />
        <h5>Selected page: {this.state.selectedPage}</h5>
        <hr />
        <h5>Default maxPaginationNumbers (5)</h5>
        {/* <h5>Specific maxPaginationNumbers (9) defaultActivePage (10)</h5>
        <PaginationComponent
          totalItems={50}
          pageSize={3}
          onSelect={this.handleSelected}
          maxPaginationNumbers={9}
          defaultActivePage={10}
        />

        <h5>Size lg</h5>
        <PaginationComponent
          size="lg"
          totalItems={30}
          pageSize={5}
          onSelect={this.handleSelected}
        />

        <h5>Size sm</h5>
        <PaginationComponent
          size="sm"
          totalItems={30}
          pageSize={5}
          onSelect={this.handleSelected}
        /> */}
      </div>
    );
  }
}

export default PageComponent;