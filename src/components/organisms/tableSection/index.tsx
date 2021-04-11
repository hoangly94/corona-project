import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css';
import * as Section from "../../atoms/section";
import * as Table from "../../molecules/table";
import * as Block from "../../atoms/block";
import * as Base from "../../_settings";

enum Type {
  DEFAULT = 'table',
}

enum Theme {
  DEFAULT = '',
}

type Props = Base.Props & {
  $innerBlock:  Block.Props & {
    type?: Type,
    title?: string,
    $table: Table.Props,
  },
}

const Element = (props: Props) => {
  const { 
    $innerBlock,
  } = props;

  //create props
  const sectionProps = {
    ...props,
    classNames: Classnames(
      styles[$innerBlock.type ?? Type.DEFAULT],
    ),
  }

  const innerBlockProps = {
    ...$innerBlock,
  }

  const tableProps = {
    ...$innerBlock.$table,
    // className: Classnames(
    //   className
    // ),
  }

  return (
    <Section.Element {...sectionProps}>
      <Block.Element {...innerBlockProps}>
        <Table.Element {...tableProps} />
      </Block.Element>
    </Section.Element>
  )
}

Element.defaultProps = {
  type: Type.DEFAULT,
  theme: Theme.DEFAULT,
}

export {
  Element,
  Type,
  Props,
};
