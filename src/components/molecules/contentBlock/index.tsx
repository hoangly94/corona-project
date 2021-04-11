import * as React from 'react'
import Classnames from 'classnames'
import * as LinkButton from "../../atoms/linkButton";
import * as Title from "../../atoms/title";
import * as Text from "../../atoms/text";
import * as Block from "../../atoms/block";
import styles from './styles.css';
import * as Base from "../../_settings";

enum Type {
  DEFAULT = 'content-block',
  SLIDER = 'slider-content-block',
}

enum Size {
  SMALL = 'item-small',
  MEDIUM = 'item-medium',
  LARGE = 'item-large',
}

type Props = Base.Props & Block.Props & {
  type?: Type,
  size?: Size,
  $title?: Title.Props,
  $description?: Text.Props,
  $button?: LinkButton.Props,
};

const titleElement = (title: Title.Props = {}, theme: Base.Theme) => {
  if (!title)
    return null;

  const titleProps = {
    ...title,
    theme: theme,
  }

  return <Title.Element {...titleProps} />;
}

const descriptionElement = ($description: Text.Props = {}, theme: Base.Theme) => {
  if (!$description)
    return null;

  const descriptionProps = {
    ...$description,
    theme: theme,
  }

  return <Text.Element {...descriptionProps} />;
}

const linkButtonElement = ($button: LinkButton.Props = {}, theme: Base.Theme) => {
  if (!$button)
    return null;

  const linkButtonProps = {
    type: LinkButton.Type.TRANSPARENT_BACKGROUND_BORDER,
    style: {
      marginTop: '8px',
    },
    ...$button,
    theme: theme,
  }

  return <LinkButton.Element {...linkButtonProps} />;
}

const Element = (props: Props) => {
  const {
    type = Type.DEFAULT,
    size = Size.MEDIUM,
    theme = Base.Theme.DEFAULT,
    $title,
    $description,
    $button,
  } = props;

  //create props
  const blockProps = {
    ...props,
    classNames: Classnames(
      styles[type],
      styles[size],
    ),
  };

  return (
    <Block.Element {...blockProps}>
      {titleElement($title, theme)}
      {descriptionElement($description, theme)}
      {linkButtonElement($button, theme)}
    </Block.Element>
  );
}

export {
  Element,
  Type,
  Size,
  Props,
};
