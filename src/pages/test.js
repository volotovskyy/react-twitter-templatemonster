import React from 'react';
import CommentBox from '../components/comment-box';

export default class TestPage extends React.Component {
  render() {
    return (
      <div>

        <CommentBox apiUrl="api/test/comments.json" />
      </div>
    )
  }
}
