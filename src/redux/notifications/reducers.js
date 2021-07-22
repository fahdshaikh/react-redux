import { SUCCESS, ERROR } from "./types";
import { notificationSettings } from "../../config";
import { toast } from "react-toastify";

const INITIAL_STATE = {};

const NotificationReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SUCCESS:
      return toast.success(payload.msg, notificationSettings);

    case ERROR:
      return toast.error(payload.msg, notificationSettings);

    default:
      return state;
  }
};

export default NotificationReducer;
