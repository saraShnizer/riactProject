import { observable, makeObservable, action, computed } from 'mobx';
import Swal from 'sweetalert2'


class MeetingsStore{

    meetings = [{}]
  constructor() {
    makeObservable(this, {
      meetings: observable,
      addMeeting: action,
      initMeetings: action
    })
  }
  addMeeting = async (meeting) => {
    const response = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      body: JSON.stringify(meeting),
      headers: {
        "Content-Type": "application/json",
      },

    }
    );

    // console.log(response.status)
    if (response.status === 200) {
      Swal.fire({
        title: "The meeting was scheduled!",
        // text: "You clicked the button!",
        icon: "success"
      });
      this.meetings.push(this.meeting);

    }
    else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "We are sorry, the date or time is already taken!",
      footer: '<a href="#">Try a different date and time</a>'
    });
    }
  }
  initMeetings = async () => {
    console.log("initial2 called")
    const response = await fetch("http://localhost:8787/appointments",
      {
        method: "GET",
      })
    const data = await response.json();
   
      this.meetings = data;
   
    }


  
}
export default new MeetingsStore()