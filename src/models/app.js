import { formatDate } from '../utils/utils'

export default {
  namespace: 'app',

  state: {
    date: formatDate(
      new Date(new Date().getTime() - 1 * 86400000),
      'yyyy-MM-dd'
    )
  },

  effects: {
    *addCount({ payload, success, error }, { call, put, select }) {
      // const res = yield call(getCompaniesAjax, payload)
      let oldCount = yield select((state) => {
        return state.app.count
      })
      console.log(oldCount)
      let newCount = oldCount + 1
      yield put({
        type: 'save',
        payload: {
          count: newCount
        }
      })
    },
  }, //effects end
  //=====================================================================================
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}
