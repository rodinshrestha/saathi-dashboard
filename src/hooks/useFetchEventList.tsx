import React from "react";

import { getEventList } from "@/http/get-event-list";
import { EventDataTypes } from "@/types/event-data.types";
import { getApiResponseErrorToast } from "@/utils/get-api-response-error-toast";

const useFetchEventList = () => {
  const [eventData, setEventData] = React.useState<Array<EventDataTypes>>([]);
  const [eventLoader, setEventLoader] = React.useState(false);

  const fetchEventData = React.useCallback((id: number) => {
    setEventLoader(true);
    getEventList(id)
      .then((res) => {
        const { data } = res?.data || {};
        setEventData(data);
      })
      .catch((err) => {
        getApiResponseErrorToast(err);
      })
      .finally(() => {
        setEventLoader(false);
      });
  }, []);

  return { fetchEventData, eventData, eventLoader };
};

export default useFetchEventList;
