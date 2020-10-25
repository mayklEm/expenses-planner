import React, {useContext, useEffect, useState} from 'react'
// import Entry from './Entry'
// import EntryForm from './EntryForm'
import {withRouter} from "react-router"
import {ENTRIES} from "../graphql/useEntries";
import {useLazyQuery, gql} from '@apollo/client';
import dayjs from "dayjs";

interface Props {

}

interface iEntry {
  _id: string,
  date: string,
  title: String,
  type: String,
  amount: number,
  is_recurring: boolean,
}

const Home = (props: Props) => {
  const [initialBalance, setInitialBalance] = useState(10000);
  const [numberOfMonths, setNumberOfMonths] = useState<number>(4);
  const [entries, setEntries] = useState([]);
  const [recurringEntries, setRecurringEntries] = useState([]);
  const [generatedMonths, setGeneratedMonths] = useState<Array<dayjs.Dayjs>>([]);

  let currentBalance = initialBalance;

  const [fetch, {loading, error, data}] = useLazyQuery(ENTRIES, {
    onCompleted: (result) => {
      console.log('completed with data:', result);
      setEntries(result.entries);
      setRecurringEntries(result.recurringEntries);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    let months = [];
    for (let i = 0; i < numberOfMonths; i++) {
      months.push(dayjs().add(i, 'month').startOf('month'));
    }
    setGeneratedMonths(months);
  }, [numberOfMonths]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-xs md:text-sm">
      <div className="max-w-2xl w-full">
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <label htmlFor="balance" className="block text-sm font-medium leading-5 text-gray-700">
              Initial balance
            </label>
            <input
              name="balance"
              id="balance"
              defaultValue={initialBalance}
              type="number"
              onChange={(event) => {
                setInitialBalance(parseInt(event.target.value) || initialBalance)
              }}
              className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="months" className="block text-sm font-medium leading-5 text-gray-700">
              Number of months
            </label>
            <input
              name="months"
              id="months"
              defaultValue={numberOfMonths}
              min="1"
              type="number"
              onChange={(event) => {
                setNumberOfMonths(parseInt(event.target.value) || numberOfMonths)
              }}
              className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        {generatedMonths.map((month) => {
          return (
            <React.Fragment key={month.format('MM-YYYY')}>

              <div className="mt-8">
                {month.format('MMMM YYYY')}
              </div>

              <div className="grid grid-cols-12 gap-1">
                {entriesByDate(entries, recurringEntries, month).map((entry: iEntry) => {
                  currentBalance = entry.type === 'income' ? currentBalance + entry.amount : currentBalance - entry.amount;
                  return (
                    <React.Fragment key={entry._id}>
                      <div className="col-span-2">
                        {dayjs(entry.date).format('D.M.')}
                      </div>
                      <div className="col-span-6">
                        {entry.title}
                      </div>
                      <div className="col-span-2">
                        {entry.amount}
                      </div>
                      <div className="col-span-2">
                        {currentBalance}
                      </div>

                    </React.Fragment>
                  );
                })}
              </div>

            </React.Fragment>
          );
        })}
      </div>
    </div>
  )
}

const entriesByDate = (entries: Array<iEntry>, recurringEntries: Array<iEntry>, date: dayjs.Dayjs) => {
  const filteredByDate = entries.filter((entry) => {
    return dayjs(entry.date).startOf('month').isSame(date.startOf('month'));
  });

  const result = recurringEntries.map((entry) => {
    const recurringDate = dayjs(entry.date).month(date.get('month')).year(date.get('year')).toISOString();
    return {...entry, date: recurringDate}
  });

  return sortEntriesByDate(filteredByDate.concat(result));
}

const sortEntriesByDate = (entries: Array<iEntry>) => {
  return entries.sort((a, b) => {
    if (a.date > b.date) return 1;
    if (a.date < b.date) return -1;
    return 0;
  })
}

interface iProps {
  title: String
}

// const MonthGroup = ({ title }: iProps) => {
//   return (
//     <div className="row">
//
//       <div className="col-2 d-flex py-2">
//         <div className="float-right text-muted">{title}</div>
//       </div>
//
//
//       <div className="col-auto text-center flex-column d-none d-sm-flex">
//
//         <div className="row h-100">
//           <div className="col border-right">&nbsp;</div>
//           <div className="col">&nbsp;</div>
//         </div>
//       </div>
//
//       <div className="col-7 pb-2 pt-2">
//
//       </div>
//     </div>
//   )
// }
//
// const isNextMonth = (currentMonth: Date, newDate: Date) => {
//   if (currentMonth.getMonth() === newDate.getMonth() && currentMonth.getFullYear() === newDate.getFullYear()) {
//     return false;
//   }
//   return new Date(newDate.getFullYear(), newDate.getMonth(), 1);
// }

export default withRouter(Home)
