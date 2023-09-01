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

  levelUp(e, lv, startedLv) {
    // !!!AAA!!! levelup enemy pieces
    const gold = this.calculateGold({ lv, gold: e.gold, startedLv });
    const enemy = e;
    const evaluatedBody = this.evaluateBody(e.body);
    return { ...enemy, body: [...evaluatedBody], gold: gold };
  },
};
