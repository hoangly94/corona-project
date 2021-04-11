import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css'
import * as Base from "../../_settings";

enum Type {
  DEFAULT = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

enum Theme {
  DEFAULT = '',
  ROUNDED = 'rounded',
}

enum Size {
  S = 's',
  M = 'm',
  L = 'l',
}

type Props = Base.Props & {
  type?: Type,
  size?: Size,
  onClick?(): void,
  text?: string,
  disabled?: boolean,
}

const Element = (props: Props) => {
  const {
    type = Type.DEFAULT,
    theme = Base.Theme.DEFAULT,
    size = Size.M,
    onClick,
    text,
    disabled,
  } = props;

  //create props
  const buttonProps = {
    ...Base.mapProps(props, styles, [type, size, theme]),
    onClick: onClick,
    disabled: disabled,
  }

  return (
    <button {...buttonProps}>
      {text}
    </button>
  )
}

export {
  Element,
  Type,
  Theme,
  Size,
  Props,
};