import { useState,useEffect } from "react";
import { getFormattedDateTime } from "@/shared/utils/date";

type DateTime = {
    month: number;
    day: number;
    dayOfWeek: string;
    ampm: string;
    hours: number;
    minutes: string | number;
}

export const useCurrentDateTime = () => {
    const [dateTime, setDateTime] = useState<DateTime>(getFormattedDateTime());

    useEffect(() => {
        // 현재 시각 삽입 -> 다음 초까지 남은 시간 계산(eg. 24초) -> 24초뒤부터 setInterval
        setDateTime(getFormattedDateTime());

        const now = new Date();
        const untilNextMinute = (60- now.getSeconds()) * 1000;

        const timer = setTimeout(()=> {
            setDateTime(getFormattedDateTime());
            const interval = setInterval(()=>{
                setDateTime(getFormattedDateTime());
            }, 60000);

            return () => {
                clearInterval(interval);
            };
        }, untilNextMinute);

        return () => clearTimeout(timer);
    }, []);

    return dateTime;
};