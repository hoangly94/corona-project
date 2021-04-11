import * as React from 'react'
import axios from 'axios';
import Classnames from 'classnames'
import baseStyles from '../../_settings/_base.css';
import * as Base from '../../_settings';
import styles from './styles.css';

import * as ImageListSection from '../../organisms/imageListSection';
import * as ImageLinkListSection from '../../organisms/imageLinkListSection';
import * as LinkButton from '../../atoms/linkButton';
import * as Section from '../../atoms/section';
import * as Block from '../../atoms/block';
import * as Select from '../../atoms/select';
import *  as BannerSection from '../../organisms/bannerSection';
import *  as TitleBlock from '../../molecules/titleBlock';
import *  as IndexTemplate from '../index';


enum Type {
  DEFAULT = 'summary',
}

type Props = Base.Props & {
  summary?: IndexTemplate.SummaryData | null;
}

const Element = (props: Props) => {
  const {
    summary,
  } = props;

  //create class props
  const sectionProps = {
    ...props,
    classNames: Classnames(
      styles[Type.DEFAULT],
    )
  };

  const globalTitleBlockProps = {
    $title: {
      text: (summary? summary.Title : 'Global') + ' Summary',
    },
  }

  const globalSummaryBlockData = [
    { value: summary?.NewConfirmed, title: 'New Confirmed', color: Base.BackgroundColor.BLUE },
    { value: summary?.NewDeaths, title: 'New Deaths', color: Base.BackgroundColor.RED },
    { value: summary?.NewRecovered, title: 'New Recovered', color: Base.BackgroundColor.GREEN },
    { value: summary?.TotalConfirmed, title: 'Total Confirmed', color: Base.BackgroundColor.BLUE },
    { value: summary?.TotalDeaths, title: 'Total Deaths', color: Base.BackgroundColor.RED },
    { value: summary?.TotalRecovered, title: 'Total Recovered', color: Base.BackgroundColor.GREEN },
  ];
  const globalSummaryBlockElementList = handleGlobalSummaryBlock(globalSummaryBlockData);

  return (
    <Section.Element {...sectionProps}>
      <TitleBlock.Element {...globalTitleBlockProps} />
      <Block.Element>
        {globalSummaryBlockElementList}
      </Block.Element>
    </Section.Element>
  )
}

const handleGlobalSummaryBlock = (globalSummaryBlockData: IndexTemplate.GlobalSummaryBlockData[]) => {
  return globalSummaryBlockData.map((data: IndexTemplate.GlobalSummaryBlockData) => {
    const titleBlockProps = {
      $title: {
        text: `${data.title}: ${numberWithCommas(data.value)}`,
        theme: Base.Theme.DARK,
        style: {
          fontSize: '18px',
        },
      },
      backgroundColor: data.color,
      padding: Base.Padding.L,
      style: {
        float: 'left',
        fontWeight: '100',
        width: '300px',
        maxWidth: '100%',
        marginTop: '18px',
        marginRight: '18px',
        boxSizing: 'borderBox',
      },
    };
    return <TitleBlock.Element {...titleBlockProps} />
  });
}

function numberWithCommas(x:number) {

  return x? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0';
}


export {
  Element,
  Props,
};


