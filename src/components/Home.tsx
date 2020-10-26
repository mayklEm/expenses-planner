import React, {useEffect, useState} from 'react'
// import Entry from './Entry'
import {withRouter} from "react-router"
import {ENTRIES} from "../graphql/useEntries";
import {useLazyQuery, gql, useMutation} from '@apollo/client';
import dayjs from "dayjs";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {DELETE_ENTRY} from "../graphql/entryMutations";

library.add(faTrashAlt);
library.add(faPencilAlt);

const classNames = require('classnames');

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
  const [deleteEntry] = useMutation(DELETE_ENTRY);


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
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-xs md:text-sm">
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

              <div className="entries-container border rounded divide-y">
                {entriesByDate(entries, recurringEntries, month).map((entry: iEntry) => {
                  currentBalance = entry.type === 'income' ? currentBalance + entry.amount : currentBalance - entry.amount;
                  return (
                    <React.Fragment key={entry._id}>
                      <div className="p-2">

                        <div className="flex justify-between">
                          <div className="w-2/12">
                            {dayjs(entry.date).format('D.M.')}
                          </div>
                          <div className="w-6/12">
                            {entry.title}
                          </div>
                          <div className={classNames("w-2/12", "text-right", {
                            "text-red-500": entry.type === 'expense',
                            "text-green-500": entry.type === 'income'
                          })}>
                            {entry.type === 'expense' ? '-' : '+'}{entry.amount}
                          </div>
                          <div className="w-2/12 text-right">
                            {currentBalance}
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2 text-xs mt-2">
                          <button
                            onClick={() => {
                              deleteEntry({
                                variables: {
                                  query: {_id: entry._id}
                                }
                              }).then(response => {
                                console.log(response);
                              });
                            }}
                            className="border-b border-red-500 text-red-500"
                          >
                            <FontAwesomeIcon icon={["far", "trash-alt"]}/> Delete
                          </button>
                          <button
                            className="border-b border-indigo-500 text-indigo-500"
                          >
                            <FontAwesomeIcon icon={["fas", "pencil-alt"]} className=""/> Edit
                          </button>
                        </div>
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

export default withRouter(Home)
