import React, { useState } from 'react'
import './Pagination.css'

const Pagination = ({
  totalCountries,
  countriesPerPage,
  paginate,
  currentPage,
}) => {
  const [active, setActive] = useState(0)

  const arrButton = []
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    arrButton.push(i)
  }

  const togglePage = (el) => {
    paginate(el)
    setActive(el)
  }

  return (
    <ul className="Pagination">
      {arrButton.map((el) => (
        <li
          key={el}
          className={
            active === el || currentPage === el
              ? 'Pagination__item active'
              : 'Pagination__item'
          }
          onClick={() => togglePage(el)}
        >
          <a className="Pagination__item-link">{el}</a>
        </li>
      ))}
    </ul>
  )
}
export default Pagination
