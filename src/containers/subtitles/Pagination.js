import React from 'react'

import './Pagination.scss'

const PreviousPage = (props) => {
  return (
    <a href="#" onClick={props.onClick}>
      <i className="material-icons">keyboard_arrow_left</i>
    </a>
  )
}

const NextPage = (props) => {
  return (
    <a href="#" onClick={props.onClick}>
      <i className="material-icons">keyboard_arrow_right</i>
    </a>
  )
}

const Pagination = (props) => {
  if (!props.data || !props.data.pages) return null

  const { currentPage, pages } = props.data

  const _handleNextClick = event => {
    event.preventDefault()
    props.onPageChange(currentPage + 1)
  }

  const _handlePrevClick = event => {
    event.preventDefault()
    props.onPageChange(currentPage - 1)
  }

  return (
    <div className="Pagination">
      <span className="label">Showing page {currentPage} of {pages}</span>
      {currentPage > 1 ? <PreviousPage onClick={_handlePrevClick} /> : null}
      {currentPage < pages ? <NextPage onClick={_handleNextClick} /> : null}
    </div>
  )
}

export default Pagination
