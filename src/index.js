import m from 'mithril'
import Home from 'home/index'
import Users from 'users/index'

m.route(document.body, '/', {
  '/': Home,
  '/users/:username': Users
})
