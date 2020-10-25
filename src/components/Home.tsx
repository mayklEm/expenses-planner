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


  // const initialEntries: Array<iEntry> = [
  //   {
  //     date: new Date("2020-02-16"),
  //     title: "Entry 1",
  //     value: -111
  //   },
  //   {
  //     date: new Date("2020-03-20"),
  //     title: "Entry 2",
  //     value: -111
  //   }
  // ]
  // const initial: number = 2000
  // const [balance, setBalance] = useState(initial)
  // // const [entries, setEntries] = useState(initialEntries)
  //
  // let newBalance = balance
  //
  // let currentMonth = new Date("2000-01-01")
  //
  // const formatter = new Intl.DateTimeFormat('en', { month: 'long' })
  //
  // const sortedEntries = entries.sort((a, b) => {
  //   if (a.date > b.date) return 1;
  //   if (a.date < b.date) return -1;
  //   return 0;
  // })
  //
  // console.log('sortedEntries', sortedEntries)


  return (
    <div>
      <label>
        Initial balance:
        <input
          name="balance"
          value={initialBalance}
          type="number"
          onChange={(event) => {
            setInitialBalance(parseInt(event.target.value) || initialBalance)}
          }
          className="border"
        />
      </label>
      <label>
        Number of months:
        <input
          name="months"
          value={numberOfMonths}
          min="1"
          type="number"
          onChange={(event) => {
            setNumberOfMonths(parseInt(event.target.value) || numberOfMonths)
          }}
          className="border"
        />
      </label>
      {generatedMonths.map((month) => {
        return (
          <div key={month.format('MM-YYYY')}>
            {month.format('MMMM YYYY')}
            {entriesByDate(entries, recurringEntries, month).map((entry: iEntry) => {
              currentBalance = entry.type === 'income' ? currentBalance + entry.amount : currentBalance - entry.amount;
              return (
                <React.Fragment key={entry._id}>
                  <div>
                    {dayjs(entry.date).format('D.M.YYYY')} - {entry.title}: {entry.amount} (balance: {currentBalance})
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        );
      })}

      {/*<EntryForm*/}
      {/*    handleSubmit={(title, value) => {*/}
      {/*      const randomMonth = Math.floor(Math.random() * Math.floor(11)) + 1*/}
      {/*      console.log('randomMonth', randomMonth)*/}
      {/*      setEntries([...entries, {*/}
      {/*        date: new Date(`2020-${randomMonth}-20`),*/}
      {/*        title: title,*/}
      {/*        value: value*/}
      {/*      }])*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <textarea readOnly={true} value={JSON.stringify(entries)}></textarea>*/}
      {/*  <div className="container py-2 mt-4 mb-4">*/}
      {/*    {entries.sort((a, b) => {*/}
      {/*      if (a.date > b.date) return 1;*/}
      {/*      if (a.date < b.date) return -1;*/}
      {/*      return 0;*/}
      {/*    }).map((entry, index) => {*/}
      {/*      newBalance += entry.value*/}
      {/*      const nextMonth = isNextMonth(currentMonth, entry.date)*/}
      {/*      currentMonth = nextMonth ? nextMonth : currentMonth*/}

      {/*      return (*/}
      {/*        <React.Fragment key={index}>*/}
      {/*          {nextMonth &&*/}
      {/*            <MonthGroup title={formatter.format(nextMonth)}></MonthGroup>*/}
      {/*          }*/}

      {/*          <Entry {...entry} balance={newBalance}></Entry>*/}
      {/*        </React.Fragment>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </div>*/}
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
