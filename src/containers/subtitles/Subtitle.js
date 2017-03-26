import React, { Component } from 'react'
import classnames from 'classnames'

import './Subtitle.scss'



class Subtitle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  get flag () {
    const { language } = this.props.data

    switch (language.toLowerCase()) {
      case 'portugal': return 'pt'
      case 'brazil': return 'br'
      case 'spain': return 'es'
      case 'finglaterra': return 'gb'
      default: return 'pt'
    }
  }

  get type () {
    const { type } = this.props.data

    switch (type.toLowerCase()) {
      case 'series': return 'Série'
      case 'movie': return 'Filme'
      case 'episode': return 'Episódio'
      default: return 'n/d'
    }
  }

  handleToggleClick (event) {
    event.preventDefault()

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      title,
      year,
      uploadedBy,
      uploadedAt,
      hits,
      description,
      download
    } = this.props.data
    const { isOpen } = this.state

    const className = classnames({
      'Subtitle': true,
      'is-open': isOpen
    })

    return (
      <div className={className}>
        <div className="header">
          <div className={`flag-icon flag-icon-${this.flag}`}></div>
          <div className="title">{title} ({year})</div>
          <div className="size-100">
            <label>Género</label> {this.type}
          </div>
          <div className="size-200">
            <label>Enviado a</label> {uploadedAt}
          </div>
          <div className="size-200">
            <label>pelo</label> {uploadedBy}
          </div>
          <div className="size-100">
            <label>Downloads</label> {hits}
          </div>
          <a
            className="toggle"
            href="#"
            onClick={this.handleToggleClick}
            >
            <i className="material-icons">keyboard_arrow_down</i>
          </a>
        </div>
        <div className="content">
          <div
            className="description"
            dangerouslySetInnerHTML={{__html: description.replace(/\n/g, '<br />')}}></div>
          <div className="actions">
            <a href={download} target="_blank" className="btn-download">DOWNLOAD</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Subtitle
