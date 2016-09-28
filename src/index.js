import m from 'mithril'
import Home from 'home/index'
import Users from 'users/index'

const Layout = {
  view (vnode) {
    return m('.u-window-box--medium', vnode.children)
  }
}

const layoutize = subComponent => vnode => m(Layout, m(subComponent, vnode.attrs))

m.route(document.body, '/', {
  '/': {render: layoutize(Home)},
  '/users/:username': {render: layoutize(Users)}
})
