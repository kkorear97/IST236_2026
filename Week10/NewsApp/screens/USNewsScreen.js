import List from "../components/List";
import { NEWSDATA } from "../data/dummy-data";

function USNewsScreen() {
  const type = "US";
  const displayedNews = NEWSDATA.filter((newsItem) => {
    return newsItem.type === type;
  });

  return <List items={displayedNews} />;
}

export default USNewsScreen;
