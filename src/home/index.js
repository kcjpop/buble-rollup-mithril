import m from 'mithril'
import SearchForm from 'home/el/search-form'

const view = vnode => {
  return [
    m(SearchForm, vnode.state),
    m('h1.c-heading.c-heading--medium', 'Result'),
    m('.u-pillar-box--large.u-letter-box--medium',
      vnode.state.users().map(user => m('.user',
        m('h2.c-heading.c-heading--small',
          m(`a[href=/users/${user.login}]`, {oncreate: m.route.link}, user.login)
        )
      ))
    )
  ]
}

export default {
  users: m.prop([]),
  view
}
