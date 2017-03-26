import React, { Component } from 'react'
import axios from 'axios'

import './App.scss'

import { SubtitlesBox, Search, Footer } from './containers'

const API_URI = 'http://localhost:3000'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      subtitles: [],
      pagination: null,
      page: 1,
      query: ''
    }

    this._setSubtitles = this._setSubtitles.bind(this)
    this._handleSearch = this._handleSearch.bind(this)
    this._handlePageChange = this._handlePageChange.bind(this)
    this._search = this._search.bind(this)
  }

  _search (query, page) {
    axios.get(`${API_URI}/search?q=${query}&page=${page}`)
      .then(this._setSubtitles)
  }

  _setSubtitles ({ data: { data: subtitles, meta: pagination } }) {
    this.setState({ subtitles, pagination })
  }

  _handleSearch (query) {
    const { page } = this.state

    this.setState({ query })

    this._search(query, page)
  }

  _handlePageChange (page) {
    const { query } = this.state

    this.setState({ page })

    this._search(query, page)
  }

  render() {
    const { subtitles, pagination } = this.state

    return (
      <div className="App">
        <div className="App-header">
          <Search onSearch={this._handleSearch} />
        </div>
        <div className="App-content">
          <SubtitlesBox
            subtitles={subtitles}
            pagination={pagination}
            onPageChange={this._handlePageChange}
          />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
