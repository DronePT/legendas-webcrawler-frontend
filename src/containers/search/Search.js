import React, {Component} from 'react'
import debounce from 'lodash/debounce'

import './Search.scss'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleInput = this.handleInput.bind(this)

    this.onSearch = debounce(this.onSearch.bind(this), 1000)
  }

  handleInput (event) {
    const { value: query } = event.target
    this.setState({ query })

    this.onSearch()
  }

  onSearch () {
    const { onSearch } = this.props

    if (onSearch && typeof onSearch === 'function') onSearch(this.state.query)
  }

  render() {
    return (
      <div className="Search">
        <span>
          <input
            type="text"
            placeholder="type movie or serie name here!"
            onInput={this.handleInput}
            value={this.state.query}
            />
        </span>
        <a href="#">
          <i className="material-icons">search</i>
        </a>
      </div>
    );
  }
}

export default Search;
