import { NBSP } from '@/utils/nbsp';


const dollarFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function intlDollars(dollars: number): string {
  return dollarFormatter.format(dollars).replace(/\s|,/g, NBSP);
}

export function fmtDollars(str: string | number): string {
  if (typeof str === 'number') {
    return intlDollars(str);
  }

  const matches = Array.from(str.matchAll(/(\d+([^\S\r\n]*\d+)*)[^\S\r\n]*\$/g))
    .map(([el]) => el);

  return matches.reduce((acc, match) => {
    const cleaned = +match.replace(/\D/g, '');
    return acc.replace(match, intlDollars(cleaned));
  }, str);
  // return str
  //   .replace(/(\d+([^\S\r\n]*\d+)*)[^\S\r\n]*\$/g, '$$$1')
  //   .replace(/(\d)[^\S\r\n]+(\d)/g, `$1${NBSP}$2`);
}


const rubFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function intlRub(rub: number): string {
  return rubFormatter.format(rub).replace(/\s|,/g, NBSP);
}

export function fmtRub(str: string | number): string {
  if (typeof str === 'number') {
    return intlRub(str);
  }

  const matches = Array.from(str.matchAll(/(\d+([^\S\r\n]*\d+)*)[^\S\r\n]*₽/g))
    .map(([el]) => el);

  return matches.reduce((acc, match) => {
    const cleaned = +match.replace(/\D/g, '');
    return acc.replace(match, intlRub(cleaned));
  }, str);
}


export function fmtPercent(percent: number): string {
  return `${Math.round(percent * 10_000) / 100}${NBSP}%`;
}


export function yearsSuffix(years: number): string {
  const first = years % 10;
  const firstTwo = years % 100;

  return first == 0
  || first >= 5 && first <= 9
  || firstTwo >= 11 && firstTwo <= 14 ? 'лет'
    : first == 1 ? 'год'
      : 'года';
}

export function fmtYears(years: number): string {
  return `${years}${NBSP}${yearsSuffix(years)}`;
}


export function fmtPower(text: string): string {
  const matches = Array.from(new Set(text.matchAll(/\^(\d+)/g)));

  return matches.reduce((acc, [match, p1]) => {
    return acc.replaceAll(match, `<sup>${p1}</sup>`);
  }, text);
}
