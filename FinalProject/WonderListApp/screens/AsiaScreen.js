import Place from "../components/Place";
import { PLACES } from "../data/dummy_data";

function AsiaScreen() {
    const type = "Asia";
    const displayedPlaces = PLACES.filter((placesItem) => {
        return placesItem.type === type;
    });

    return <Place items={displayedPlaces} />
}

export default AsiaScreen;