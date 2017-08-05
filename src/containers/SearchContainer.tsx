import * as React from "react";
import SearchBar from "./../components/SearchBar";

interface State {
    searchTerm: string;
}

interface Props {}

export default class SearchContainer extends React.Component<Props, State> {
    state = {
        searchTerm: "",
    };

    private handleChange = (searchTerm: string): void => {
        this.setState({ searchTerm });
    };
    public render() {
        return <SearchBar handleChange={this.handleChange} value={this.state.searchTerm} />;
    }
}
