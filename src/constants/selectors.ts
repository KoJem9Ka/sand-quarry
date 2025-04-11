export enum Selectors {
  Header = 'header>div>div',
  MobileNav = 'header>div>nav',
}

export enum HeadingIdEnum {
  AboutProject = 'about-project',
  Mortgage = 'mortgage',
  GoldenVisa = 'golden-visa',
  Services = 'services',
  Cases = 'cases',
}

export enum ElementIdEnum {
  OurAdvantages = 'our-advantages',
  PrimaryOrSecondaryMarket = 'primary-or-secondary-market',
  MortgageOrInstallmentPlan = 'mortgage-or-installment-plan',
  MoscowOrDubai = 'moscow-or-dubai',
  ApartmentsOnTheMarket = 'apartments-on-the-market',
}

export type ElementId = HeadingIdEnum | ElementIdEnum;
