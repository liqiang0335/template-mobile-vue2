import dayjs from "dayjs";

export default function formatTime(time = new Date()) {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
}
