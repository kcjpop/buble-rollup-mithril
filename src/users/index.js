import m from 'mithril'

const view = vnode => {
  return m('h1', `User ${vnode.attrs.username}`)
}

export default {view}
