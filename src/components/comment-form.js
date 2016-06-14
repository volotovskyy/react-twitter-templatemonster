import React from 'react';

const MAX_CHARACTERS = 140;

export default class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._getCharacterCount = this._getCharacterCount.bind(this);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit}>
        <label>New comment</label>
        <div className="comment-form-fields">
          {this.props.user.login}
          <textarea
              className="comment-area"
              placeholder="Comment:"
              value={this.state.value}
              ref={c => this._body = c}
              onChange={this._getCharacterCount}>
          </textarea>
        </div>
        <p>{this.state.value.length} characters entered</p>
        <p>{MAX_CHARACTERS-this.state.value.length} characters left</p>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }

  _getCharacterCount() {

    let value = this._body.value;
    if(this._body.value.length>=MAX_CHARACTERS+1) {
      value = value.substring(0, MAX_CHARACTERS-1)+value.substring(MAX_CHARACTERS, MAX_CHARACTERS+1);
    }
    this.setState({
      value: value
    });

  }

  _handleSubmit(event) {
    event.preventDefault();

    this.props.addComment(this.props.user.login, this._body.value);

    this.setState({ characters: 0,  value: '' });
  }
}
