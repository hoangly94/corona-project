import * as React from 'react'
import Classnames from 'classnames'
import * as Section from "../../atoms/section";
import * as Block from "../../atoms/block";
import * as ImageText from "../../molecules/imageText";
import * as Base from "../../_settings";
import styles from './styles.css';

enum Type {
  DEFAULT = 'image-section',
}

type Props = Base.Props & {
  $innerBlock: Block.Props & {
    type?: Type,
    $imageTexts: ImageText.Props[],
  },
}

const Element = (props: Props) => {
  const {
    $innerBlock,
  } = props;

  //create props
  const sectionProps = props;

  const innerBlock = {
    ...$innerBlock,
    flex: Base.Flex.BETWEEN,
    classNames: Classnames(
      styles[$innerBlock.type ?? Type.DEFAULT],
    ),
  };

  const imageElements = $innerBlock ? $innerBlock.$imageTexts?.map(mapImageElements) : null;

  return (
    <Section.Element {...sectionProps}>
      <Block.Element {...innerBlock}>
        {imageElements}
      </Block.Element>
    </Section.Element>
  )
}

const mapImageElements = ($imageTextBlock: ImageText.Props) => {
  const imageTextBlockProps = $imageTextBlock;

  return (
    <ImageText.Element {...imageTextBlockProps}>
    </ImageText.Element>);
}

export {
  Element,
  Type,
  Props,
};
