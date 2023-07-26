import {Component} from "react";

import style from "./ArticleList.module.css";

class ArticleList extends Component {
    render() {
        const {articles} = this.props;

        return <div className={style.wrapper}>
            {
                articles.length === 0 ?
                    <h3>No articles found!</h3>
                    : articles.map(article => {
                    return <div key={article.objectID} className={style.article}>
                        <h3>Title: {article.title}</h3>
                        <p>
                            URL: <a href={article.url} target={"_blank"} rel="noreferrer">{article.url}</a>
                        </p>
                    </div>
                })
            }
        </div>
    }
}

export default ArticleList;
