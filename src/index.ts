import {
  Language,
  logLanguage,
  LanguageEnum,
  languageEnum,
} from './typescript/language'
import { anyType, unknownType } from './typescript/unknown-vs-any'
import { functionNeverReturns } from './typescript/never'
import { compareResult } from './typescript/compare'

// type any & unknown
/* anyType();
unknownType(); */

// type never
/* try {
    functionNeverReturns(999)
} catch (e) {
    console.log(e);
} */

// access index
// const array = [1,2,3,4,5];
/* const array = [1,2,3,4,5] as const;

const accessArray = array[10];

// const accessArray2 = array[10]!;
const assertNotNull = array[10] as number;

console.log(accessArray); */

// Enum vs. inferred object type
languageEnum(LanguageEnum.De)
languageEnum('DE' as LanguageEnum)

logLanguage('IT')
logLanguage(Language.De)

/* console.log(compareResult); */
