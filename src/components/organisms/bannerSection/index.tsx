import * as React from 'react'
import Classnames from 'classnames'
import * as Block from "../../atoms/block";
import * as Title from "../../atoms/title";
import * as Section from "../../atoms/section";
import * as Slider from "../../molecules/slider";
import * as Base from "../../_settings";
import styles from './styles.css';

enum Type {
  DEFAULT = 'banner',
}

type Props = Section.Props & {
  $innerBlock: Block.Props & {
    type?: Type,
    $title?: Title.Props,
    $slider: Slider.Props,
  },
}

const Element = (props: Props) => {
  const {
    $innerBlock,
  } = props;

  //create props
  const sectionProps = props;

  const innerBlockProps = {
    ...$innerBlock,
    classNames: Classnames(
      styles[$innerBlock.type ?? Type.DEFAULT],
    ),
  };

  const sliderProps = {
    ...$innerBlock.$slider,
    height: $innerBlock.height,
  };

  return (
    <Section.Element {...sectionProps}>
      <Block.Element {...innerBlockProps}>
        <Slider.Element {...sliderProps} />
      </Block.Element>
    </Section.Element>
  )
}

export {
  Element,
  Type,
  Props,
};
