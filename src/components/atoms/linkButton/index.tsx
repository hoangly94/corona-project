import * as React from 'react'
import Classnames from 'classnames'
import {
  Link,
} from "react-router-dom";
import styles from './styles.css'
import * as Base from "../../_settings";

enum Type {
  DEFAULT = 'link-button',
  TRANSPARENT_BACKGROUND_BORDER = 'link-button-transparent-background-border',
}

enum Size {
  S1 = 's1',
  S = 's',
  M = 'm',
  L = 'l',
  L1 = 'l1',
}

type Props = Base.Props & {
  type?: Type,
  size?: Size,
  text?: string,
  url?: string,
}

const Element = (props: Props): React.ReactElement => {
  const { 
    type = Type.DEFAULT, 
    size = Size.M,
    text, 
    url = '', 
    theme = Base.Theme.DEFAULT,
  } = props;

  const href = url ? { href: url } : {};

  //create props
  const linkProps = {
    ...Base.mapProps(props, styles, [type, size, theme]),
    ...href,
  }

  const linkElement = /^http.+$/.test(url) || url === '' ?  <a {...linkProps}>{text}</a> : <Link  {...linkProps} to={url}>{text}</Link>;
  
  
  return (
    linkElement
  )
}

export {
  Element,
  Type,
  Size,
  Props,
};