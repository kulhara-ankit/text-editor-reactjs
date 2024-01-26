import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import './index.css'

import {
  Button,
  UnderlineButton,
  ItalicButton,
  TextAreaElement,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
  }

  onClickTextToBold = () => {
    this.setState(prevState => ({textToBold: !prevState.textToBold}))
  }

  onClickTextToItalic = () => {
    this.setState(prevState => ({textToItalic: !prevState.textToItalic}))
  }

  onClickTextToUnderline = () => {
    this.setState(prevState => ({textToUnderline: !prevState.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const boldButtonColor = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold === false ? 'normal' : 'bold'

    const fontStyle = textToItalic === false ? 'normal' : 'italic'

    const textDecoration = textToUnderline === false ? 'normal' : 'underline'

    return (
      <div className="background-container">
        <div className="app-container">
          <div className="image-container">
            <h1 className="text-editor-heading">Text Editor</h1>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                className="image"
                alt="text editor"
              />
            </div>
          </div>
          <div className="editor-container">
            <ul className="button-container">
              <li>
                <Button
                  data-testid="bold"
                  color={boldButtonColor}
                  type="button"
                  onClick={this.onClickTextToBold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <ItalicButton
                  className="button"
                  data-testid="italic"
                  type="button"
                  color={italicButtonColor}
                  onClick={this.onClickTextToItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  className="button"
                  data-testid="underline"
                  type="button"
                  color={underlineButtonColor}
                  onClick={this.onClickTextToUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ul>
            <hr className="horizontal-line" />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
              rows="20"
              cols="60"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
