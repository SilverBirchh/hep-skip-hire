import ReactDatePicker from "react-datepicker";
import { forwardRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { format } from "date-fns";

export default function DatePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="datepicker relative w-40">
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        nextMonthButtonLabel=">"
        previousMonthButtonLabel="<"
        popperClassName="react-datepicker-left"
        customInput={<ButtonInput />}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex items-center justify-between px-2 py-2">
            <span className="text-lg text-gray-700">
              {format(date, "MMMM yyyy")}
            </span>

            <div className="space-x-2">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                type="button"
                className={`
                                            ${
                                              prevMonthButtonDisabled &&
                                              "cursor-not-allowed opacity-50"
                                            }
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              </button>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                type="button"
                className={`
                                            ${
                                              nextMonthButtonDisabled &&
                                              "cursor-not-allowed opacity-50"
                                            }
                                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                                        `}
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}

// @ts-expect-error
// eslint-disable-next-line react/display-name
const ButtonInput = forwardRef(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    // @ts-expect-error
    ref={ref}
    type="button"
    className="inline-flex justify-start w-full text-gray-400 bg-white rounded"
  >
    <input
      style={{
        visibility: "hidden",
        position: "absolute",
        height: 0,
        width: 0,
      }}
      readOnly
      className="hidden"
      name="date"
      value={!value ? "none" : format(new Date(value), "dd MMMM yyyy")}
    />
    {!value ? (
      <span>Delivery date</span>
    ) : (
      <span className="text-black">
        {format(new Date(value), "dd MMMM yyyy")}
      </span>
    )}
  </button>
));
