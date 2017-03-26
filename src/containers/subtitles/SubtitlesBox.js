import React from 'react'

import './SubtitlesBox.scss'

import Subtitle from './Subtitle'
import Pagination from './Pagination'

const SubtitlesBox = function (props) {
    const { subtitles, pagination } = props

    return (
        <div className="SubtitlesBox">
          <Pagination
            data={pagination}
            onPageChange={props.onPageChange}
          />

          {subtitles.map((s, i) => <Subtitle key={i} data={s} />)}

          <Pagination
            data={pagination}
            onPageChange={props.onPageChange}
          />
        </div>
    )
}

export default SubtitlesBox
