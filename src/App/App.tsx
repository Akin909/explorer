import * as React from "react";
import { Title, Wrapper } from "./styles";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./../reset";
import Search from "./../containers/SearchContainer";
import reducers from "./../reducers/";

const store = createStore(reducers);

interface State {}
interface Props {}

class App extends React.Component<Props, State> {
    render() {
        return (
            <Provider store={store}>
                <Wrapper>
                    <Title>TypeTris</Title>
                    <Search />
                </Wrapper>
            </Provider>
        );
    }
}

export default App;
