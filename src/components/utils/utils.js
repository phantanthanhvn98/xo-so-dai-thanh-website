import React from 'react';
import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';
import { split } from 'postcss/lib/list';
import { codeByTinh } from '@/assets/utils/constants';
import "./loader.css"


export const parseDayofWeek = (dateOfWeek) => {
  if(dateOfWeek === "Monday"){
    return "thu2"
  }else if(dateOfWeek === "Tuesday"){
    return "thu3"
  }else if(dateOfWeek === "Wednesday"){
    return "thu4"
  }else if(dateOfWeek === "Thursday"){
    return "thu5"
  }else if(dateOfWeek === "Friday"){
    return "thu6"
  }else if(dateOfWeek === "Saturday"){
    return "thu7"
  }else{
    return "cn"
  }
}

export function getDayOfWeekVN(date){
    const dayOfWeek = format(date, 'EEEE', { locale: vi });
    return dayOfWeek
}

export function formatDateToDDMMYYYY(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function formatDDMMYYY(date){
  let splits = date.split("-")
  splits = splits.map((item) =>{
    return item.length > 2 ? item : `0${item}`
  })
  return splits.join('-')
}

export function parseDateFromDDMMYYYY(dateString) {
  const [day, month, year] = dateString.split('-');

  const parsedDate = new Date(`${year}-${month}-${day}`);

  return parsedDate;
}

export const tinhToUrl = (item) => {
  return `${item.ten.replaceAll(" ", "-").toLowerCase().normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "")}-${codeByTinh[item.ten]}`
}

export function parseLive(item){
  return item === '' ? 
        <div className="loader">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
          <div className="bar4"></div>
          <div className="bar5"></div>
          <div className="bar6"></div>
          <div className="bar7"></div>
          <div className="bar8"></div>
          <div className="bar9"></div>
          <div className="bar10"></div>
          <div className="bar11"></div>
          <div className="bar12"></div>
        </div>
        : item
}