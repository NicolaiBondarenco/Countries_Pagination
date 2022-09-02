import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './Components/Countries/Countries'
import Pagination from './Components/Pagination/Pagination'
import Error from './Components/Error/Error'

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const { data } = await axios
        .get('https://restcountries.com/v2/all')
        .catch((err) => {
          setLoading(false)
          setError(true)
        })
      setCountries(data)
      setLoading(false)
    }
    getData()
  }, [])

  const lastCountrieIndex = currentPage * countriesPerPage
  const firstCountrieIndex = lastCountrieIndex - countriesPerPage
  const currentCountry = countries.slice(firstCountrieIndex, lastCountrieIndex)

  const paginate = (pageNum) => {
    setCurrentPage(pageNum)
  }

  if (error) {
    return <Error />
  }

  return (
    <div className="App">
      <h1 className="App__title">All Countries</h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination
        totalCountries={countries.length}
        countriesPerPage={countriesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App
