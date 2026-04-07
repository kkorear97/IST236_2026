import List from "../components/List";
import { NEWSDATA } from "../data/dummy-data";

function TechNewsScreen() {
  const type = "Tech";
  const displayedNews = NEWSDATA.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

export default TechNewsScreen;