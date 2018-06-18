import React, {Component} from "react";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import "./Save.css";

class Save extends Component {
  state = {
    articles: []
  };

  render() {
    return(
      <div>
        <Jumbotron>
          <h1>Saved Articles</h1>
        </Jumbotron>
        {this.state.articles.length ? (
          <List>
            {this.state.articles.map(article => (
              <ListItem key={article._id}>
                <Link to={"/articles/" + article._id}>
                  <strong>
                    {article.title}
                  </strong>
                </Link>
                <DeleteBtn 
                  id={"delete" + article._id}
                  onClick={() => this.deleteArticle(article._id)} 
                />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    );
  }
}

export default Save;