import { Title } from "components/Title/Title";
import { HeaderNavBtn } from "components/HeaderNavBtn/HeaderNavBtn";
import { EnemyPiece } from "components/EnemyBody/EnemyPiece/EnemyPiece";
import { DiceIcon } from "components/DiceIcon/DiceIcon";
import { ContainerHorisontal } from "components/ContainerHorisontal/ContainerHorisontal";
import { getDiceTypeIcon } from "data/icons";
import { PieceIcon } from "components/EnemyBody/EnemyPiece/PieceIcon/PieceIcon";
import { Piece } from "objects/Piece";
import css from "./Page.module.css";
import { Item } from "components/Item/Item";
import { QuestSquare } from "components/QuestList/QuestSquare/QuestSquare";

export const TutorialPage = () => {
  const exampleEPiece1 = {
    // priority: true, //priority, extra, keep, once
    bodyPartIcon: "🐭",
    bodyPartTypes: ["head", "body"],
    id: "piece|ANIMALS|purple|Mutated Rat|head|1",
    // weakness: ["physical"],
    damages: {
      damageToPlayer: 1,
      damageToEnemy: 1,
      // effectsToPlayer: false,// effectsToEnemy: false,
    },
    allows: {
      // types: ["any"],
      // minValue: 4,
      // maxValue: 4,
      // exactValues: ["even"],
      // maxDices: false,
    },
    requires: {
      // exactValues: false,
      // minDices: 1,
      minSum: 4,
    },
    grow: {
      // duplicateAtLv: 32,
      lvlsToRaiseMinSum: 1,
      // lvlsToRaiseMinDices: 12,
      // lvlsToRaiseExactValues: 17,
      // lvlsToRaiseMinValue: 35,
    },
  };
  const exampleEPiece2 = {
    // priority: true, //priority, extra, keep, once
    bodyPartIcon: "🐭",
    bodyPartTypes: ["head", "body"],
    id: "piece|ANIMALS|purple|Mutated Rat|head|1",
    weakness: ["physical"],
    damages: {
      // damageToPlayer: 1,
      // damageToEnemy: 1,
    },
    allows: {
      // minValue: 4,
    },
    requires: {
      minDices: 1,
      minSum: 7,
    },
  };
  const redRequirements = {
    requires: {
      // exactValues: false,
      minDices: 1,
      minSum: 4,
    },
    allows: {},
  };
  const greenRequirements = {
    allows: {
      minValue: 2,
      maxValue: 6,
      maxDices: 4,
    },
    requires: {},
  };
  const exapleItem = {
    itemId: "Rusty Sword|SWORD SLASH|",
    name: "Item name",
    lv: "(Lv)",
    alt: "🗡️",
    skill: {
      name: "SKILL NAME",
      txt: "What the skill does",
      id: "Rusty Sword|SWORD SLASH|",
      displayCost: [
        { value: "(1)", type: "slashed" },
        { value: "(1)", type: "strength" },
      ],
    },
    statsTxT: "~ +1 per lv",
    dices: [
      {
        item: "dice",
        type: "heat",
        diceMax: "(2)",
        // diceMax: 3,
        id: "Rusty Sword|SWORD SLASH|||last|dice|0",
      },
      {
        item: "dice",
        type: "arcane",
        diceMax: "(2)",
        // diceMax: 3,
        id: "Rusty Sword|SWORD SLASH|||last|dice|0",
      },
      {
        item: "dice",
        type: "slashed",
        diceMax: "(2)",
        // diceMax: 3,
        id: "Rusty Sword|SWORD SLASH|||last|dice|0",
      },
    ],
    nondices: [],
    // selected: true,
    index: 0,
  };
  const exampleQuest = {
    item: {
      name: "Prize Item",
      id: "Bunny Familiar|BUNNY MAGIC|",
      alt: "🐇",
      skill: {
        name: "SKILL NAME",
        txt: "Prize Skill",
        id: "Bunny Familiar|BUNNY MAGIC|",
        displayCost: [{ value: "", type: "rainbow" }],
      },
      statsTxT: "~ +1/4 per lv",
      stats: [
        { item: "stats", type: "life", maxHp: 2 },
        {
          item: "dice",
          diceMax: 1,
          // value: 2,
          type: "rainbow",
          existSinceLv: 1,
          duplicateAtLv: 6,
          // lvlsToRaiseValue: 4,
          lvlsToRaiseDiceMax: 1,
        },
      ],
    },
    locked: "Quest\nRequirements",
    cost: 150,
    ally: "wizard",
  };
  // const error = useSelector(selectGameError);
  return (
    <main className={`${css.main} ${css.center}`}>
      {/* {error ? <span className={css.error}>{error}</span> : ""} */}
      <HeaderNavBtn
        to="/"
        display="🏃 Homepage"
        // completed={true}
        // disabled={true}
        // warning={true}
        recommended={true}
      />
      <Title title="Dice Adventure Demo" />
      <h4 id="story">Introduction</h4>
      <ContainerHorisontal>
        Rajavi believe that salvation will be found at 🔚 the end of world.
      </ContainerHorisontal>
      <ContainerHorisontal>
        So their home is a caravan constantly moving towards neverchanging
        direction.
      </ContainerHorisontal>
      <ContainerHorisontal>
        To live and travel they pull resources from nearby locations by trade,
        performing services and sometimes even using force when they have to.
      </ContainerHorisontal>
      <ContainerHorisontal>
        You are one of the few Rajavi elite Pathforcers.
      </ContainerHorisontal>
      <ContainerHorisontal>
        Your task is trading, bargaining, performing, fighting.. - doing
        everything to make sure nothing stands on the way of Rajavi caravan on
        their way to salvation.
      </ContainerHorisontal>
      So.. Let's go to the "end" 😆!
      <h4 id="notice">Notice</h4>
      <ContainerHorisontal>
        Game is stored on your local browser data of THIS specific device.{" "}
        <br />
        Cannot be transfered to a different device. <br />
        You can close or refresh browser tab as you see fit and Your game
        progress will be saved exactly where you left it.
      </ContainerHorisontal>
      <h4 id="tutorial">Tutorial</h4>
      <ContainerHorisontal>
        Path
        <br /> There are 3 Paths to explore.
        <br />
        To progress the game on selected Path choose{" "}
        {`Go${getDiceTypeIcon("playerAttack")}`}.
        <br />
        Whenever you come back from a Path - you bring back gold and upgrades
        you earned.
        <br />
        To progress a path to next Level and gain an upgrade you need to win all
        available adventures there.
        <br />
        Once you progress path to next level caravan will move on. Last path
        will be gone and a new path will open.
        <HeaderNavBtn
          to="/dungeon"
          display={`Go${getDiceTypeIcon("playerAttack")}`}
          // display={`Go${getDiceTypeIcon("playerAttack")}`}
          onClick={(e) => e.preventDefault()}
          // inactive={true}
          recommended={true}
          styles={{ whiteSpace: "nowrap" }}
        />
      </ContainerHorisontal>
      <ContainerHorisontal>
        Caravan
        <br /> People at the caravan will offer quests.
        <br />
        Quests require You to progress certain paths.
        <br />
        Once you complete quest you can trade gold for new item.
        <br />
        Trading at the caravan will raise friendship Level which grants extra
        benefits to help You on the journey.
        <br />
        (Friendship benefits added in future)
        <QuestSquare {...exampleQuest} />
      </ContainerHorisontal>
      <h4 id="tutorial">Equipment and Skills</h4>
      <ContainerHorisontal>
        Equipment <br />
        Equipped items give you dices and life during your adventure.
        <br />
        When on the Path you must have 1-5 items equipped with you.
        <br />
        All equipment can be leveled up and down freely at the 🔨.
        <br />
        Leveling item costs upgrades.
        <br />
        Deleveling item fully refunds upgrades but costs gold.
        <br />
        Once you get an item it is Yours forever.
        <HeaderNavBtn
          to="/-"
          display={`🔨`}
          onClick={(e) => e.preventDefault()}
        />
      </ContainerHorisontal>
      <ContainerHorisontal>
        Skills <br />
        Each equipment has its unique skill.
        <br />
        When on the Path - each Skill can be used once per turn.
        <br /> When Skill is ready to activate - it will glow with green aura.
        <br /> To activate skill first select exactly as many dices as the skill
        requires
        <br /> - then click on the Skill. <br />
        <br /> (+) click here to equip this item.
        <br /> (✔️) item is equipped.
        <br /> (1) dices that can be used for this skill.
        <br /> (2) dices that you get each turn when this item is equipped.
        <Item {...exapleItem} />
      </ContainerHorisontal>
      <h4 id="path">When on the Path</h4>
      <ContainerHorisontal>
        You will be using dices like these.
        <br />
        To choose which dice you want to place first
        <br /> SELECT a dice by clicking on it.
        <span>
          <DiceIcon
            type={"strength"}
            value={`6`}
            key={`tutorial|strength6|1`}
          />
          <DiceIcon type={"slashed"} value={`7`} key={`tutorial|slashed7|1`} />
          <DiceIcon type={"mana"} value={`2`} key={`tutorial|mana2|1`} />
          <DiceIcon type={"ice"} value={`4`} key={`tutorial|ice4|1`} />
        </span>
      </ContainerHorisontal>
      <ContainerHorisontal>
        Place dices inside MIDDLE (squre-ish) section
        <br /> of special boxes like this one - by clicking inside.
        <br />
        Some dices may not fit inside a particular box.
        <EnemyPiece p={exampleEPiece1} />
      </ContainerHorisontal>
      <ContainerHorisontal>
        What can happen at the end of turn is shown on the RIGHT side of each
        box:
        <br />
        {getDiceTypeIcon("life")} damage to you <br />
        {getDiceTypeIcon("playerAttack")} your progress towards victory
        <HeaderNavBtn
          to="/-"
          display={`✔️End Turn`}
          onClick={(e) => e.preventDefault()}
          recommended={true}
          styles={{ whiteSpace: "nowrap" }}
        />
      </ContainerHorisontal>
      <ContainerHorisontal>
        Some boxes remain LOCKED until you filfill requirements of other boxes.
      </ContainerHorisontal>
      <ContainerHorisontal>
        RED are REQUIREMENTS you need to fulfill
        <br /> to APPLY{getDiceTypeIcon("playerAttack")} and PREVENT
        {getDiceTypeIcon("life")} when turn ends
        {Piece.getReqIcons(redRequirements).map((i, index) => (
          <PieceIcon {...i} key={`redRequirements|${index}`} />
        ))}
        <br />
      </ContainerHorisontal>
      <ContainerHorisontal>
        GREEN are REQUIREMENTS for a single dice
        <br /> to even be placed inside the box
        {Piece.getReqIcons(greenRequirements).map((i, index) => (
          <PieceIcon {...i} key={`greenRequirements|${index}`} />
        ))}
      </ContainerHorisontal>
      <ContainerHorisontal>
        GREEN requirements can be IGNORED when you are trying to place dice of
        same symbol as on LEFT side of the box. Not all boxes have that option.
        <EnemyPiece p={exampleEPiece2} />
      </ContainerHorisontal>
      <h4 id="details">More details</h4>
      <ContainerHorisontal>
        <PieceIcon
          {...{ value: "3+", required: true }}
          key={`sumRequirements`}
        />
        total value of dices inside <br />
        example: 3+ can be fulfilled by [3] or [1][2] or [5], etc
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon
          {...{ value: "x4", required: true }}
          key={`x4Requirements`}
        />
        amount of dices inside
        <br />
        example: 4x needs four dices inside
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon {...{ value: "2+", allowed: true }} key={`2+Requirements`} />
        minimum value of dice <br />
        example: with 2+ only dices with value 2 or higher can be placed inside
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon {...{ value: "-5", allowed: true }} key={`-5Requirements`} />
        maximum value of dice <br />
        example: with -5 only dices with value 5 or lower can be placed inside
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon
          {...{ value: "3-6", allowed: true }}
          key={`3-6Requirements`}
        />
        minimum and maximum together
        <br />
        example: with 3-6 only dices with values [3] [4] [5] and [6] can be
        placed inside
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon
          {...{ value: "-2x", allowed: true }}
          key={`-2xRequirements`}
        />
        maximum amount of dices <br />
        example: with -2x only two dices (or less) can be inside at the time
      </ContainerHorisontal>
      <ContainerHorisontal>
        <PieceIcon
          {...{ value: "even", allowed: true }}
          key={`evenRequirements`}
        />
        <PieceIcon
          {...{ value: "odd", allowed: true }}
          key={`oddRequirements`}
        />
        only even / odd values <br />
        example: with even - only dices with even value like 2, 4, 6, 8, etc can
        be placed inside
      </ContainerHorisontal>
    </main>
  );
};

export default TutorialPage;
