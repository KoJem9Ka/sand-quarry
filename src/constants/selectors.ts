export enum Selectors {
  Header = 'header>div>div',
  MobileNav = 'header>div>nav',
}

export enum HeadingIdEnum {
  LegalStatus = 'legal-status',
  Characteristics = 'characteristics',
  BusinessModels = 'business-models',
  SaleConditions = 'sale-conditions',
}

export enum ElementIdEnum {
  // OurAdvantages = 'our-advantages',
  // PrimaryOrSecondaryMarket = 'primary-or-secondary-market',
  // MortgageOrInstallmentPlan = 'mortgage-or-installment-plan',
  // MoscowOrDubai = 'moscow-or-dubai',
  // ApartmentsOnTheMarket = 'apartments-on-the-market',
}

export type ElementId = HeadingIdEnum/* | ElementIdEnum*/;
