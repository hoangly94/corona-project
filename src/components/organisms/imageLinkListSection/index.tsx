import * as React from 'react'
import Classnames from 'classnames'
import * as Section from "../../atoms/section";
import * as Block from "../../atoms/block";
import * as ImageLinkList from "../../molecules/imageLinkList";
import * as Base from "../../_settings";
import styles from './styles.css';

enum Type {
  DEFAULT = 'image-link-list-section',
}

type Props = Base.Props & {
  $innerBlock: Block.Props & {
    type?: Type,
    $imageLinkList: ImageLinkList.Props[],
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

  const imageLinkListElements = $innerBlock ? $innerBlock.$imageLinkList?.map(mapImageElementMapping) : null;

  return (
    <Section.Element {...sectionProps}>
      <Block.Element {...innerBlock}>
        {imageLinkListElements}
      </Block.Element>
    </Section.Element>
  )
}

const mapImageElementMapping = ($imageTextBlock: ImageLinkList.Props) => {
  const imageTextBlockProps = $imageTextBlock;

  return (
    <ImageLinkList.Element {...imageTextBlockProps}>
    </ImageLinkList.Element>);
}

export {
  Element,
  Type,
  Props,
};
