import { SpheresType } from './spheresCalculator';

export interface YouthOrg {
  name: string
  logo: string
  color: string;
  link: string
  spheresValues: SpheresType
}

const YOUTHORGS_IMAGES_DIR = '/images/youthorgs';

export const youthOrgs: YouthOrg[] = [
  {
    name: 'Młodzi .Nowocześni',
    color: '#135EAB',
    logo: `${YOUTHORGS_IMAGES_DIR}/mn.png`,
    link: 'https://www.facebook.com/mlodzi.nowoczesni/',
    spheresValues: {
      economics: 0.5,
      social: -0.6,
    },
  },
  {
    name: 'Młodzi Demokraci',
    color: '#0A65AB',
    logo: `${YOUTHORGS_IMAGES_DIR}/md.jpg`,
    link: 'https://www.facebook.com/MlodziDemokraci/',
    spheresValues: {
      economics: 0.0,
      social: -0.2,
    },
  },
  {
    name: 'Młodzi dla Wolności',
    color: '#173358',
    logo: `${YOUTHORGS_IMAGES_DIR}/mdw.png`,
    link: 'https://www.facebook.com/MlodzidlaWolnosci/',
    spheresValues: {
      economics: 0.9,
      social: 0.3,
    },
  },
  {
    name: 'Młodzi Razem',
    color: '#D63B4D',
    logo: `${YOUTHORGS_IMAGES_DIR}/mr.png`,
    link: 'https://www.facebook.com/mlodzilewicyrazem/',
    spheresValues: {
      economics: -0.8,
      social: -0.4,
    },
  },
  {
    name: 'Młodzi Libertarianie',
    color: '#FEC604',
    logo: `${YOUTHORGS_IMAGES_DIR}/ml.png`,
    link: 'https://www.facebook.com/MlodziLibertarianie/',
    spheresValues: {
      economics: 0.8,
      social: -0.6,
    },
  },
  {
    name: 'Przedwiośnie',
    color: '#522780',
    logo: `${YOUTHORGS_IMAGES_DIR}/przedwiosnie.jpg`,
    link: 'https://www.facebook.com/przedwiosnie.org/',
    spheresValues: {
      economics: -0.3,
      social: -0.6,
    },
  },
  {
    name: 'Forum Młodych PiS',
    color: '#26387A',
    logo: `${YOUTHORGS_IMAGES_DIR}/fmpis.jpg`,
    link: 'https://www.facebook.com/mpokoleniepis/',
    spheresValues: {
      economics: -0.25,
      social: 0.5,
    },
  },
  {
    name: 'Forum Młodych Ludowców',
    color: '#2ED397',
    logo: `${YOUTHORGS_IMAGES_DIR}/fml.png`,
    link: 'https://www.facebook.com/MlodziLudowcy/',
    spheresValues: {
      economics: 0.2,
      social: 0.1,
    },
  },
  {
    name: 'Kluby Młodych K\'15',
    color: '#0E3164',
    logo: `${YOUTHORGS_IMAGES_DIR}/kmk15.png`,
    link: 'https://www.facebook.com/MlodziK15/',
    spheresValues: {
      economics: 0.4,
      social: -0.1,
    },
  },
  {
    name: 'Federacja Młodych Socjaldemokratów',
    color: '#E61005',
    logo: `${YOUTHORGS_IMAGES_DIR}/fms.png`,
    link: 'https://www.facebook.com/fms.kraj/',
    spheresValues: {
      economics: -0.5,
      social: -0.5,
    },
  },
  {
    name: 'Organizacja Młodzieżowa PPS',
    color: '#D12222',
    logo: `${YOUTHORGS_IMAGES_DIR}/ompps.png`,
    link: 'https://www.facebook.com/CZERWONAMLODZIEZ/',
    spheresValues: {
      economics: -0.9,
      social: 0.0,
    },
  },
  {
    name: 'Młoda Prawica',
    color: '#ed1743',
    logo: `${YOUTHORGS_IMAGES_DIR}/mp.png`,
    link: 'https://www.facebook.com/StowarzyszenieMlodaPrawica/',
    spheresValues: {
      economics: 0.1,
      social: 0.4,
    },
  },
  {
    name: 'Ostra Zieleń',
    color: '#6dbc19',
    logo: `${YOUTHORGS_IMAGES_DIR}/oz.png`,
    link: 'https://www.facebook.com/ostrazielen/',
    spheresValues: {
      economics: -0.5,
      social: -0.7,
    },
  },
];

export default youthOrgs;
