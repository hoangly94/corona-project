 import * as React from 'react'
import Classnames from 'classnames'
import styles from './styles.css';
import { Icon } from '../../atoms/icon'
import * as DropDown from '../../molecules/dropdown'
import * as Link from '../../atoms/link'

const Type = {
  DEFAULT: 'menu',
  // VERTICAL: 'logo-vertical',
}

const Theme = {
  DEFAULT: '',
}

const Size = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type?: string,
  size?: string,
  data?: { [key: string]: any; }[],
  className?: string,
}

const Element = (props: Props) => {
  const { type=Type.DEFAULT, size=Size.MEDIUM, data, className } = props

  //create props
  const classProps: string = Classnames(
    styles[type],
    styles[size],
    className
  )

  // const dropdownMapper = (items: { [key: string]: any; }[]) => {
  //   const result = items.map(item => {
  //     if (item.chilren) {
  //       return (
  //         <Link url={item.url}>
  //           {item.hasIcon ? <Icon src={item.src} /> : ''}
  //           {item.text}
  //         </Link>
  //       )
  //     }
  //     return (
  //       <Link url={item.url}>
  //         {item.hasIcon ? <Icon src={item.src} /> : ''}
  //         {item.text}
  //       </Link>
  //     )
  //   });
  //   return result;
  // }

  return (
    <nav className={classProps} role="navigation">
      {/* {dropdownMapper(data)} */}
    </nav>
  )
}

export {
  Element,
  Type,
  Size,
  Props,
};
