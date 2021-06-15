import pkg from '../package.json'
const { version } = pkg
import QMarkdown from './components/QMarkdown'
import getTagParts from './util/getTagParts'

export {
  version,
  QMarkdown,
  getTagParts
}

export default {
  version,
  QMarkdown,
  getTagParts,

  install (Vue) {
    Vue.component(QMarkdown.name, QMarkdown)
  }
}