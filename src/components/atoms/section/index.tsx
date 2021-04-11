import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css';
import * as Base from '../../_settings'

enum Type {
  DEFAULT = 'section',
}

type Props = Base.Props & {
  type?: Type,
  children?: React.ReactNode,
}

const Element = (props: Props): React.ReactElement => {
  const {
    type = Type.DEFAULT,
    children,
    padding = Base.Padding.L1,
    theme = Base.Theme.DEFAULT,
  } = props;

  //create props
  const sectionProps = Base.mapProps({
    ...props,
    padding: padding,
  }, styles, [type, theme]);

  return (
    <section {...sectionProps}>{children}</section>
  )
}

export {
  Element,
  Type,
  Props,
};