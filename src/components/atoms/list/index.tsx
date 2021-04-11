import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css'
import * as Base from '../../_settings'
import * as Li from './li'
import * as Link from "../../atoms/link";
import * as LinkButton from "../../atoms/linkButton";
import * as Dropdown from '../../molecules/dropdown'


enum Type {
  VERTICAL = 'list-vertical',
  HORIZONTAL = 'list-horizontal',
}

type Props<T> = Base.Props & {
  type?: Type,
  $lis?: Li.Props<T>[],
}

const Element = <T extends Link.Props | LinkButton.Props | Dropdown.Props>(props: Props<T>): React.ReactElement => {
  const {
    type = Type.HORIZONTAL,
    theme = Base.Theme.DEFAULT,
    $lis,
  } = props;

  //create props
  const listProps = Base.mapProps(props, styles, [type, theme]);

  const childrenElement = $lis?.map(mapChildrenElement);

  return (
    <ul {...listProps}>{childrenElement}</ul>
  )
}

const mapChildrenElement = <T extends Link.Props | LinkButton.Props | Dropdown.Props>($li: Li.Props<T>) => {
  const liProps = $li;
  return <Li.Element {...liProps} />
}

export {
  Element,
  Type,
  Props,
};