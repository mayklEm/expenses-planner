import React, {useContext, useEffect, useState} from 'react'
// import Entry from './Entry'
// import EntryForm from './EntryForm'
import {withRouter} from "react-router"
import useEntries from "../graphql/useEntries";
import {useLazyQuery, gql} from '@apollo/client';
import dayjs from "dayjs";

interface Props {

}

interface iEntry {
  _id: string,
  date: Date,
  title: String,
  type: String,
  amount: number,
  is_recurring: boolean,
}

const Home = (props: Props) => {
  let balance = 10000;
  const [entries, setEntries] = useState([]);
  const [generatedMonths, setGeneratedMonths] = useState<Array<dayjs.Dayjs>>([]);
  const [fetch, {loading, error, data}] = useLazyQuery(useEntries(), {
    onCompleted: (result) => {
      console.log('completed with data:', result);
      setEntries(result.entries);
    },
    onError: (error) => {
      console.log(error);
    }
  });

  useEffect(() => {
    fetch();

    let months = [];
    for (let i = 0; i < 4; i++) {
      months.push(dayjs().add(i, 'month').startOf('month'));
    }
    setGeneratedMonths(months);

  }, []);


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
      balance: {balance}
      {generatedMonths.map((month) => {
        return (
          <div key={month.format('MM-YYYY')}>
            {month.format('MMMM YYYY')}
            {filterEntriesByDate(entries, month).map((entry: iEntry) => {
              balance = entry.type === 'income' ? balance + entry.amount : balance - entry.amount;
              return (
                <React.Fragment key={entry._id}>
                  <div>
                    {dayjs(entry.date).format('D.M.YYYY')} - {entry.title}: {entry.amount} (balance: {balance})
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

const filterEntriesByDate = (entries: Array<iEntry>, date: dayjs.Dayjs) => {
  return entries.filter((entry) => {
    return dayjs(entry.date).startOf('month').isSame(date.startOf('month'));
  });
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
