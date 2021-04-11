import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css'
import * as Base from '../../_settings'
import * as Li from './li'
import * as Link from "../../atoms/link";
import * as LinkButton from "../../atoms/linkButton";
import * as DropDown from '../../molecules/dropdown'

enum Type {
  DEFAULT = 'li',
}

type Props<T> = Base.Props & {
  type?: Type,
  $element?: T,
  elementType?: string,
}

const Element = <T extends Link.Props | LinkButton.Props | DropDown.Props>(props: Props<T>): React.ReactElement => {
  const {
    type = Type.DEFAULT,
    theme = Base.Theme.DEFAULT,
    $element = {},
    elementType = '',
  } = props;

  //create props
  const liProps = Base.mapProps(props, styles, [type, theme]);

  const childrenElement = convertElement($element, elementType);

  return (
    <li {...liProps}>{childrenElement}</li>
  )
}

function convertElement<T extends Link.Props | LinkButton.Props | DropDown.Props>($element: T, elementType: string) {
  switch (elementType) {
    case 'Link':
      return <Link.Element {...($element as Link.Props)} />;
    case 'LinkButton':
      return <LinkButton.Element {...($element as LinkButton.Props)} />;
    case 'DropDown':
      return <DropDown.Element {...($element as DropDown.Props)} />;
    default:
      return <Link.Element {...($element as Link.Props)} />;
  }
}

export {
  Element,
  Type,
  Props,
};