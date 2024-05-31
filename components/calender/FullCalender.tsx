import React, { useRef, useEffect, useState } from "react";
import Calendar from "tui-calendar";
import "tui-calendar/dist/tui-calendar.css";

const FullCalendar = () => {
  const calendarRef = useRef(null);
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    if (calendarRef.current) {
      const newCalendar = new Calendar(calendarRef.current, {
        defaultView: "week",
        taskView: true,
        scheduleView: true,
        useCreationPopup: true,
        useDetailPopup: true,
        template: {
          time: (schedule) => {
            return `${schedule.start
              .toTimeString()
              .slice(0, 5)} - ${schedule.end.toTimeString().slice(0, 5)}`;
          },
        },
        schedule: {
          onClick: (e) => {
            const { schedule } = e;
            const title = prompt("Update event title:", schedule.title);
            if (title !== null) {
              calendar.updateSchedule(schedule.id, schedule.calendarId, {
                title,
              });
            }
          },
          onBeforeDelete: (e) => {
            if (!window.confirm("Do you want to delete the event?")) {
              e.preventDefault();
            }
          },
        },
      });

      setCalendar(newCalendar);

      return () => {
        newCalendar.destroy();
      };
    }
  }, []);

  const addEvent = () => {
    if (!calendar) return;
    const title = prompt("Enter event title:");
    if (title) {
      calendar.createSchedules([
        {
          id: Math.random().toString(36).substr(2, 9),
          calendarId: "1",
          title,
          category: "time",
          dueDateClass: "",
          start: new Date(),
          end: new Date(),
        },
      ]);
    }
  };

  return (
    <div>
      <div ref={calendarRef}></div>
      <button onClick={addEvent}>Add Event</button>
    </div>
  );
};

export default FullCalendar;
