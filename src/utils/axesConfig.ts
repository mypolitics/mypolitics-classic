import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDollarSign,
  faBalanceScale,
  faDove,
  faGavel,
  faHandPeace,
  faStar,
  faLeaf,
  faMale,
  faChartLine,
  faHourglass,
  faGlobe,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';

library.add({
  faDollarSign,
  faBalanceScale,
  faDove,
  faGavel,
  faHandPeace,
  faStar,
  faLeaf,
  faMale,
  faChartLine,
  faHourglass,
  faGlobe,
  faFlag,
});

export interface Axis {
  index: number;
  sides: Sides;
}

export interface Sides {
  left: AxisSide;
  right: AxisSide;
}

export interface AxisSide {
  title: string;
  iconColor: string;
  barColor: string;
  iconType: 'font-awesome' | 'symbol';
  icon: any;
  meta: AxisSlideMetaTranslations;
}

interface AxisSlideMetaTranslations {
  [index: string]: AxisSideMeta;
}

export interface AxisSideMeta {
  title: string;
  description: string;
}

export interface Widths {
  left: number;
  center: number;
  right: number;
}

const axesConfig: Axis[] = [
  {
    index: 0,
    sides: {
      left: {
        title: 'communism',
        iconColor: '#e74c3c',
        barColor: '#c0392b',
        iconType: 'symbol',
        icon: '☭',
        meta: {
          'pl-PL': {
            title: 'Komunizm',
            description: 'Ideologia i doktryna społeczna głosząca zniesienie własności prywatnej i różnic klasowych, uspołecznienie środków produkcji i równy podział dóbr.',
          },
        },
      },
      right: {
        title: 'capitalism',
        iconColor: '#2ecc71',
        barColor: '#27ae60',
        iconType: 'font-awesome',
        icon: faDollarSign,
        meta: {
          'pl-PL': {
            title: 'Kapitalizm',
            description: 'System społeczno-gospodarczy opierający się na własności prywatnej, konkurencji i gospodarce rynkowej.',
          },
        },
      },
    },
  },
  {
    index: 1,
    sides: {
      left: {
        title: 'interventionism',
        iconColor: '#cd3944',
        barColor: '#bc303a',
        iconType: 'font-awesome',
        icon: faBalanceScale,
        meta: {
          'pl-PL': {
            title: 'Regulacjonizm',
            description: 'Idea według której państwo powinno odziaływać na gospodarkę metodami ekonomicznymi i administracyjnymi.',
          },
        },
      },
      right: {
        title: 'laissezfaire',
        iconColor: '#8E44AD',
        barColor: '#703688',
        iconType: 'font-awesome',
        icon: faDove,
        meta: {
          'pl-PL': {
            title: 'Leseferyzm',
            description: 'Koncepcja afirmująca rynkowy ład ekonomiczny, przyznająca państwu jedynie obowiązek czuwania nad przestrzeganiem reguł gry rynkowej, postulująca pełną swobodę działania podmiotom gospodarczym.',
          },
        },
      },
    },
  },
  {
    index: 2,
    sides: {
      left: {
        title: 'anarchism',
        iconColor: '#34495e',
        barColor: '#2c3e50',
        iconType: 'symbol',
        icon: 'Ⓐ',
        meta: {
          'pl-PL': {
            title: 'Anarchizm',
            description: 'Ideologia i ruch społeczny głoszące zbędność państwa i wszelkich jego organów, uznające nieograniczoną wolność jednostki za wartość nadrzędną, postulujące oparcie życia społecznego na związkach wolnych gmin.',
          },
        },
      },
      right: {
        title: 'authoritarianism',
        iconColor: '#3498db',
        barColor: '#2980b9',
        iconType: 'font-awesome',
        icon: faGavel,
        meta: {
          'pl-PL': {
            title: 'Autorytaryzm',
            description: 'Ustrój polityczny, w którym władza jest skupiona w rękach przywódcy i jego najbliższego środowiska. Decyzje podejmowane przez przywódcę autorytarnego zatwierdzane są przez podporządkowany mu parlament.',
          },
        },
      },
    },
  },
  {
    index: 3,
    sides: {
      left: {
        title: 'pacifism',
        iconColor: '#6C7A89',
        barColor: '#56616c',
        iconType: 'font-awesome',
        icon: faHandPeace,
        meta: {
          'pl-PL': {
            title: 'Pacyfizm',
            description: 'Ruch społeczny i polityczny, którego głównym celem jest propagowanie pokoju i potępianie wszelkich działań wojennych.',
          },
        },
      },
      right: {
        title: 'militarism',
        iconColor: '#C3272B',
        barColor: '#ae2326',
        iconType: 'font-awesome',
        icon: faStar,
        meta: {
          'pl-PL': {
            title: 'Militaryzm',
            description: 'Ideologia podporządkowująca życie kraju przygotowaniom wojennym i uznająca prymat władzy wojskowej.',
          },
        },
      },
    },
  },
  {
    index: 4,
    sides: {
      left: {
        title: 'environmentalism',
        iconColor: '#006442',
        barColor: '#005135',
        iconType: 'font-awesome',
        icon: faLeaf,
        meta: {
          'pl-PL': {
            title: 'Ekologizm',
            description: 'Ideologia głosząca prymat działań na rzecz ochrony środowiska naturalnego i podkreślająca związki człowieka z przyrodą.',
          },
        },
      },
      right: {
        title: 'anthropocentrism',
        iconColor: '#FFA631',
        barColor: '#e5952c',
        iconType: 'font-awesome',
        icon: faMale,
        meta: {
          'pl-PL': {
            title: 'Antropocentryzm',
            description: 'Pogląd stawiający w centrum zainteresowań i badań człowieka, głoszący go miarą wszystkiego.',
          },
        },
      },
    },
  },
  {
    index: 5,
    sides: {
      left: {
        title: 'progressivism',
        iconColor: '#9b59b6',
        barColor: '#8e44ad',
        iconType: 'font-awesome',
        icon: faChartLine,
        meta: {
          'pl-PL': {
            title: 'Progresywizm',
            description: 'Wiara w postęp, przekonanie o dążeniu świata i ludzi do postępu.',
          },
        },
      },
      right: {
        title: 'traditionalism',
        iconColor: '#1abc9c',
        barColor: '#16a085',
        iconType: 'font-awesome',
        icon: faHourglass,
        meta: {
          'pl-PL': {
            title: 'Tradycjonalizm',
            description: 'Ideologia wynikająca z przywiązania i szacunku do tradycji trakowanej jako najwyższa wartość.',
          },
        },
      },
    },
  },
  {
    index: 6,
    sides: {
      left: {
        title: 'cosmopolitanism',
        iconColor: '#4D8FAC',
        barColor: '#45809a',
        iconType: 'font-awesome',
        icon: faGlobe,
        meta: {
          'pl-PL': {
            title: 'Kosmopolityzm',
            description: 'Pogląd negujący wszelkie podziały kulturowo-polityczne i terytorialne, więzi narodowe i tradycję, za prawdziwą ojczyznę człowieka uznający cały świat.',
          },
        },
      },
      right: {
        title: 'nationalism',
        iconColor: '#f99e35',
        barColor: '#eb9532',
        iconType: 'font-awesome',
        icon: faFlag,
        meta: {
          'pl-PL': {
            title: 'Nacjonalizm',
            description: 'Ruch polityczny podporządkowujący interesy innych narodów we własnym celu.',
          },
        },
      },
    },
  },
];

export default axesConfig;
