import { ANIMALS } from "./enemies/animals";
import { ELEMENTALS } from "./enemies/elementals";
import { GOBLINS } from "./enemies/goblins";

const getObjFromCollection = (id, collection) => {
  const found = collection.find((i) => i.id === id);
  return found ? found : collection.find((i) => i.id === "default");
};
const getCollection = (
  collectionID,
  defaultCollectionID = "GOBLINS",
  stop = false
) => {
  if (stop) return GOBLINS;
  switch (collectionID) {
    case "ANIMALS":
      return ANIMALS;
    case "ELEMENTALS":
      return ELEMENTALS;
    case "GOBLINS":
      return GOBLINS;
    // case '': return ;
    default:
      return getCollection(defaultCollectionID, "GOBLINS", true);
  }
};
export const getEnemy = (id, defaultCollectionID) => {
  console.log(`getObjFromCollection(id=[${id}], ENEMIES): `);
  console.table(getObjFromCollection(id, ENEMIES));
  const collectionID = getObjFromCollection(id, ENEMIES).collection;
  const chosenCollection = getCollection(collectionID, defaultCollectionID);
  const found = getObjFromCollection(id, chosenCollection);
  return found ? found : chosenCollection[0];
};

const ENEMIES = [
  // { id: "", collection: "" },
  // { id: "", collection: "" },
  { id: "ELEMENTALS|green|Mysterious Enemy", collection: "ELEMENTALS" },
  { id: "ANIMALS|green|Old Wolf", collection: "ANIMALS" },
  { id: "ANIMALS|green|Vyvernling", collection: "ANIMALS" },
  { id: "ANIMALS|green|Elder Badger", collection: "ANIMALS" },
  { id: "ANIMALS|green|Giant Spider", collection: "ANIMALS" },
  { id: "ANIMALS|green|Fat Boar", collection: "ANIMALS" },
  { id: "ELEMENTALS|green|Dryad", collection: "ELEMENTALS" },
  { id: "GOBLINS|green|Surprised Goblin", collection: "GOBLINS" },
  { id: "GOBLINS|green|Angry Goblin", collection: "GOBLINS" },
  { id: "GOBLINS|green|Goblin Shaman", collection: "GOBLINS" },
  { id: "ELEMENTALS|green|Treant", collection: "ELEMENTALS" },
];
