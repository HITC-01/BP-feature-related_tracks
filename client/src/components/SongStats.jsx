import React from 'react';
import PropTypes from 'prop-types';

const numeral = require('numeral');

const SongStats = (props) => {
  const { song } = props;
  return (
    <div className="rel_songStatContainer">
      <ul className="rel_songStats">
        <li className="rel_songStatComponent">
          <i className="fas fa-play" />
          <span title={numeral(song.play_count).format('0,0')}>{numeral(song.play_count).format('0.0a')}</span>
        </li>
        <li className="rel_songStatComponent">
          <i className="fas fa-heart" />
          <span title={numeral(song.like_count).format('0,0')} className="rel_hover">{numeral(song.like_count).format('0.0a')}</span>
        </li>
        <li className="rel_songStatComponent">
          <i className="fas fa-exchange-alt" />
          <span title={numeral(song.repost_count).format('0,0')} className="rel_hover">{numeral(song.repost_count).format('0.0a')}</span>
        </li>
        <li className="rel_songStatComponent">
          <i className="fas fa-comment-alt" />
          <span title={numeral(song.comment_count).format('0,0')} className="rel_hover">{numeral(song.comment_count).format('0.0a')}</span>
        </li>
      </ul>
    </div>
  );
};

SongStats.propTypes = {
  song: PropTypes.object.isRequired,
};

export default SongStats;
