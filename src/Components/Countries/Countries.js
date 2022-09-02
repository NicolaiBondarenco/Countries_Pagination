import React from 'react'
import './Countries.css'

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <div className="Countries__loading">Loading...</div>
  }

  return (
    <div className="Countries">
      <ul className="Countries__list">
        {countries.map((el, id) => (
          <li className="Countries__item" key={id}>
            {el.name}
            <img className="Countries__item-img" src={el.flag} alt="Flag" />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Countries
