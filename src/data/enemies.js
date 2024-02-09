import { PMutatedRat } from "./enemies/animals/PMutatedRat";
import { PCursedKing } from "./enemies/human_boss/PCursedKing";
import { PSkeletonHead } from "./enemies/undead/PSkeletonHead";
import { PCursedSoldier } from "./enemies/human/PCursedSoldier";
import { PGhost } from "./enemies/undead/PGhost";
import { PBats } from "./enemies/animals/PBats";
import { PGhostWidow } from "./enemies/undead/PGhostWidow";
import { PCOrb } from "./enemies/animated_boss/PCOrb";
import { GKrasnal } from "./enemies/folk/GKrasnal";
import { GTreant } from "./enemies/elementals_boss/GTreant";
import { BPebbles } from "./enemies/barricade/BPebbles";
import { BSGolem } from "./enemies/elementals_boss/BSGolem";
import { AToadK } from "./enemies/animals_boss/AToadK";
import { ABFish } from "./enemies/animals/ABFish";
import { OFrog } from "./enemies/animals/OFrog";
import { OSlime } from "./enemies/elementals_boss/OSlime";
import { OSeedling } from "./enemies/elementals/OSeedling";
import { ODoggie } from "./enemies/animals/ODoggie";
import { OLantern } from "./enemies/barricade_boss/OLantern";
import { OOBushes } from "./enemies/barricade/OOBushes";
import { GPSpider } from "./enemies/animals/GPSpider";
import { AOFrogfolk } from "./enemies/folk/AOFrogfolk";
import { PCMouse } from "./enemies/animals/PCMouse";
import { BWHawk } from "./enemies/animals/BWHawk";
import { ACFish } from "./enemies/animals/ACFish";
import { PMimic } from "./enemies/animated/PMimic";

const template = {};

export const getEnemy = (id) => {
  const found = ENEMIES[id];
  return found ? { ...template, ...found } : { ...template, ...ENEMIES[0] };
};

const ENEMIES = {
  0: PMutatedRat,
  "ANIMATED|purple|Mimic": PMimic,
  "ANIMALS|aqua|Count Fish": ACFish,
  "ANIMALS|black|Wounded Hawk": BWHawk,
  "ANIMALS|purple|Cheese Mouse": PCMouse,
  "ANIMALS|aqua|Old Frogfolk": AOFrogfolk,
  "ANIMALS|green|Poisonous Spider": GPSpider,
  "BARRICADE|orange|Overgrown Bushes": OOBushes,
  "ELEMENTALS|orange|Lantern": OLantern,
  "ANIMALS|orange|Doggie": ODoggie,
  "ELEMENTAL|orange|Seedling": OSeedling,
  "ELEMENTALS|orange|Slime": OSlime,
  "ANIMALS|orange|Frog": OFrog,
  "ANIMALS|aqua|Blue Fish": ABFish,
  "ANIMALS|aqua|Toad King": AToadK,
  "ELEMENTALS|black|Golem": BSGolem,
  "BARRICADE|black|Pebbles": BPebbles,
  "ELEMENTALS|green|Treant": GTreant,
  "FOLK|green|Krasnal": GKrasnal,
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
