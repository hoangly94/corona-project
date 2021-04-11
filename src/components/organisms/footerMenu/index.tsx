import * as React from 'react'
import Classnames from 'classnames'
import * as Block from "../../atoms/block";
import * as InnerBlock from "../../atoms/innerBlock";
import * as List from "../../atoms/list";
import * as Link from "../../atoms/link";
import * as Section from "../../atoms/section";
import * as TextBlock from "../../molecules/textBlock";
import * as Base from "../../_settings";
import styles from './styles.css';

enum Type {
  DEFAULT = 'footer-menu',
}

type Props = Section.Props & {
  $innerBlock: InnerBlock.Props & {
    type?: Type,
    $blocks: MenuBlockProps[],
  }
}

type MenuBlockProps = Block.Props & {
  $link?: Link.Props,
  $list?: List.Props<Link.Props>,
};

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

  const menuBlockElement = $innerBlock.$blocks.map(menuBlockElementMapping);
  return (
    <Section.Element {...sectionProps}>
      <InnerBlock.Element {...innerBlockProps}>
        {menuBlockElement}
      </InnerBlock.Element>
    </Section.Element>
  )
}

const menuBlockElementMapping = ($block: MenuBlockProps) => {
  const blockProps = $block;
  const titleProps = $block.$link;
  const listProps = $block.$list;
  // const menuListElement = $block.$items.$items.map(menuListElementMapping);

  return (
    <Block.Element {...blockProps}>
      <Link.Element {...titleProps} />
      <List.Element {...listProps}/>
    </Block.Element>
  );
}

// const menuListElementMapping = ($item: Link.Props) => {
//   const linkProps = $item;
//   return <Link.Element {...linkProps} />;
// }

export {
  Element,
  Type,
  Props,
};
