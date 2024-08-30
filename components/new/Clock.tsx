"use client";

import {
  formattedDay,
  formattedDate,
  formattedTime,
} from "@/lib/dateTimeFormatter";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setDate(now);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* <div className='tabular-nums px-4 text-base text-center'>
                <p suppressHydrationWarning>{formattedDay(date)}</p>
                <p suppressHydrationWarning>{formattedDate(time)}</p>
                <p suppressHydrationWarning>{formattedTime(time, true)}</p>
            </div> */}

      {/* <div className='tabular-nums flex flex-col items-center justify-center p-4 rounded-lg text-white max-w-sm'>
                <p suppressHydrationWarning className='text-xl font-semibold '>
                    {formattedDay(date)}
                </p>
                <p suppressHydrationWarning className='text-lg font-medium '>
                    {formattedDate(time)}
                </p>
                <p suppressHydrationWarning className='text-2xl font-bold '>
                    {formattedTime(time, true)}
                </p>
            </div> */}

      {/* <div className='flex flex-col'>
                <div className='tabular-nums text-xs text-white'>{formattedDay(date)}</div>
                <div className='text-xl text-white'>{formattedTime(time)}</div>
                <div className='text-xs text-white'>{formattedDate(date)}</div>
            </div> */}

      {/* <div className="tabular-nums flex flex-col items-center justify-center p-2 rounded-xl shadow-lg max-w-sm select-none"> */}
      <div className="tabular-nums flex flex-col items-start justify-center max-w-sm select-none">
        {/* <p
          suppressHydrationWarning
          className="xl:text-xl md:text-lg text-base font-bold mb-2 text-primary-50"
        >
          {formattedDay(date)}
        </p> */}
        <p
          suppressHydrationWarning
          className="xl:text-lg md:text-lg text-sm font-medium mb-2 text-white"
        >
          {formattedDate(time)}
        </p>
        {/* <p
          suppressHydrationWarning
          className="xl:text-2xl md:text-xl text-lg font-extrabold text-primary-200"
        >
          {formattedTime(time, true)}
        </p> */}
      </div>
    </div>
  );
}
