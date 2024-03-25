import { StaticImageData } from "next/image";
import React from "react";

export interface IAppContextType{
  isMobile: boolean,
  setIsMobile?: (isMobile: boolean)=>void
}

export interface faqListType{
    id:number, 
    question:string,
    answer:string
}

export interface MarketingAutomationListType{
  id:number,
  question:JSX.Element,
  answer: string,
  backgroundColor:string,
  boxshadow:string,
  border:string,
  count:JSX.Element,
}

export interface IMousePosition {
  x: number | null;
  y: number | null;
}


export interface ICompanyMarqueeBandList {
  id:number,
  media:string | StaticImageData
}

export interface IStageCardObjectProps {
  title: string;
  description: string;
  listTitle: string;
  list: string[];
}
export interface IOurclientCardObjectProps {
  list: any;
}

export interface IHomeglassCardObjectProps{
  icon:React.ReactNode;
  title:React.ReactNode;
  description: string;
  isHoverStyle?:boolean;
}


export interface ICaseStudiesListProps{
  id:number,
  title: string,
  description: string,
  tags: string[],
  link: string,
  image: any
}

export interface ICommonIconDataPrps{
  id:number,
  title: string,
  description: string,
  image: string
}

export interface ICommonIconEdtechDataPrps{
  id:number,
  title: string,
  description: string,
  image: string
}
export interface IDifferentIconDataProps{
  id:number,
  title: string,
  description: string,
  image: any,
  titleWidth: string
}

export interface IDifferentIconEdtechDataProps{
  id:number,
  title: string,
  description: string,
  image: any,
  titleWidth: string
}

export interface ISwipeableDataProps{
  id:number,
  title: string,
  description: string,
  icon: any,
}


