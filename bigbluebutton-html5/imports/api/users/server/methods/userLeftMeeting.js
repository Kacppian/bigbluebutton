import Logger from '/imports/startup/server/logger';
import Users from '/imports/api/users';
import { extractCredentials } from '/imports/api/common/server/helpers';
import { attendanceOnLeave } from './submitAttendance';

export default function userLeftMeeting() { // TODO-- spread the code to method/modifier/handler
  // so we don't update the db in a method
  const { meetingId, requesterUserId } = extractCredentials(this.userId);

  const selector = {
    meetingId,
    userId: requesterUserId,
  };

  try {
    const User = Users.findOne(selector);
    const numberAffected = Users.update(selector, { $set: { loggedOut: true } });

    if (numberAffected) {
      attendanceOnLeave(meetingId, User.extId);
      Logger.info(`user left id=${requesterUserId} meeting=${meetingId}`);
    }
  } catch (err) {
    Logger.error(`leaving dummy user to collection: ${err}`);
  }
}
