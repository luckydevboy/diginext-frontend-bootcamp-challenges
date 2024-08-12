const workingHoursProxy = require("../working-hours");

describe("workingHoursProxy", () => {
  it("should group working hours by day of the week and sort them correctly", () => {
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

    const expectedOutput = {
      Friday: ["9:00-16:00"],
      Saturday: ["9:00-14:00", "16:00-22:00"],
      Sunday: ["9:00-22:00"],
    };

    const result = workingHoursProxy(workingHours);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle an empty array", () => {
    const workingHours = [];
    const expectedOutput = {};

    const result = workingHoursProxy(workingHours);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle multiple entries for the same day and sort them correctly", () => {
    const workingHours = [
      {
        day_of_week: "Monday",
        start_time: "13:00",
        end_time: "18:00",
      },
      {
        day_of_week: "Monday",
        start_time: "9:00",
        end_time: "12:00",
      },
      {
        day_of_week: "Monday",
        start_time: "19:00",
        end_time: "22:00",
      },
    ];

    const expectedOutput = {
      Monday: ["9:00-12:00", "13:00-18:00", "19:00-22:00"],
    };

    const result = workingHoursProxy(workingHours);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle non-consecutive working hours", () => {
    const workingHours = [
      {
        day_of_week: "Tuesday",
        start_time: "14:00",
        end_time: "18:00",
      },
      {
        day_of_week: "Tuesday",
        start_time: "9:00",
        end_time: "11:00",
      },
    ];

    const expectedOutput = {
      Tuesday: ["9:00-11:00", "14:00-18:00"],
    };

    const result = workingHoursProxy(workingHours);
    expect(result).toEqual(expectedOutput);
  });
});
