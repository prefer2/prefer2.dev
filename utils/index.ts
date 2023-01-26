import { parseISO, format } from "date-fns";
import ko from "date-fns/locale/ko";

export const formatDate = (dateString: string) => {
  return format(parseISO(dateString), "PPP", { locale: ko });
};

export const formatMonthDay = (dateString: string) => {
  return format(parseISO(dateString), "MMM dd");
};
