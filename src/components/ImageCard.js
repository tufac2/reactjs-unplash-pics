import React from 'react'

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpanCSS)
  }

  setSpanCSS = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height/10) });
    console.log(this.state);
    
    
  }
  render() {
    const { description, urls } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
        <img
          className="ui medium rounded image" 
          ref={ this.imageRef }
          alt={ description }
          src={ urls.regular }
        />
      </div>
    )
  }
}