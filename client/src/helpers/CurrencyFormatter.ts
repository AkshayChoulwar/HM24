const CURRENCY_LOCALE = 'de-DE';
const NUMBER_STYLE = 'currency';
const CURRENCY_FORMAT = 'EUR';

export const formatter = new Intl.NumberFormat(CURRENCY_LOCALE, {
  style: NUMBER_STYLE,
  currency: CURRENCY_FORMAT
});