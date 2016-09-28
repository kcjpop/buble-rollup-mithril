import m from 'mithril'

// User input
const keyword = m.prop()

const doSearch = vnode => e => {
  e.preventDefault()
  keyword(e.currentTarget.value)

  m.request({
    method: 'GET',
    url: `https://api.github.com/search/users?q=location:${keyword()}+repos:1`
  }).run(res => vnode.attrs.users(res.items))
}

const oninit = vnode => {
}

const view = vnode => m('form',
  m('.c-form-element',
    m('input.c-field[type=search][placeholder="Enter location, e.g. Finland"]', {
      oninput: doSearch(vnode),
      value: keyword()
    })
  )
)

export default {view, oninit}
