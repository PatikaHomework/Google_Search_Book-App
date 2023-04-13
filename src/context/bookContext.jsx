import React from 'react'
import { createContext, useContext, useState } from 'react'

import axios from 'axios';
import { useQuery } from 'react-query'
const BookContext = createContext()

export const BookProvider = ({ children }) => {


    const API_KEY = 'AIzaSyDtcqTiwTJsT7tRh9Ka4-pcByFACRjX8_k'
    const [search, setSearch] = useState('')

    const { isLoading, error, data } = useQuery(['books', search], () =>
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`)
    );


    const values = {
        search,
        setSearch,
        isLoading,
        error,
        data
    }


    return (

        <BookContext.Provider value={values}>{children}</BookContext.Provider>
    );
}


export const useBook = () => useContext(BookContext)