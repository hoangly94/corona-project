import React from "react";
import ReactDOM from "react-dom";

import * as IndexTemplate from "./components/templates/index";
import * as Cell from "./components/atoms/cell";
import * as Row from "./components/atoms/row";
import * as Image from "./components/atoms/image";
import * as List from "./components/atoms/list";
import * as LinkElement from "./components/atoms/link";
import * as Base from "./components/_settings";
import * as Logo from "./components/molecules/logo";
import * as Menu from "./components/molecules/menu";

const _SCREEN_WIDTH = Base.Width.M;

const _LOGO = {
  url: '/uploads/logo.png',
};

const _API_DEFAULT = 'https://api.covid19api.com/';
const _API = {
  summary: _API_DEFAULT + 'summary',
};

const _INDEX = {
  url: '/',
};

const menu_list_lis_element_link_props = {
  margin: Base.MarginLeft.L1,
  theme: Base.Theme.DARK,
  fontStyle: Base.FontStyle.BOLD,
  size: LinkElement.Size.S,
};

const menu = {
    $list: {
      $lis: [
        {
          $element: {
            $link: {
              ...menu_list_lis_element_link_props,
              text: 'Our Services',
              url: '',
            },
          },
        },
        {
          $element: {
            $link: {
              ...menu_list_lis_element_link_props,
              text: 'FAQ',
              url: '',
            },
          },
        },
        {
          $element: {
            $link: {
              ...menu_list_lis_element_link_props,
              text: 'Contact',
              url: '',
            },
          },
        },
      ],
    },
};


const headerBar = {
  style: {
    backgroundColor: '#18b8d8',
  },
  $innerBlock: {
    padding: Base.Padding.S,
    $logo: {
      size: Logo.Size.S1,
      $image: {
        src: _LOGO.url,
      },
    },
    $menu: menu,
  }
};

const summaryTemplate = {
};

const indexTemplateProps = {
  // width: Base.Width.M,
  requestUrl: _API.summary,
  $header: {
    $headerBar: headerBar,
  },
  $summary: summaryTemplate,
}

const App = () => (
  <IndexTemplate.Element {...indexTemplateProps} />
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);