import m from 'mithril'
import SearchForm from 'home/el/search-form'

const view = vnode => [
  m('h1.c-header', 'Hello World'),
  m(SearchForm)
]

export default {view}
