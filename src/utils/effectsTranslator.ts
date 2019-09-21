/*
 * communism - capitalism
 * interventionism - laissezfaire
 * anarchism - authoritarianism
 * pacifism - militarism
 * environmentalism - anthropocentrism
 * progressivism - traditionalism
 * cosmopolitanism - nationalism
 */

interface Translations {
  [index: number]: Translation;
  find(
    predicate: (
      value: Translation,
      index: number,
      obj: Array<Translation>
    ) => boolean,
    thisArg?: any
  ): Translation | undefined;
}

interface Translation {
  locale: string;
  effects: EffectTranslation[];
}

interface EffectTranslation {
  name: string;
  text: string;
}

const translations: Translations = [
  {
    locale: 'pl-PL',
    effects: [
      { name: 'communism', text: 'komunizm' },
      {
        name: 'capitalism',
        text: 'kapitalizm',
      },
      {
        name: 'interventionism',
        text: 'regulacjonizm',
      },
      { name: 'laissezfaire', text: 'leseferyzm' },
      {
        name: 'anarchism',
        text: 'anarchizm',
      },
      {
        name: 'authoritarianism',
        text: 'autorytaryzm',
      },
      {
        name: 'pacifism',
        text: 'pacyfizm',
      },
      {
        name: 'militarism',
        text: 'militaryzm',
      },
      {
        name: 'environmentalism',
        text: 'ekologizm',
      },
      {
        name: 'anthropocentrism',
        text: 'antropocentryzm',
      },
      {
        name: 'progressivism',
        text: 'progresywizm',
      },
      {
        name: 'traditionalism',
        text: 'tradycjonalizm',
      },
      {
        name: 'cosmopolitanism',
        text: 'kosmopolityzm',
      },
      { name: 'nationalism', text: 'nacjonalizm' },
    ],
  },
];

const translateEffect = (locale: string, effect: string): string => {
  const localeTranslations = translations.find(
    (translation) => translation.locale === locale,
  );

  if (localeTranslations === undefined) {
    return 'NOT_FOUND';
  }

  const foundTranslation = localeTranslations.effects.find(
    (foundEffect) => foundEffect.name === effect,
  );

  if (foundTranslation === undefined) {
    return 'NOT_FOUND';
  }

  return foundTranslation.text;
};

export default translateEffect;
