import axios from 'axios'
import  {takeLatest, call, put } from 'redux-saga/effects'

async function fetchTodo(){
 const res= await axios.get(' http://localhost:3004/api/users')
    return res.data
}

function* workerFetchTodo(){
    try {
      const todos=  yield call(fetchTodo)
      yield put({type:"FETCH_TODO_SUCCESS", payload:todos})
    } catch (error) {
        yield put({type:"FETCH_TODO_ERROR",payload:error})
    }

}

function* todoSaga(){
    yield takeLatest('FETCH_TODO_REQUEST', workerFetchTodo)
}

export default todoSaga