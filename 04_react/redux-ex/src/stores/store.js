import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

import storage from 'redux-persist/lib/storage' // localStorage

import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'


// 로컬 스토리지에 저장하는 방식
// redux-persist를 설치해서 사용

// 로컬 스토리지 셋팅
const persistConfig = {
    key : 'root', // 저장소의 이름
    storage, // 저장소의 종류(localStorage)
}

// 작성한 slice 를 persistReducer  등록
const counterPersistReducer = persistReducer(persistConfig, counterReducer)


export const store = configureStore({
    reducer:{
        counter : counterPersistReducer,
    }
});
// 내보내기
export const persistor = persistStore(store)