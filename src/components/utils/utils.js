import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';
import { split } from 'postcss/lib/list';

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
