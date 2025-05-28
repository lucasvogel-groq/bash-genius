export const promptTemplate = (prompt) => {
  return `
  You are a bash script expert. The user wants to perform the following task:
  ${prompt}

  IMPORTANT: Respond with ONLY the bash script itself.
  Do not include:
  - No explanations
  - No comments about usage
  - No introduction text
  - No conclusion text
  Just output the raw script content that can be directly executed.
  `;
};
