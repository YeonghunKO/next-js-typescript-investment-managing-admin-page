export const convertFormatDataToLabelValueArray = (
  formatData: Record<string, string | number>
) =>
  Object.entries(formatData).reduce((accumulator: any[], [key, value]) => {
    accumulator.push({ label: value, value: key });
    return accumulator;
  }, []);
