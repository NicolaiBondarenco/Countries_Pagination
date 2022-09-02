import React from 'react'
import '../Error/Error.css'

const Error = () => {
  return (
    <div className="Error">
      <img
        className="Error__img"
        src="http://www.mega-people.com/img/ind/homer.jpg"
        alt="Error"
      />
      <p className="Error__text">
        Приносим свои извинения за доставленные неудобства.
      </p>
    </div>
  )
}
export default Error
