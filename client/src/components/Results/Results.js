import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import SaveBtn from "../SaveBtn";
import "./Results.css";

class Results extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Results</h1>
        </Jumbotron>
        {this.state.articles.length ? (
          <List>
            {this.state.articles.map(article => (
              <ListItem key={article._id}>
                <Link to={article.web_url}>
                  <strong>
                    {article.headline.main}
                  </strong>
                </Link>
                <p className="articleSnippet">
                  {article.snippet}
                </p>
                <p 
                  className="articleInfo">{article.pub_date} - {article.byline.original}
                </p>
                <SaveBtn 
                  id={"save" + article._id}
                  onClick={() => this.saveArticle(article._id)} 
                  />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
}

export default Results;
