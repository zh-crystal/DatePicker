(function () {
	var datepicker = {};

	datepicker.getMonthData = function (year, month) {
		var ret = [];

		if (!year || !month) {
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}

		var firstDayWeekDay = (new Date(year, month - 1, 1)).getDay();
		if (firstDayWeekDay == 0) firstDayWeekDay = 7;

		var lastDateOfLastMonth = (new Date(year, month - 1, 0)).getDate();

		var preMonthDayCount = firstDayWeekDay - 1;

		var lastDate = (new Date(year, month, 0)).getDate();

        for (var i = 1; i <= 7 * 6; i++) {
            var date = i - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) thisMonth = 12;
            if (thisMonth === 13) thisMonth = 1;

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            });
        }

        return {
            year: year,
            month: month,
            days: ret
        };
	};

	window.datepicker = datepicker;
}) ();