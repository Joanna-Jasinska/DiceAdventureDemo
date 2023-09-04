export const getDungeon = (eid) => {
  const found = DUNGEONS.find((d) => d.eventId === eid);
  return found ? found : DUNGEONS[0];
};

// export const getBasicDungeons = () => {
//   // return [
//   //   "dungeon|2|2",
//   //   "dungeon|2|2",
//   //   "dungeon|2|2",
//   //   "dungeon|2|2",
//   //   "dungeon|2|2",
//   // ];
//   return [...DUNGEONS.slice(0, 5).map((d) => d.eventId)];
// };

export const DUNGEONS = [
  {
    name: "Black Mountain",
    eventName: "",
    id: "dungeon|1|",
    eventId: "dungeon|1|1",
    background: {
      icon: "🗻",
      eventIcon: "🌋",
      bgColor: "#413e20",
      flavorIcon: "🗻",
    },
    // items: [],
    bosses: [],
    enemies: [[""], [], []],
    // ally: {},
    // lvStarted: 1,
    // lvReached: 2,
    // gold: 100,
  },
  {
    name: "Wild Forests",
    eventName: "",
    id: "dungeon|2|",
    eventId: "dungeon|2|2",
    background: {
      icon: "🌲",
      eventIcon: "🌲",
      flavorIcon: "🌳",
      bgColor: "#3ea413",
    },
    bosses: ["ANIMALS|green|Elder Wolf"],
    enemies: [
      [
        "ELEMENTALS|green|Dryad",
        "ELEMENTALS|green|Dryad",
        // "ANIMALS|green|Giant Spider",
        "GOBLINS|green|Surprised Goblin",
        // "GOBLINS|green|Surprised Goblin",
        // "GOBLINS|green|Surprised Goblin",
      ],
      [
        "GOBLINS|green|Angry Goblin",
        "GOBLINS|green|Angry Goblin",
        "GOBLINS|green|Angry Goblin",
        // "ANIMALS|green|Elder Badger",
        // "ELEMENTALS|green|Treant",
      ],
      [
        "GOBLINS|green|Goblin Shaman",
        // "ANIMALS|green|Fat Boar",
        "ANIMALS|green|Old Wolf",
        "ANIMALS|green|Old Wolf",
      ],
    ],
  },
  {
    background: {
      icon: "🗾",
      eventIcon: "🌾",
      bgColor: "#ff6128",
      flavorIcon: "🌾",
    },
    name: "Lost Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|3|",
    eventId: "dungeon|3|3",
  },
  {
    background: {
      icon: "🌅",
      eventIcon: "🌴",
      bgColor: "#78ddff",
      flavorIcon: "🐟",
    },
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|4|",
    eventId: "dungeon|4|4",
  },
  {
    background: {
      icon: "🏰",
      eventIcon: "🏰",
      bgColor: "#a856ff",
      flavorIcon: "🕳️",
    },
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|5|",
    eventId: "dungeon|5|5",
  },

  {
    icon: "🌋",
    eventIcon: "",
    bgColor: "#413e20",
    name: "Black Mountains",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|",
    eventId: "dungeon|1|volcano",
  },
  {
    icon: "💥",
    eventIcon: "",
    bgColor: "#413e20",
    name: "Black Mountains",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|explosion",
  },
  {
    icon: "🏔",
    eventIcon: "",
    bgColor: "#413e20",
    name: "Black Mountains",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|hills",
  },
  {
    icon: "💨",
    eventIcon: "",
    bgColor: "#413e20",
    name: "Black Mountains",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|foggy",
  },
  {
    icon: "🕳️",
    eventIcon: "",
    bgColor: "#413e20",
    name: "Black Mountains",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|underground",
  },

  {
    icon: "🌲",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|pine",
  },
  {
    icon: "🌳",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|oak",
  },
  {
    icon: "🕸",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|webbed",
  },
  {
    icon: "🍄",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|mushroom",
  },
  {
    icon: "🌱",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|jungle",
  },
  {
    icon: "🌿",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|weed",
  },
  {
    icon: "☘️",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|luck",
  },
  {
    icon: "🐦",
    eventIcon: "",
    bgColor: "#3ea413",
    name: "Wild Forests",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|bird",
  },

  {
    icon: "🌾",
    eventIcon: "",
    bgColor: "#ff6128",
    name: "Forgotten Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|grass",
  },
  {
    icon: "🗾",
    eventIcon: "",
    bgColor: "#ff6128",
    name: "Forgotten Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|land",
  },
  {
    icon: "🌱",
    eventIcon: "",
    bgColor: "#ff6128",
    name: "Forgotten Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|jungle",
  },
  {
    icon: "🗿",
    eventIcon: "",
    bgColor: "#ff6128",
    name: "Forgotten Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|obelisk",
  },
  {
    icon: "🌻",
    eventIcon: "",
    bgColor: "#ff6128",
    name: "Forgotten Valley",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|sunflower",
  },

  {
    icon: "🌴",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|palmtree",
  },
  {
    icon: "🌊",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|tsunami",
  },
  {
    icon: "🌧️",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|rainy",
  },
  {
    icon: "⛆",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|pouring",
  },
  {
    icon: "☄️",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|comet",
  },
  {
    icon: "☀️",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|heat",
  },
  {
    icon: "🐳",
    eventIcon: "",
    bgColor: "#78ddff",
    name: "Remote Islands",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|whale",
  },

  {
    icon: "🏰",
    eventIcon: "",
    bgColor: "#a856ff",
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|castle",
  },
  {
    icon: "🦇",
    eventIcon: "",
    bgColor: "#a856ff",
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|bats",
  },
  {
    icon: "🏭",
    eventIcon: "",
    bgColor: "#a856ff",
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|factory",
  },
  {
    icon: "👻",
    eventIcon: "",
    bgColor: "#a856ff",
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|ghost",
  },
  {
    icon: "🗿",
    eventIcon: "",
    bgColor: "#a856ff",
    name: "Cursed Castle",
    eventName: "",
    enemies: [[], [], []],
    bosses: [],
    id: "dungeon|1|obelisk",
  },
];
