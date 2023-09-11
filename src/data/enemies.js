import { PMutatedRat } from "./enemies/animals/PMutatedRat";
import { PCursedKing } from "./enemies/human/boss/PCursedKing";
import { PWitch } from "./enemies/human/boss/PWitch";
import { PSkeletonHead } from "./enemies/undead/PSkeletonHead";
import { PSkeletonPunk } from "./enemies/undead/PSkeletonPunk";
import { PSkeletonSoldier } from "./enemies/undead/PSkeletonSoldier";
import { PVampire } from "./enemies/undead/boss/PVampire";
import { PCursedSoldier } from "./enemies/human/PCursedSoldier";
import { PGhost } from "./enemies/undead/PGhost";
import { PBats } from "./enemies/animals/PBats";
import { PGhostWidow } from "./enemies/undead/PGhostWidow";
import { PDemon } from "./enemies/purgatory/PDemon";
import { PCOrb } from "./enemies/animated/PCOrb";

const template = {};

const getObjFromCollection = (id, collection) => {
  const found = collection.find((i) => i.id === id);
  return found ? found : collection.find((i) => i.id === "default");
};
// const getCollection = (
//   collectionID,
//   defaultCollectionID = "GOBLINS",
//   stop = false
// ) => {
//   if (stop) return GOBLINS;
//   switch (collectionID) {
//     case "ANIMALS":
//       return ANIMALS;
//     case "ANIMAL_BOSSES":
//       return ANIMAL_BOSSES;
//     case "ELEMENTALS":
//       return ELEMENTALS;
//     case "GOBLINS":
//       return GOBLINS;
//     // case '': return ;
//     default:
//       return getCollection(defaultCollectionID, "GOBLINS", true);
//   }
// };
export const getEnemy = (id) => {
  // console.log(`getObjFromCollection(id=[${id}], ENEMIES): `);
  // console.table(getObjFromCollection(id, ENEMIES));
  // const found = getObjFromCollection(id, ENEMIES).enemy;
  const found = ENEMIES[id];
  return found ? { ...template, ...found } : { ...template, ...ENEMIES[0] };
};
// export const getEnemy = (id, defaultCollectionID) => {
//   console.log(`getObjFromCollection(id=[${id}], ENEMIES): `);
//   console.table(getObjFromCollection(id, ENEMIES));
//   const collectionID = getObjFromCollection(id, ENEMIES).collection;
//   const chosenCollection = getCollection(collectionID, defaultCollectionID);
//   const found = getObjFromCollection(id, chosenCollection);
//   return found
//     ? { ...template, ...found }
//     : { ...template, ...chosenCollection[0] };
// };

const ENEMIES = {
  0: PMutatedRat,
  // "PURGATORY|purple|Demon": PDemon,
  "ANIMALS|purple|Mutated Rat": PMutatedRat,
  "ANIMALS|purple|Bats": PBats,
  "UNDEAD|purple|Skeleton Head": PSkeletonHead,
  // "UNDEAD|purple|Vampire": PVampire,
  "UNDEAD|purple|Ghost": PGhost,
  "UNDEAD|purple|Ghost Widow": PGhostWidow,
  // "HUMAN|purple|Witch": PWitch,
  "HUMAN|purple|Cursed King": PCursedKing,
  "HUMAN|purple|Cursed Soldier": PCursedSoldier,
  "ANIMATED|purple|Cursed Orb": PCOrb,
  // "UNDEAD|purple|Skeleton Punk": PSkeletonPunk,
  // "UNDEAD|purple|Skeleton Soldier": PSkeletonSoldier,

  // { id: "ELEMENTALS|green|Mysterious Enemy", collection: "ELEMENTALS" },
  // { id: "ANIMALS|green|Elder Wolf", collection: "ANIMAL_BOSSES" },
  // { id: "ANIMALS|green|Old Wolf", collection: "ANIMALS" },
  // { id: "ANIMALS|green|Vyvernling", collection: "ANIMALS" },
  // { id: "ANIMALS|green|Elder Badger", collection: "ANIMALS" },
  // { id: "ANIMALS|green|Giant Spider", collection: "ANIMALS" },
  // { id: "ANIMALS|green|Fat Boar", collection: "ANIMALS" },
  // { id: "ELEMENTALS|green|Dryad", collection: "ELEMENTALS" },
  // { id: "GOBLINS|green|Surprised Goblin", collection: "GOBLINS" },
  // { id: "GOBLINS|green|Angry Goblin", collection: "GOBLINS" },
  // { id: "GOBLINS|green|Goblin Shaman", collection: "GOBLINS" },
  // { id: "ELEMENTALS|green|Treant", collection: "ELEMENTALS" },
};
