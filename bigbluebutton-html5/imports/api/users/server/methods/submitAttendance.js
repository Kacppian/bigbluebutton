import { HTTP } from 'meteor/http';

const URL = 'https://class.ingeniumedu.com/submitLiveClassAttendance';

export function attendanceOnJoin(meetingId, userId) {
  try {
    HTTP.call('POST', URL, {
      data: { meeting_id: meetingId, client_user_id: userId },
    });
  } catch (e) {
    console.log('Join attendance errored out');
    console.log(e);
  }
  console.log('Joined');
}

export function attendanceOnLeave(meetingId, userId) {
  try {
    HTTP.call('POST', URL, {
      data: { meeting_id: meetingId, client_user_id: userId },
    });
  } catch (e) {
    console.log('Leave attendance errored out');
    console.log(e);
  }
  console.log('left');
}
