
import './Meeting.css'
import { useEffect,useState} from 'react'
import { observer } from 'mobx-react';
import GlobalState from '../global/globalState';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import MeetingsStore from '../global/MeetingsStore';
function Meeting({ i }) {
//   const [color, setColor] = useState();
//   useEffect(() => {
//     ccolor()

//   }, []);
    // Function to calculate the difference in days between two dates
    // function getDaysDifference(date2) {
    //     // Convert the dates to milliseconds
    //     const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    //     const millisecondsDate1 = new Date();;
    //     const millisecondsDate2 = date2.getTime();

    //     // Calculate the difference in days
    //     const difference = Math.abs(millisecondsDate1 - millisecondsDate2);
    //     const daysDifference = Math.round(difference / oneDay);

    //     return daysDifference;
    // }
    // function color()
    // {

    //     // console.log("Difference in days:", differenceInDays);

    //     if (getDaysDifference(MeetingsStore.meetings[i].dateTime,) == 0) {
    //         return "red";
    //     }
    //     else{ return "blue";}
    // }

    const getMeetingColor = (dateTime) => {
        const today = new Date();
        const meetingDate = new Date(dateTime);
    
        const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
       if(  diffDays<0) 
        return 'non'
    else
        if (diffDays===1) {
          return 'red'; // היום
        } else if (diffDays <= 7) {
          return 'orange'; //השבוע
        } 
        else if (diffDays >=7) 
        {
          return 'green'; // עתיד
        
        }
     
      };
    return (
        <>
            <Card elevation={3} sx={{ maxWidth: 200 }} className={`meeting ${getMeetingColor(MeetingsStore.meetings[i].dateTime)}`}>
                <div>{MeetingsStore.meetings[i].serviceType}</div><br />
                <div>{MeetingsStore.meetings[i].dateTime}</div><br />
                <div>{MeetingsStore.meetings[i].clientName}</div><br />
                <div>{MeetingsStore.meetings[i].clientPhone}</div><br />
                <div>{MeetingsStore.meetings[i].clientEmail}</div>
            </Card>
        </>
    )
}

export default Meeting