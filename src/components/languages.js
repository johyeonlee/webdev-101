import React, { Component } from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import DescriptionWrapper from '../pages/index'

const LanguagesWrapper = styled.div`
  .show {
    visibility: visible;
  }
  .hidden {
    visibility: hidden;
  }
`

export default class Languages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLanguage: 'html',
    }
  }

  componentDidMount() {
    document.getElementById('css-language-div').classList.add('hidden')
    document.getElementById('js-language-div').classList.add('hidden')
  }

  switchLanguage = language => {
    switch (language) {
      case 'html':
        document.getElementById('html-language-div').classList.remove('hidden')
        document.getElementById('css-language-div').classList.add('hidden')
        document.getElementById('js-language-div').classList.add('hidden')
      case 'css':
        document.getElementById('css-language-div').classList.remove('hidden')
        document.getElementById('html-language-div').classList.add('hidden')
        document.getElementById('js-language-div').classList.add('hidden')
      case 'js':
        document.getElementById('js-language-div').classList.remove('hidden')
        document.getElementById('html-language-div').classList.add('hidden')
        document.getElementById('css-language-div').classList.add('hidden')
      default:
        return 0
    }
  }

  render() {
    return (
      <LanguagesWrapper>
        <div id="language-selection">
          <button
            className="btn btn-default"
            onClick={() => this.switchLanguage('html')}
          >
            HTML
          </button>
          <button
            className="btn btn-default"
            onClick={() => this.switchLanguage('css')}
          >
            CSS
          </button>
          <button
            className="btn btn-default"
            onClick={() => this.switchLanguage('javascript')}
          >
            JAVASCRIPT
          </button>
        </div>
        <div id="html-language-div">
          <h4>HTML</h4>
          <p>
            HTML is the building block of the web! You define the contents of
            the website with HTML.
          </p>
          <iframe
            src="https://codesandbox.io/embed/74x44mjmjj"
            style={{
              width: '100%',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            title="codesandbox html example"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </div>
        <div id="css-language-div">
          <h4>CSS</h4>
          <p>CSS decorates and creates styles from your HTML.</p>
          <iframe
            src="https://codesandbox.io/embed/pkjpr3xm70"
            style={{
              width: '100%',
              height: '700px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            title="codesandbox css example"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </div>
        <div id="js-language-div">
          <h4>JavaScript</h4>
          <p>JavaScript defines the logic and the actions of your website!</p>
          <p>Example editor here:</p>
        </div>
        <br />
        <u>
          <h4>Resources:</h4>
        </u>
        <p>
          <span className="emphasize">[FREE] Codecademy</span>: Great resource
          to start learning about fundamentals of HTML, CSS, JavaScript.
        </p>
        <p>
          <span className="emphasize">[FREE] Freecodecamp</span>: Complete guide
          to web development using course-like materials.
        </p>
        <p>
          <span className="emphasize">[PAID] Frontend Masters</span>: Advanced
          lectures and guides for specific libaries and tools.
        </p>
      </LanguagesWrapper>
    )
  }
}
