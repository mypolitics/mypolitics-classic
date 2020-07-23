import { SpheresType } from './spheresCalculator';

export interface Party {
  name: string
  logo: string
  spheresValues: SpheresType
  links: Links
  parliamentRepresentation: boolean
}

interface Links {
  www: string
  programme: string
}

const PARTIES_IMAGES_DIR = '/images/parties';

export const parties: Party[] = [
  {
    name: 'Nowoczesna',
    logo: `${PARTIES_IMAGES_DIR}/nowoczesna.png`,
    spheresValues: {
      economics: 0.4,
      social: -0.35,
    },
    links: {
      www: 'https://nowoczesna.org/',
      programme:
        'https://nowoczesna.org/wp-content/uploads/2016/09/Program-Nowoczesnej.pdf',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Platforma Obywatelska',
    logo: `${PARTIES_IMAGES_DIR}/po.png`,
    spheresValues: {
      economics: -0.05,
      social: -0.1,
    },
    links: {
      www: 'https://platforma.org/',
      programme:
        'https://koalicjaobywatelska.pl/images/Twoja-Polska-Program-Koalicji-Obywatelskiej.pdf',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'KORWiN',
    logo: `${PARTIES_IMAGES_DIR}/korwin.png`,
    spheresValues: {
      economics: 0.9,
      social: 0.35,
    },
    links: {
      www: 'https://wolnosc.pl/',
      programme: 'https://wolnosc.pl/deklaracja-ideowa/',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Ruch Narodowy',
    logo: `${PARTIES_IMAGES_DIR}/rn.png`,
    spheresValues: {
      economics: 0.1,
      social: 0.7,
    },
    links: {
      www: 'https://ruchnarodowy.net/',
      programme: 'https://ruchnarodowy.net/wp-content/uploads/Program-Ruchu-Narodowego.pdf',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Prawo i Sprawiedliwość',
    logo: `${PARTIES_IMAGES_DIR}/pis.png`,
    spheresValues: {
      economics: -0.15,
      social: 0.33,
    },
    links: {
      www: 'http://pis.org.pl/',
      programme: 'http://pis.org.pl/dokumenty',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Koalicja Polska PSL-K\'15',
    logo: `${PARTIES_IMAGES_DIR}/kp.png`,
    spheresValues: {
      economics: 0.3,
      social: 0.0,
    },
    links: {
      www: 'https://www.psl.pl/wp-content/uploads/2019/09/PROGRAM_PSL_2019.pdf',
      programme:
        'https://www.psl.pl/wp-content/uploads/2019/09/PROGRAM_PSL_2019.pdf',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Polska Partia Socjalistyczna',
    logo: `${PARTIES_IMAGES_DIR}/pps.png`,
    spheresValues: {
      economics: -0.9,
      social: 0.0,
    },
    links: {
      www: 'http://ppspl.eu/',
      programme: 'http://ppspl.eu/index.php/dokumenty-statutowe/7-o-nas',
    },
    parliamentRepresentation: false,
  },
  {
    name: 'Partia Razem',
    logo: `${PARTIES_IMAGES_DIR}/razem.png`,
    spheresValues: {
      economics: -0.66,
      social: -0.5,
    },
    links: {
      www: 'https://partiarazem.pl/',
      programme: 'http://partiarazem.pl/program/',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Sojusz Lewicy Demokratycznej',
    logo: `${PARTIES_IMAGES_DIR}/sld.png`,
    spheresValues: {
      economics: -0.5,
      social: -0.3,
    },
    links: {
      www: 'https://sld.org.pl/',
      programme: 'https://sld.org.pl/program/dokumenty',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Wiosna',
    logo: `${PARTIES_IMAGES_DIR}/wiosna.png`,
    spheresValues: {
      economics: -0.4,
      social: -0.5,
    },
    links: {
      www: 'https://wiosnabiedronia.pl/',
      programme: 'https://wiosnabiedronia.pl/program',
    },
    parliamentRepresentation: true,
  },
  {
    name: 'Libertarianie',
    logo: `${PARTIES_IMAGES_DIR}/libertarianie.png`,
    spheresValues: {
      economics: 0.8,
      social: -0.55,
    },
    links: {
      www: 'https://www.partialibertarianie.pl/',
      programme: 'https://www.partialibertarianie.pl/program',
    },
    parliamentRepresentation: false,
  },
  {
    name: 'Partia Możemy',
    logo: `${PARTIES_IMAGES_DIR}/mozemy.png`,
    spheresValues: {
      economics: 0.65,
      social: -0.5,
    },
    links: {
      www: 'https://partiamozemy.pl/',
      programme: 'https://partiamozemy.pl/wp-content/uploads/2020/01/Deklaracja.pdf',
    },
    parliamentRepresentation: false,
  },
  {
    name: 'Komunistyczna Partia Polski',
    logo: `${PARTIES_IMAGES_DIR}/kpp.png`,
    spheresValues: {
      economics: -0.9,
      social: 0.6,
    },
    links: {
      www: 'https://kom-pol.org/',
      programme: 'https://kom-pol.org/program/',
    },
    parliamentRepresentation: false,
  },
  {
    name: 'Konfederacja Korony Polskiej',
    logo: `${PARTIES_IMAGES_DIR}/kkp.png`,
    spheresValues: {
      economics: 0.5,
      social: 0.7,
    },
    links: {
      www: 'https://konfederacjakoronypolskiej.pl/',
      programme: 'https://konfederacjakoronypolskiej.pl/',
    },
    parliamentRepresentation: true,
  },
];

export default parties;
