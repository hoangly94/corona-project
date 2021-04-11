import * as React from 'react'
import Classnames from 'classnames'
import * as Block from "../../atoms/block";
import * as Section from "../../atoms/section";
import * as TextBlock from "../../molecules/textBlock";
import * as Base from "../../_settings";
import styles from './styles.css';

enum Type {
  DEFAULT = 'text-section',
}

type Props = Section.Props & {
  $innerBlock: Block.Props & {
    type?: Type,
    $text: TextBlock.Props,
  }
}

const Element = (props: Props) => {
  const {
    type = Type.DEFAULT,
    $innerBlock,
  } = props;

  //create props
  const sectionProps = props;

  const innerBlockProps = {
    ...$innerBlock,
    classNames: Classnames(
      styles[type],
    ),
  };
  const textBlockProps = $innerBlock.$text;

  return (
    <Section.Element {...sectionProps}>
      <Block.Element {...innerBlockProps}>
        <TextBlock.Element {...textBlockProps} />
      </Block.Element>
    </Section.Element>
  )
}

Element.defaultProps = {
}

export {
  Element,
  Type,
  Props,
};
