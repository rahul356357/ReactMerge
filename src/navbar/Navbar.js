import React from 'react';
import { object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import corporateActionCreators from '../corporate/corporateActionCreator';
import mergeActionCreators from '../service/mergeActionCreator';

class Navbar extends React.Component {
  state = {
    searchText: '',
  }

  handleSearchText = (e) => {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { searchText } = this.state;
    const { viewController } = this.props.hotels;
    // console.log(this.props);
    if (viewController) {
      if (searchText.length > 0) { this.props.searchActions.getAgtHotels(searchText); }
      this.props.searchActions.getHotels(searchText);
    } else {
      this.props.corporateActions.getCorporate(searchText);
      this.props.corporateActions.getCorporateagt(searchText);
    }
  }

  handleView = () => {
    this.props.searchActions.viewController();
  }

  render() {
    const { searchText } = this.state;
    const { viewController } = this.props.hotels;
    return (
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">AGT Merging Tool</a>
        <span>
          {
          viewController ?
            <h5 className="text-success" > Hotel  Search </h5> :
            <h5 className="text-success" >  Corporates  Search    </h5>
        }
        </span>
        <button className="btn btn-outline-primary" onClick={this.handleView}>
         Change View
        </button>
        <form className="form-inline" onSubmit={this.handleSearch}>
          <input
            className="form-control mr-sm-2"
            value={searchText}
            onChange={this.handleSearchText}
            type="search"
            placeholder={`Search${viewController ? ' Hotel ' : ' Corporate'}...`}
            aria-label="Search"
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit" disabled={!searchText.length > 0}>Search</button>
        </form>
      </nav>

    );
  }
}
Navbar.propTypes = {
  searchActions: object,
  corporateActions: object,
  hotels: object,
};
const mapStateToProps = (state) => ({
  hotels: state.hotel,
});
const mapDispatchToProps = (dispatch) => ({
  searchActions: bindActionCreators(mergeActionCreators, dispatch),
  corporateActions: bindActionCreators(corporateActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
