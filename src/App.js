import React from "react";
import Data from './news_feed.json';
import NewsList from "./components/NewsList";
import TopBar from "./components/TopBar";
import ScrollToTopBtn from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Header, Segment, Icon } from "semantic-ui-react";

class App extends React.Component {
  state = {
    items: Data.items
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <TopBar />
        <Segment basic padded>
          {<NewsList items={items} />}
        </Segment>
        <Footer />
        <ScrollToTopBtn />
      </div>
    );
  }
}

export default App;