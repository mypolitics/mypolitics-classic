import { getQuarterName, Quarter } from '../../../utils/getQuarterName';
import { SpheresType } from '../../../utils/spheresCalculator';

export interface ProductData {
  id: string;
  link: string;
  img: string;
}

const products: Record<Quarter, string[]> = {
  violet: [
    '4314387-Koszulka-8-gwiazd',
    '4314405-Kubek-8-gwiazd-bia-y',
    '4314791-Koszulka-Granice-Absurdu',
    '4315118-Kubek-Granice-Absurdu',
    '4315007-Koszulka-Wszystko-jest-w-porz-dku-',
    '4314783-Koszulka-ZUS-y-nie-Umiera-',
    '4314899-Koszulka-Enjoy-Capitalism-',
    '4314900-Kubek-Enjoy-Capitalism-',
    '4314918-Koszulka-Kapitalizm-vs-socjalizm-',
    '4314960-Koszulka-Legalize-',
    '4314961-Koszulka-Legalize-',
    '4314777-Koszulka-Enjoy-Capitalism',
    '4314781-Koszulka-Podatki-to-kradzie-',
    '4314886-Maseczka-Unia-Europejska-',
    '4314823-Koszulka-Love-is-love',
    '4314825-Koszulka-Love-is-love',
    '4314808-Maseczka-t-czowa-lniana',
    '4314898-Koszulka-Unia-Europejska-',
    '4318624-Maseczka-Gadsdenka-czarna',
    '4314663-Maseczka-Gadsden',
    '4314667-Torba-Gadsden',
    '4314669-Torba-Gadsden-FULLPRINT',
    '4314773-Koszulka-Liberland',
  ],
  green: [
    '4314387-Koszulka-8-gwiazd',
    '4314664-Maseczka-piorun-strajk-kobiet',
    '4314791-Koszulka-Granice-Absurdu',
    '4315118-Kubek-Granice-Absurdu',
    '4314808-Maseczka-t-czowa-lniana',
    '4314813-Koszulka-My-body-my-choice',
    '4314817-Koszulka-homofriendly',
    '4314819-Koszulka-homofriendly',
    '4314823-Koszulka-Love-is-love',
    '4314825-Koszulka-Love-is-love',
    '4314867-Maseczka-trzy-strza-y',
    '4314872-Koszulka-Trzy-strza-y',
    '4314874-Kubek-Trzy-strza-y-',
    '4314886-Maseczka-Unia-Europejska-',
    '4314888-Koszulka-ekologiczna-Warming-stripes-',
    '4314892-Koszulka-ekologiczna-Warming-stripes-',
    '4314898-Koszulka-Unia-Europejska-',
    '4314901-Kubek-Warming-stripes-',
    '4314907-Koszulka-Bella-Ciao-',
    '4314945-Koszulka-Prawa-cz-owieka-',
  ],
  blue: [
    '4314783-Koszulka-ZUS-y-nie-Umiera-',
    '4314810-Maseczka-bia-o-czerwona-lniana',
    '4314926-Koszulka-Jestem-Polakiem-',
    '4314810-Maseczka-bia-o-czerwona-lniana',
    '4314899-Koszulka-Enjoy-Capitalism-',
    '4314900-Kubek-Enjoy-Capitalism-',
    '4314913-Koszulka-Niepoprawny-politycznie-',
    '4314915-Koszulka-Cel-ycia-',
    '4314918-Koszulka-Kapitalizm-vs-socjalizm-',
    '4314929-Koszulka-STOP-UE-',
    '4314960-Koszulka-Legalize-',
    '4314961-Koszulka-Legalize-',
    '4314985-Koszulka-Skr-t-w-lewo-',
    '4314986-Koszulka-Skr-t-w-lewo-',
    '4315119-Kubek-Niepoprawny-politycznie-',
    '4314777-Koszulka-Enjoy-Capitalism',
    '4314781-Koszulka-Podatki-to-kradzie-',
  ],
  red: [
    '4314905-Koszulka-KRL-MRX-',
    '4314956-Maseczka-czerwona-',
    '4314902-Koszulka-Destroy-capitalism-',
    '4314810-Maseczka-bia-o-czerwona-lniana',
    '4314926-Koszulka-Jestem-Polakiem-',
  ],
  center: [],
};

export const getProductData = (fullName: string): ProductData => ({
  id: fullName.split('-')[0],
  link: `https://politykawka.pl/produkt/${fullName}.html`,
  img: `https://regen.cupsell.net/product/${fullName.split('-')[0]}/number/0?h=400&w=400&fit=crop`,
});

export const getProducts = (spheresResults: SpheresType) => {
  const quarter = getQuarterName(spheresResults);
  const productsShuffled = products[quarter].sort(() => 0.5 - Math.random());

  return productsShuffled.slice(0, 5);
};
