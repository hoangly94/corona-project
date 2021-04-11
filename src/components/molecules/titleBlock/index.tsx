import * as React from 'react'
import Classnames from 'classnames'
import * as Title from "../../atoms/title";
import * as Text from "../../atoms/text";
import * as Block from "../../atoms/block";
import styles from './styles.css';

enum Type {
  DEFAULT = 'title-block',
}

type Props = Block.Props & {
  type?: Type,
  $title?: Title.Props,
  $description?: Text.Props,
}

const Element = (props: Props) => {
  const {
    type = Type.DEFAULT,
    $title,
    $description,
  } = props

  //create props
  const blockProps = {
    ...props,
    classNames: Classnames(
      styles[type],
    )
  };

  const titleProps = {
    ...$title,
  };
  const descriptionProps = {
    ...$description,
  };


  return (
    <Block.Element {...blockProps}>
      <Title.Element {...titleProps}/>
      <Text.Element {...descriptionProps}/>
    </Block.Element>
  )
}

export {
  Element,
  Type,
  Props,
};
