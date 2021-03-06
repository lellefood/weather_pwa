import React from "react";
import moment from "moment";

import style from "./details_hours_style.css"

class DetailsHours extends React.Component{
  getNextHours(currentHour){
    function comesAfterNow(value){
      return currentHour-2 <= value;
    }
    let hours=[0,3,6,9,12,15,18,21];
    let filtered = hours.filter(comesAfterNow);
    let i = 0;

    while(filtered.length<8){
      filtered.push(hours[i])
      i++;
    }
    return filtered;
  }

  render(){
    let nextHours=this.getNextHours(new Date().getHours());
    if(this.props.tomorrow){
      nextHours=this.getNextHours(moment(new Date()).add(24,'h'));
    }
    let nextHoursDivs = nextHours.map((hour) =>
      <div key={hour}>{hour}:00</div>
    );

    return <div id="details-hours">
      {nextHoursDivs}
    </div>
  }
}

export default DetailsHours;