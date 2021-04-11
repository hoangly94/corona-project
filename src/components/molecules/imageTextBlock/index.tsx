import * as React from 'react'
import Classnames from 'classnames'
import * as Image from "../../atoms/image";
import * as Text from "../../atoms/text";
import * as Block from "../../atoms/block";
import styles from './styles.css';
import * as Base from '../../_settings'

enum Type {
  DEFAULT = 'image-text-block',
}

type Props = Base.Props & {
  type?: string,
  $image?: Image.Props,
  $text?: Text.Props,
}

const Element = (props: Props) => {
  const { 
    type = Type.DEFAULT, 
    $image, 
    $text,
  } = props
  
  //create props
  const blockProps = Base.mapProps(props);
  const imageProps = Base.mapProps($image);
  const textProps = Base.mapProps($text);

  return (
    <Block.Element {...blockProps}>
      <Image.Element {...imageProps}/>
    </Block.Element>
  )
}

export {
  Element,
  Type,
  Props,
};
