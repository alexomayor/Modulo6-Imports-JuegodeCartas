interface GlobalVariable {
  currentPoints: number;
  targetPoints: number;
}

export let globalVariable: GlobalVariable = {
  currentPoints: 0,
  targetPoints: 7.5,
  // const UNDER_SCORE = 0;
  // const PERFECT_SCORE = 1;
  // const OVER_SCORE = 2;
};

//////////////////////BUTTONS//////////////////////
export const dealCardButton = document.getElementById("dealCardButton");
export const abandonButton = document.getElementById("forfeitButton");
export const whatIfButton = document.getElementById("whatIfButton");
export const resetButton = document.getElementById("resetButton");

//////////////////////MESSAGES//////////////////////
interface GameMessages {
  messageStartGame: string;
  messageGameWon: string;
  messageGameLost: string;
  messageWhatIfGoodDecision: string;
  messageWhatIfBadDecision: string;
  messageAbandonLowerThan4: string;
  messageAbandonBetween4and5Half: string;
  messageAbandonBetween6and7: string;
}
export const gameMessages: GameMessages = {
  messageStartGame: "Buena suerte!",
  messageGameWon: "¡Lo has clavado! ¡Enhorabuena!",
  messageGameLost: "No juegas muy bien...",
  messageWhatIfGoodDecision:
    "Plantarse fue una buena decision! Te habrias pasado.",
  messageWhatIfBadDecision: `Plantarse fue una mala decision! Habrias tenido `,
  messageAbandonLowerThan4: "Has sido muy conservador.",
  messageAbandonBetween4and5Half: "Te ha entrado el canguelo eh?",
  messageAbandonBetween6and7: "Casi casi...",
};
