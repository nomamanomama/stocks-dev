import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
// import { Input, FormBtn } from "../Form";
import "./Search.css";

class Search extends Component {
  state = {
    topic:"",
    startyear: "",
    endyear: ""
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Search</h1>
        </Jumbotron>

        <form>
          <div className="form-group row">
            <label htmlFor="inputTopic" className="col-sm-2 col-form-label">Topic</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputTopic" placeholder="Topic"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputStartYear" className="col-sm-2 col-form-label">Start Year</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="inputStartYear" placeholder="Start Year"/>
              </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEndYear" className="col-sm-2 col-form-label">End Year</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEndYear" placeholder="End Year"/>
            </div>
          </div>
          <div className="form-group row">
              <div className="col-sm-10">
                <button 
                id="searchArticles"
                type="submit" 
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
                >
                  Search
                </button>
              </div>
          </div>
        </form>


      </div>
    );
  }
}

export default Search;