"use client";
import React from 'react'
import {Provider} from "react-redux"
import store from './store/Store';

const ProviderLayout = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderLayout