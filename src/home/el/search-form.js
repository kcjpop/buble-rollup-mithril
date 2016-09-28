import m from 'mithril'

const view = vnode => {
  return m('form',
    m('.c-form-element',
      m('input.c-field[type=search][placeholder="Enter location, e.g. Finland"]')
    )
  )
}

export default {view}
