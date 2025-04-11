import type { ApartmentItem } from '@/types';
import { fmtDollars, fmtPower } from '@/utils/fmt';
import { PUBLIC } from '@/backbone/public';


export const APARTMENTS: ApartmentItem[] = [{
  title: '$300 000',
  photos: Object.values(PUBLIC.apartments['300K']),
  description: `
Район: Business Bay
Студия, 36м^2
Полностью мебелирована от застройщика
5 минут до Dubai Mall и Burj Khalifa
Service Charge: 2 500 $ в год
Долгосрочная аренда: 22 000 $ — 24 000 $ в год
Краткосрочная аренда: свыше 27 000 $ в год
Первоначальный платеж и расходы по ипотеке: 101 441 $ (33.8%)
Годовое обслуживание ипотеки: 16 008 $
  `.trim(),
}, {
  title: '$500 000',
  photos: Object.values(PUBLIC.apartments['500K']),
  description: `
Район: Business Bay
Дом с 4 звёздочным отельным сервисом
Отельные завтраки, уборка, лаундри
Квартиры 80-85м^2 с 1 спальней
Service Charge: 6 500 $ в год
Долгосрочная аренда: 35 000 $ в год
Краткосрочная аренда: свыше 42 000 $ в год
Первоначальный платеж и расходы по ипотеке: 167 681 $ (33.5%)
Годовое обслуживание ипотеки: 26 676 $
  `.trim(),
}, {
  title: '$800 000',
  photos: Object.values(PUBLIC.apartments['800K']),
  description: `
Район: Dubai Creek Harbour
2-спальная, 102м^2
15 мин до Dubai Mall и аэропорта DXB
Service Charge: 9000 $ в год
Долгосрочная аренда: 56 000 $ в год
Краткосрочная аренда: свыше 63 000 $ в год
Первоначальный платеж и расходы по ипотеке: 267 041 $ (33.3%)
Годовое обслуживание ипотеки: 42 684 $   
  `.trim(),
}].map(apartment => ({
  ...apartment,
  description: fmtPower(fmtDollars(apartment.description)),
}));
