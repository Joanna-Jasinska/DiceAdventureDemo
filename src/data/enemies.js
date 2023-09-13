import { PMutatedRat } from "./enemies/animals/PMutatedRat";
import { PCursedKing } from "./enemies/human/boss/PCursedKing";
import { PSkeletonHead } from "./enemies/undead/PSkeletonHead";
import { PCursedSoldier } from "./enemies/human/PCursedSoldier";
import { PGhost } from "./enemies/undead/PGhost";
import { PBats } from "./enemies/animals/PBats";
import { PGhostWidow } from "./enemies/undead/PGhostWidow";
import { PCOrb } from "./enemies/animated/PCOrb";

const template = {};

export const getEnemy = (id) => {
  const found = ENEMIES[id];
  return found ? { ...template, ...found } : { ...template, ...ENEMIES[0] };
};

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
