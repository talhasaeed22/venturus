// actions.js
export const setGeneratedReport = (generatedReport) => {
  return {
    type: 'SET_GENERATED_REPORT',
    payload: generatedReport,
  };
};
