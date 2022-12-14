export const convertFormatDataToLabelValueArray = (
  formatData: Record<string, string | number>
) =>
  Object.entries(formatData).reduce((accumulator: any[], [key, value]) => {
    accumulator.push({ label: value, value: key });
    return accumulator;
  }, []);

export const maskingAccountNumber = (accountNumber: string) =>
  accountNumber
    .split('')
    .map((num, i) => (i === 0 || i === accountNumber.length - 1 ? num : '*'))
    .join('');

export const formattingAccountNumber = (
  accountNumber: string,
  format: string
) => {
  let maskedNumber = maskingAccountNumber(accountNumber);

  for (let idx = 0; idx < format.length; idx++) {
    if (format[idx] !== '-') {
      continue;
    }
    maskedNumber =
      maskedNumber.substring(0, idx) + '-' + maskedNumber.substring(idx);
  }

  return maskedNumber;
};

export const assetsColorDecider = (assets: string, payments: string) => {
  const diff = parseInt(payments) - parseInt(assets);
  if (diff === 0) return 'black';
  if (diff > 0) return 'blue';
  else return 'red';
};

// changeDotToComma
