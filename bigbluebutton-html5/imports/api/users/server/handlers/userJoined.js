import { check } from 'meteor/check';

import addUser from '../modifiers/addUser';
import { attendanceOnJoin } from '../methods/submitAttendance';

export default function handleUserJoined({ body }, meetingId) {
  const user = body;

  check(user, Object);
  attendanceOnJoin(meetingId, user.extId);
  addUser(meetingId, user);
}
