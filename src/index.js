import m from 'mithril'
import Home from 'home/index'
import Users from 'users/index'

const Layout = {
  view (vnode) {
    return m('.u-window-box--medium', vnode.children)
  }
}

const layoutize = subComponent => () => m(Layout, m(subComponent))

m.route(document.body, '/', {
  '/': {render: layoutize(Home)},
  '/users/:username': {render: layoutize(Users)}
})
