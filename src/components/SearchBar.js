import React from 'react'

export default class Component extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui action input">
            <input type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="ui icon button">
              <i className="search icon"></i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
