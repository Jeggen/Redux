import { APP_LOADING } from '../actions/app-loading'

export default function updateLoading(state = true, { type, payload }) {
  switch (type) {
    case APP_LOADING :
      return payload

    default :
      return state
  }
}
