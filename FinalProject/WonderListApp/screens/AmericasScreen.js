import Place from "../components/Place";
import { PLACES } from "../data/dummy_data";

function AmericasScreen() {
    const type = "Americas";
    const displayedPlaces = PLACES.filter((placesItem) => {
        return placesItem.type === type;
    });

    return <Place items={displayedPlaces} />
}

export default AmericasScreen;