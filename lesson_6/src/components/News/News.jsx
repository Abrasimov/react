import {Component} from "react";
import axios from "axios";

import ArticleList from "../ArticleList";
import SearchBar from "../SearchBar";
import Spinner from "../Spinner";
import Error from "../Error";

import api from "../../services/api";

class News extends Component {
    state = {
        isLoading: false,
        isError: false,
        error: null,
        data: [],
        searchQuery: "react",
        articlesAmount: 0,
    }

    cancelTokenSource = axios.CancelToken.source();

    async fetchData() {
        this.setState({ isLoading: true });

        try {
            const articles = await api.fetchArticlesWithQuery(this.state.searchQuery);

            this.setState({ data: articles.filter(article => !!article.title) });
        } catch (error) {
            this.setState({ isError: true, error });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    // async componentDidMount() {
    //     await this.fetchData();
    // }

    componentWillUnmount() {
        this.cancelTokenSource.cancel('Component is being unmounted');
    }

    debouncedTimeout = null;

    async componentDidUpdate(_, prevState) {
        if (this.state.searchQuery !== prevState.searchQuery) {
            clearTimeout(this.debouncedTimeout);

            this.debouncedTimeout = setTimeout(async () => {
                await this.fetchData();
            }, 500);
        }

        if (this.state.data.length !== prevState.articlesAmount) {
            this.setState({articlesAmount: this.state.data.length})
        }
    }

    handleSetSearchQuery = event => {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const { data, isLoading, isError, error, searchQuery, articlesAmount } = this.state;

        if (isError) {
            return <Error error={error}/>;
        }

        return (
            <div>
                <h3>Articles amount: articlesAmount</h3>
                <SearchBar
                    handleSetSearchQuery={this.handleSetSearchQuery}
                    searchQuery={searchQuery}
                />
                {isLoading ? <Spinner/> : <ArticleList articles={data} />}
            </div>
        );
    }
}

export default News;
