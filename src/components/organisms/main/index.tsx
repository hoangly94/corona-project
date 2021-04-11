import * as React  from 'react'
import styles from './styles.css'
import * as Base from "../../_settings";

type Props = Base.Props & {
  children?: React.ReactNode,
};

const Element = (props: Props): React.ReactElement => {
  const { 
    theme = Base.Theme.DEFAULT,
    children,
  } = props;

  //create props
  const mainProps = Base.mapProps(props, styles, [ theme]);

  return (
    <main {...mainProps}>{children}</main>
  )
}

export {
  Element,
  Props,
};