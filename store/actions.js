// actions.js
export const setGeneratedReport = (generatedReport) => {
  return {
    type: 'SET_GENERATED_REPORT',
    payload: generatedReport,
  };
};

export const setSignedInUser = (user) => {
  return {
    type: 'SET_SIGNEDIN_USER',
    payload: user,
  };
};