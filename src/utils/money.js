function money(amount) {
  const currency = 'USD';
  const format = 'en-US';

  return Number(amount).toLocaleString(format, {
    style: 'currency',
    currency
  });
}

export default money;