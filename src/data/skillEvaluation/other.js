const numberOfDicesSelectedEvaluation = ({ params, state }) => {
  const { value } = params;
  if (!value || typeof value !== "number" || value < 1) return false;
  const { combat } = state;
  const { rolledDices } = combat;
  const selectedDices = rolledDices.filter((d) => d.selected === true);
  if (selectedDices.length !== value) return false;
  //   console.log(
  //     `SKILL EVALUATION - OTHER - checking num of selected dices (${params.value})`
  //   );
  return true;
};
export const OTHER_SEV = {
  false: () => false,
  NUMDICES: numberOfDicesSelectedEvaluation,
};
