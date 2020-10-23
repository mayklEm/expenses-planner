import React, {useContext, useEffect} from 'react'
// import Entry from './Entry'
// import EntryForm from './EntryForm'
import { withRouter } from "react-router"
import useEntries from "../graphql/useEntries";
import { useLazyQuery, gql } from '@apollo/client';
import { ErrorStatusContext } from "./ErrorHandler";

interface Props {

}

// interface iEntry {
//   _id: string,
//   date: Date,
//   title: String,
//   amount: number
// }

const Home = (props: Props) => {
  const { setErrorStatusCode } = useContext(ErrorStatusContext)
  const [fetch, {loading, error, data }] = useLazyQuery(useEntries(), {
    onCompleted: () => {
      console.log('completed with data:', data);
    },
    onError: () => {
      setErrorStatusCode(401);
    }
  });

  useEffect(() => {
    fetch();
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
        {/*{entries.map((entry: iEntry) =>*/}
        {/*    <Entry key={entry._id} title={entry.title} amount={entry.amount} balance={6666} />*/}
        {/*)}*/}
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
