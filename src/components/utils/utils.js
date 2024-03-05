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
  