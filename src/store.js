import {
  createStore,
  compose,
  applyMiddleware,

} from 'redux'
import {
  createHashHistory
} from 'history'
import {
  connectRouter, routerMiddleware
} from 'connected-react-router'




const history = createHashHistory()


const middlewares = [
  routerMiddleware(history),
]

const store = createStore(
  connectRouter(history),
  {},
  compose(
    applyMiddleware(
      ...middlewares
    )
  )
)

store.subscribe(() => console.info('Subscribe. State is', store.getState(), 'now.'))

export default store

export {
  history
}