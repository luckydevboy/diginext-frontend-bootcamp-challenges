/**
 * Try the challenge with the Object.groupBy method
 *
 * @param {array} workingHours An array of working hours in the format provided at the end of file.
 *
 * @returns object with the comment format inside the function.
 */
const workingHoursProxy = (workingHours) => {
  const result = {};

  workingHours.forEach((hour) => {
    if (!result[hour.day_of_week]) {
      result[hour.day_of_week] = [`${hour.start_time}-${hour.end_time}`];
    } else {
      result[hour.day_of_week].push(`${hour.start_time}-${hour.end_time}`);
    }

    result[hour.day_of_week] = sortWorkingHours(result[hour.day_of_week]);
  });

  return result;
};

const workingHours = [
  {
    day_of_week: "Saturday",
    start_time: "16:00",
    end_time: "22:00",
  },
  {
    day_of_week: "Saturday",
    start_time: "9:00",
    end_time: "14:00",
  },
  {
    day_of_week: "Friday",
    start_time: "9:00",
    end_time: "16:00",
  },
  {
    day_of_week: "Sunday",
    start_time: "9:00",
    end_time: "22:00",
  },
];

const sortWorkingHours = (workingHours) => {
  const compareHours = (a, b) => {
    const aHour = Number(a.split("-")[0].split(":")[0]);
    const bHour = Number(b.split("-")[0].split(":")[0]);
    const aMinute = Number(a.split("-")[0].split(":")[1]);
    const bMinute = Number(b.split("-")[0].split(":")[1]);

    if (aHour !== bHour) {
      return aHour - bHour;
    } else {
      return aMinute - bMinute;
    }
  };

  return workingHours.sort(compareHours);
};

module.exports = workingHoursProxy;
