import * as fr from './content.fr.js'
import * as en from './content.en.js'

const dictionaries = { fr, en }

export function getContent(lang) {
  return dictionaries[lang] ?? dictionaries.fr
}
