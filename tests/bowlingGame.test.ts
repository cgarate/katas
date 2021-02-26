import BowlingGame from "../src/bowlingGame/BowlingGame";

describe("Test suite for Bowling Game", () => {
  let game: BowlingGame;
  beforeEach(() => (game = new BowlingGame()));

  const rollMany = (howMany, pins) => {
    for (let i = 0; i < howMany; i++) {
      game.roll(pins);
    }
  };

  const rollSpare = () => {
    game.roll(9);
    game.roll(1);
  };

  const rollStrike = () => {
    game.roll(10);
  };

  it.skip("tests gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it.skip("tests all ones", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it.skip("tests one spare", () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

  it.skip("tests one strike", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it.skip("tests perfect game", () => {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });

  it.skip("tests a more random game", () => {
    rollStrike();
    game.roll(7);
    game.roll(2);
    rollSpare();
    rollStrike();
    rollMany(12, 4);
    expect(game.score()).toBe(114);
  });

  it("tests a more random game", () => {
    rollStrike();
    rollSpare();
    rollStrike();
    rollSpare();
    rollStrike();
    game.roll(8);
    game.roll(1);
    game.roll(7);
    game.roll(2);
    rollSpare();
    rollStrike();
    rollStrike();
    rollStrike();
    rollStrike();
    expect(game.score()).toBe(197);
  });

  it.skip("tests a 200+ game", () => {
    rollStrike()
    rollStrike()
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    rollSpare();
    expect(game.score()).toBe(201);
  });
});
