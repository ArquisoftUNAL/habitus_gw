const generateFakeStatisticsMeasureData = (is_yn) => {
    const report = {
        resume: null,
        history: null,
        streaks: null,
        days_frequency: null
    }
    const MAX_VALUE = 100;
    if (!is_yn) {
        const toDayTotal = Math.random() * MAX_VALUE;
        const toDayProgess = Math.random() * toDayTotal;

        const weekTotal = Math.random() * MAX_VALUE;
        const weekProgess = Math.random() * weekTotal;

        const monthTotal = Math.random() * MAX_VALUE;
        const monthProgess = Math.random() * monthTotal;

        const semesterTotal = Math.random() * MAX_VALUE;
        const semesterProgess = Math.random() * semesterTotal;

        const yearTotal = Math.random() * MAX_VALUE;
        const yearProgess = Math.random() * yearTotal;

        report.resume = {
            toDay: {
                percentage: toDayProgess / toDayTotal,
                progress: toDayProgess,
                remaining: toDayTotal - toDayProgess
            },
            week: {
                percentage: weekProgess / weekTotal,
                progress: weekProgess,
                remaining: weekTotal - weekProgess
            },
            month: {
                percentage: monthProgess / monthTotal,
                progress: monthProgess,
                remaining: monthTotal - monthProgess
            },
            semester: {
                percentage: semesterProgess / semesterTotal,
                progress: semesterProgess,
                remaining: semesterTotal - semesterProgess
            },
            year: {
                percentage: yearProgess / yearTotal,
                progress: yearProgess,
                remaining: yearTotal - yearProgess
            }
        }

        report.history = {
            day: {
                data: []
            },
            week: {
                data: []
            },
            month: {
                data: []
            },
            semester: {
                data: []
            },
            year: {
                data: []
            }
        }

        report.streaks = {
            data: [
                {
                    start_date: "2020-01-01",
                    end_date: "2020-01-31",
                    quantity: 31
                },
                {
                    start_date: "2020-02-01",
                    end_date: "2020-02-29",
                    quantity: 29
                }
            ]
        }

        report.days_frequency = {
            data: [
                {
                    year: 2020,
                    month: 1,
                    week_day: 1,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 2,
                    week_day: 2,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 3,
                    week_day: 4,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 5,
                    week_day: 1,
                    quantity: 4
                },
            ]
        }
    } else {
        const total = Math.floor(Math.random() * MAX_VALUE);
        report.resume = {
            month: Math.floor(Math.random() * total),
            semester: Math.floor(Math.random() * total),
            year: Math.floor(Math.random() * total)
        }

        report.history = {
            week: {
                data: []
            },
            month: {
                data: []
            },
            semester: {
                data: []
            },
            year: {
                data: []
            }
        }

        report.streaks = {
            data: [
                {
                    start_date: "2020-01-01",
                    end_date: "2020-01-31",
                    quantity: 31
                },
                {
                    start_date: "2020-02-01",
                    end_date: "2020-02-29",
                    quantity: 29
                }
            ]
        }

        report.days_frequency = {
            data: [
                {
                    year: 2020,
                    month: 1,
                    week_day: 1,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 2,
                    week_day: 2,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 3,
                    week_day: 4,
                    quantity: 4
                },
                {
                    year: 2020,
                    month: 5,
                    week_day: 1,
                    quantity: 4
                },
            ]
        }
    }

    return report;
}

module.exports = { generateFakeStatisticsMeasureData };