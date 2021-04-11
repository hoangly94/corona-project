import * as Config from './config';
import styles from './_base.css';
import Classnames from 'classnames'

enum Theme {
    DEFAULT = 'white-theme',
    DARK = 'dark-theme',
}

enum Width {
    NONE = '',
    FULL = 'width-full',
    S2 = 'width-s2',
    S1 = 'width-s1',
    S = 'width-s',
    M = 'width-m',
    L = 'width-l',
    L1 = 'width-l1',
    L2 = 'width-l2',
}

enum Height {
    NONE = '',
    FIT_SCREEN = 'height-fit-screen',
    PX_100 = 'height-100',
    PX_150 = 'height-150',
    PX_200 = 'height-200',
    PX_300 = 'height-300',
    PX_400 = 'height-400',
    PX_500 = 'height-500',
    PX_600 = 'height-600',
}

enum Padding {
    NONE = '',
    S2 = 'padding-s2',
    S1 = 'padding-s1',
    S = 'padding-s',
    M = 'padding-m',
    L = 'padding-l',
    L1 = 'padding-l1',
    L2 = 'padding-l2',
}

enum Margin {
    NONE = '',
    S2 = 'margin-s2',
    S1 = 'margin-s1',
    S = 'margin-s',
    M = 'margin-m',
    L = 'margin-l',
    L1 = 'margin-l1',
    L2 = 'margin-l2',
}

enum MarginTop {
    NONE = '',
    S2 = 'margin-top-s2',
    S1 = 'margin-top-s1',
    S = 'margin-top-s',
    M = 'margin-top-m',
    L = 'margin-top-l',
    L1 = 'margin-top-l1',
    L2 = 'margin-top-l2',
}

enum MarginRight {
    NONE = '',
    S2 = 'margin-right-s2',
    S1 = 'margin-right-s1',
    S = 'margin-right-s',
    M = 'margin-right-m',
    L = 'margin-right-l',
    L1 = 'margin-right-l1',
    L2 = 'margin-right-l2',
}

enum MarginBottom {
    NONE = '',
    S2 = 'margin-bottom-s2',
    S1 = 'margin-bottom-s1',
    S = 'margin-bottom-s',
    M = 'margin-bottom-m',
    L = 'margin-bottom-l',
    L1 = 'margin-bottom-l1',
    L2 = 'margin-bottom-l2',
}

enum MarginLeft {
    NONE = '',
    S2 = 'margin-left-s2',
    S1 = 'margin-left-s1',
    S = 'margin-left-s',
    M = 'margin-left-m',
    L = 'margin-left-l',
    L1 = 'margin-left-l1',
    L2 = 'margin-left-l2',
}

enum Flex {
    NONE = '',
    START = 'flex-start',
    END = 'flex-end',
    CENTER = 'flex-center',
    BETWEEN = 'flex-between',
    AROUND = 'flex-around',
    EVENLY = 'flex-evenly',
}

enum Visibility {
    NONE = '',
    VISIBLE = 'visible',
    HIDDEN = 'hidden',
    DISABLE = 'disable',
}

enum TextAlign {
    NONE = '',
    LEFT = 'text-align-left',
    CENTER = 'text-align-center',
    RIGHT = 'text-align-right',
}

enum Color {
    NONE = '',
    WHITE = 'color-white',
    BLACK = 'color-black',
    BLUE = 'color-blue',
    YELLOW = 'color-yellow',
    GREEN = 'color-green',
    RED = 'color-red',
}

enum BackgroundColor {
    NONE = '',
    WHITE = 'background-color-white',
    BLACK = 'background-color-black',
    BLUE = 'background-color-blue',
    YELLOW = 'background-color-yellow',
    GREEN = 'background-color-green',
    RED = 'background-color-red',
}

enum FontStyle {
    NONE = '',
    BOLD = 'bold',
    ITALIC = 'italic',
    BOLD_ITALIC = 'bold-italic',
}

type Props = {
    theme?: Theme,
    width?: Width,
    height?: Height,
    padding?: Padding,
    margin?: Margin | MarginTop | MarginRight | MarginBottom|MarginLeft,
    flex?: Flex,
    visibility?: Visibility,
    textAlign?: TextAlign,
    color?: Color,
    backgroundColor?: BackgroundColor,
    fontStyle?: FontStyle,

    children?: React.ReactNode,
    classNames?: string,
    style?: { [key: string]: any; },
}

const mapProps = (
    props: Props = {},
    elementStyles: { [key: string]: any } = {},
    elementClasses: string[] = [],
) => {
    const {
        width = Width.NONE,
        height = Height.NONE,
        padding = Padding.NONE,
        margin = Margin.NONE,
        flex = Flex.NONE,
        visibility = Visibility.NONE,
        textAlign = TextAlign.NONE,
        color = Color.NONE,
        backgroundColor = BackgroundColor.NONE,
        fontStyle = FontStyle.NONE,

        classNames,
        style,
    } = props;
    
    const elementClassNames = elementClasses.map(elementClass => elementStyles[elementClass]);
    const classProps = {
        className: Classnames(
            styles[width],
            styles[height],
            styles[padding],
            styles[margin],
            styles[flex],
            styles[visibility],
            styles[textAlign],
            styles[color],
            styles[backgroundColor],
            styles[fontStyle],
            ...elementClassNames,
            classNames,
        ),
        style: style,
    };
    return classProps;
}

export {
    Theme,
    Width,
    Height,
    Padding,
    Margin,
    MarginTop,
    MarginRight,
    MarginBottom,
    MarginLeft,
    Flex,
    Visibility,
    TextAlign,
    Color,
    BackgroundColor,
    FontStyle,
    Props,
    Config,
    mapProps,
};


