import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css';
import * as Base from "../../_settings";
import * as Block from "../../atoms/block";
import * as Logo from "../../molecules/logo";
import * as Menu from "../../molecules/menu";

enum Type {
  DEFAULT = 'header-bar',
}

type Props = Base.Props & {
  type?: Type,
  $innerBlock: Block.Props & {
    $logo?: Logo.Props,
    $menu?: Menu.Props,
  }
};

const Element = (props: Props) => {
  //create props
  const {
    type = Type.DEFAULT,
    theme = Base.Theme.DEFAULT,
    $innerBlock,
  } = props;

  const blockProps = {
    ...props,
    classNames:Classnames(
      styles[type],
      styles[theme],
  ),
  }
  const innerBlockProps = {
    flex: Base.Flex.BETWEEN,
    ...$innerBlock,
  }

  const logoProps = {
    ...$innerBlock.$logo,
  }

  const menuProps = {
    ...$innerBlock.$menu,
  }


  return (
    <Block.Element {...blockProps}>
      <Block.Element {...innerBlockProps}>
        <Logo.Element {...logoProps} />
        <Menu.Element {...menuProps} />
      </Block.Element>
    </Block.Element>
  )
}




export {
  Element,
  Type,
  Props,
};
