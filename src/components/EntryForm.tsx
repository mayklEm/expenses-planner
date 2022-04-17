import {useState, useEffect} from 'react'
import {useMutation} from "@apollo/client";
import {ADD_ENTRY, UPDATE_ENTRY} from "../graphql/entryMutations";
import {useRealmApp} from "../RealmApp";
import {iEntry} from "../types";

interface Props {
  entry?: iEntry,
  submitFromOutside: boolean,
  onSubmitted?: Function
}

const EntryForm = (props: Props) => {

  const initial = {
    title: props.entry ? props.entry.title : '',
    date: props.entry ? new Date(props.entry.date) : new Date(),
    amount: props.entry ? props.entry.amount : 0,
    type: props.entry ? props.entry.type : 'expense',
    is_recurring: props.entry ? props.entry.is_recurring : false,
  }
  const [state, setState] = useState(initial);

  const [addEntryMutation] = useMutation(ADD_ENTRY);
  const [updateEntryMutation] = useMutation(UPDATE_ENTRY);

  const app = useRealmApp();

  useEffect(() => {
    if (props.submitFromOutside) {
      if (props.entry) {
        updateEntry();
      } else {
        storeEntry();
      }
    }
  }, [props.submitFromOutside]);

  const storeEntry = () => {
    addEntryMutation({
      variables: {
        data: {
          ...state,
          user: {
            link: app.currentUser._id
          }
        }
      }
    }).then(response => {
      if (props.onSubmitted) {
        props.onSubmitted();
      }
      console.log('stored entry:', response);
    });
  }

  const updateEntry = () => {
    updateEntryMutation({
      variables: {
        query: {_id: props.entry?._id},
        set: {
          title: state.title,
          date: state.date,
          amount: state.amount
        }
      }
    }).then(response => {
      if (props.onSubmitted) {
        props.onSubmitted();
      }
      console.log('updated entry:', response);
    });
  }

  return (
    <form className="mt-8">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <input
            name="title"
            value={state.title}
            onChange={(e) => setState({...state, title: e.target.value})}
            placeholder="Title"
            className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        <div className="col-span-2">
          <input
            name="date"
            value={state.date.toISOString().split('T')[0]}
            onChange={(e) => setState({...state, date: new Date(e.target.value)})}
            type="date"
            placeholder="Date"
            className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        <div className="col-span-1">
          <input
            name="amount"
            value={state.amount}
            onChange={(e) => setState({...state, amount: parseFloat(e.target.value)})}
            type="number"
            min="0"
            placeholder="Amount"
            className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
        </div>
        <div className="col-span-1">
          <select
            name="type"
            value={state.type}
            onChange={(e) => setState({...state, type: e.target.value})}
            placeholder="Type"
            className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div className="col-span-2 flex items-start">
          <div className="items-center h-5">
            <input
              name="is_recurring"
              id="is_recurring"
              checked={state.is_recurring}
              onChange={(e) => setState({...state, is_recurring: e.target.checked})}
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
          </div>
          <div className="ml-3 text-sm leading-5">
            <label htmlFor="is_recurring" className="font-medium text-gray-700">Is recurring</label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default EntryForm