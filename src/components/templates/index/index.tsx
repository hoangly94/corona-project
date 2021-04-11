import * as React from 'react'
import axios from 'axios';
import Classnames from 'classnames'
import baseStyles from '../../_settings/_base.css';
import * as Base from '../../_settings';
import styles from './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import * as  Header from '../../atoms/header';
import * as HeaderBar from '../../organisms/headerBar';

import * as Footer from '../../atoms/footer';
import * as FooterMenu from '../../organisms/footerMenu';

import * as Main from '../../organisms/main';
import * as LinkButton from '../../atoms/linkButton';
import * as Section from '../../atoms/section';
import * as Block from '../../atoms/block';
import * as Select from '../../atoms/select';
import * as SelectOption from '../../atoms/select/option';

import *  as SummaryTemplate from '../summary';


type Props = Base.Props & {
  requestUrl: string;
  $header: Header.Props & {
    $headerBar: HeaderBar.Props,
  },
  $summary: SummaryTemplate.Props,
}

const Element = (props: Props) => {
  const {
    $header,
    $summary,
  } = props;

  const [summary, setSummary] = React.useState<SummaryData | null>(null);
  const [responseData, setResponseData] = React.useState<ResponseData | null>(null);
  const [countryDataMap, setCountryDataMap] = React.useState<{ [key: string]: Country }>({});

  React.useEffect(drawSummary(props, setSummary, setResponseData, setCountryDataMap), []);

  //create class props
  const headerProps = {
    ...$header,
  }

  const headerBarProps = {
    ...$header.$headerBar,
  }

  const summaryTemplateProps = {
    summary: summary,
  }

  const selectOptionElement = handleSelectOptionElement(responseData?.Countries, countryDataMap, setSummary);

  return (
    <React.Fragment>
      <Header.Element {...headerProps}>
        <HeaderBar.Element {...headerBarProps} />
      </Header.Element>
      {selectOptionElement}
      <SummaryTemplate.Element {...summaryTemplateProps} />
    </React.Fragment>
  )
}

const handleSelectChange = (
  countryDataMap: { [key: string]: Country },
  setSummary: React.Dispatch<React.SetStateAction<SummaryData | null>>) => {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    const country = countryDataMap[event.target.value];
    setSummary(covertToSummaryData(country.Country, country));
  }
}

const handleSelectOptionElement = (
  countries: Country[] | undefined,
  countryDataMap: { [key: string]: Country },
  setSummary: React.Dispatch<React.SetStateAction<SummaryData | null>>
) => {
  const optionElementList = countries?.map((country: Country) => {
    return {
      value: country.CountryCode,
      key: country.CountryCode,
      text: country.Country,
    };
  });

  const selectProps = {
    $options: optionElementList,
    onChange: handleSelectChange(countryDataMap, setSummary),
    style:{
      margin: 'auto',
      width: '300px',
      display: 'block',
      marginTop: '38px',
    },
  };

  return <Select.Element {...selectProps} />;
}

const drawSummary = (props: Props,
  setSummary: React.Dispatch<React.SetStateAction<SummaryData | null>>,
  setResponseData: React.Dispatch<React.SetStateAction<ResponseData | null>>,
  setCountryDataMap: React.Dispatch<React.SetStateAction<{ [key: string]: Country }>>) => {
  const {
    requestUrl,
  } = props;

  return () => {
    handleRequest(requestUrl, setSummary, setResponseData, setCountryDataMap);
  }
}

const handleRequest = (url: string,
  setSummary: React.Dispatch<React.SetStateAction<SummaryData | null>>,
  setResponseData: React.Dispatch<React.SetStateAction<ResponseData | null>>,
  setCountryDataMap: React.Dispatch<React.SetStateAction<{ [key: string]: Country }>>) => {
  axios.get<ResponseData>(url)
    .then(res => {

      setResponseData(res.data);

      setSummary(covertToSummaryData('Global', res.data.Global));

      const countryDataMap = res.data.Countries.reduce((map, obj) => {
        map[obj.CountryCode] = obj;
        return map;
      }, {} as { [key: string]: Country });

      setCountryDataMap(countryDataMap);
    })
    .catch(error => {
      console.log(error);
    });
}

const covertToSummaryData = (title: string, data: Global | Country): SummaryData => {
  return {
    Title: title,
    Date: data.Date,
    NewConfirmed: data.NewConfirmed,
    NewDeaths: data.NewDeaths,
    NewRecovered: data.NewRecovered,
    TotalConfirmed: data.TotalConfirmed,
    TotalDeaths: data.TotalDeaths,
    TotalRecovered: data.TotalRecovered,
  };
}

interface SummaryData {
  Title: string;
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface GlobalSummaryBlockData {
  value: any,
  title: string,
  color: Base.BackgroundColor,
}

interface ResponseData {
  Global: Global;
  Countries: Country[];
  Date: string;
}

interface Global {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

interface Country {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export {
  Element,
  GlobalSummaryBlockData,
  SummaryData,
  Country,
  Global,
};


