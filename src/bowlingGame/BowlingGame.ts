class BowlingGame {
  scoreTotal: number;
  rolls: number[];
  frames: number[];
  currentRoll: number;

  constructor() {
    this.scoreTotal = 0;
    this.rolls = Array(21).fill(0);
    this.frames = Array(10).fill(0);
    this.currentRoll = 0;
  }

  public roll(pins: number): void {
    this.rolls[this.currentRoll] = pins;
    this.currentRoll++;
  }

  public score(): number {
    console.log("BowlingGame -> score -> this.rolls", this.rolls)
    let frameIndex = 0;
    const result = this.frames.reduce((score, _, currentIndex) => {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfRegularFrame(frameIndex);
        frameIndex += 2;
      }
      this.frames[currentIndex] = score;
      return score;
    }, 0);
    console.log("BowlingGame -> score -> this.frames", this.frames);
    return result;
  }

  private isSpare(frameIndex: number): boolean {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === 10;
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2];
  }

  private strikeBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
  }

  private sumOfRegularFrame(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }
}

export default BowlingGame;
