import { Piece } from "./Piece";

export const Enemy = {
  calculateGold({ lv, gold, startedLv }) {
    const enemyGold = Math.max(gold || 10, 10);
    const maxDungGold = 80;
    const maxDoubleDungGold = 300;
    const dungeonGold =
      lv > startedLv
        ? Math.min(lv * 2, maxDoubleDungGold)
        : Math.min(lv, maxDungGold);
    console.log(`enemy base gold [${gold}] dungeonGold [${dungeonGold}]`);
    return enemyGold + dungeonGold;
  },

  evaluatePieceThanBody(piece, body) {
    const updatedBody = body.map((p) =>
      p.id !== piece.id ? p : Piece.evaluateFulfilled(p)
    );
    return this.evaluateBody(updatedBody);
  },
  evaluateBody(body) {
    let priorityFulfilled = true;
    const evaluatedPriority = body.map((p) => {
      if (!p.priority) return p;
      const ev = Piece.evaluateFulfilled(p);
      if (!ev.fulfilled) priorityFulfilled = false;
      return { ...ev, disabled: false };
    });
    if (!priorityFulfilled) {
      console.log(`body evaluation ended at priority failure`);
      return evaluatedPriority.map((p) =>
        p.priority ? p : { ...p, disabled: true, fulfilled: false }
      );
    }
    let normalFulfilled = true;
    const evaluatedNormal = body.map((p) => {
      if (p.priority || p.extra) return p;
      const ev = Piece.evaluateFulfilled(p);
      if (!ev.fulfilled) normalFulfilled = false;
      return { ...ev, disabled: false };
    });
    if (!normalFulfilled) {
      console.log(`body evaluation ended at normal failure`);
      return evaluatedNormal.map((p) =>
        !p.extra ? p : { ...p, disabled: true, fulfilled: false }
      );
    }
    const evaluatedBody = evaluatedNormal.map((p) =>
      p.extra ? { ...Piece.evaluateFulfilled(p), disabled: false } : p
    );
    return [...evaluatedBody];
  },

  levelUp(ee, lvv, startedLvv) {
    const e = JSON.parse(JSON.stringify(ee));
    const lv = JSON.parse(JSON.stringify(lvv));
    const startedLv = JSON.parse(JSON.stringify(startedLvv));
    // !!!AAA!!! levelup enemy pieces
    let leveledPiecesArray = [];
    console.log("Enemy.levelUp enemy.body:", [...e.body]);
    for (const piecee of e.body) {
      const piece = JSON.parse(JSON.stringify(piecee));
      // console.log("Enemy.levelUp Current piece:", piece);
      const leveledPieces = [
        ...Piece.levelupPiece({ ...piece, grow: { ...piece.grow, lv } }),
      ];
      console.log("Enemy.levelUp leveledPieces:", leveledPieces);
      leveledPiecesArray = [...leveledPiecesArray.concat([...leveledPieces])];
      console.log("Enemy.levelUp leveledPiecesArray:", leveledPiecesArray);
    }
    // const enemy = { ...e, body: [...leveledPiecesArray] };
    const enemy = { ...e };
    console.log(`Enemy.levelUp enemy:`, enemy);
    const gold = this.calculateGold({ lv, gold: e.gold, startedLv });
    // const gold = 14;
    const evaluatedBody = this.evaluateBody([...leveledPiecesArray]);
    // const evaluatedBody = enemy.body;
    return { ...enemy, body: [...evaluatedBody], gold: gold };
    // return e;
  },
};
