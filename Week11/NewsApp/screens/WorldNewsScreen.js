import List from "../components/List";
import { NEWSDATA } from "../data/dummy-data";

function WorldNewsScreen() {
  const type = "World";
  const displayedNews = NEWSDATA.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

export default WorldNewsScreen;
