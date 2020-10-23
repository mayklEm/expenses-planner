import React, {useState} from 'react'
import {withRouter} from "react-router"
import {ADD_ENTRY} from "../graphql/entryMutations";
import {useMutation} from '@apollo/client';
import {useRealmApp} from "../RealmApp";

interface Props {

}

const AddEntry = (props: Props) => {
  const app = useRealmApp();
  const [addEntry, {data}] = useMutation(ADD_ENTRY);
  const [entryData, setEntryData] = useState({
    title: '',
    amount: 0,
    type: 'expense',
    date: new Date(),
    is_recurring: false,
    user: {
      link: app.currentUser._id
    }
  });

  const handleSubmit = () => {
    addEntry({
      variables: {
        data: entryData
      }
    }).then(response => {
      console.log(response);
    });
   };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const target = event.target;
    const name = target.name;
    let value: any;

    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      value = target.checked;
    } else if (target.type === 'date') {
      value = new Date(target.value);
    } else {
      value = target.value;
    }

    setEntryData({...entryData, [name]: value})
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Add entry
          </h2>
        </div>
        <form className="mt-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <input
                name="title"
                value={entryData.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <div className="col-span-2">
              <input
                name="date"
                value={entryData.date.toISOString().split('T')[0]}
                onChange={handleInputChange}
                type="date"
                placeholder="Date"
                className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <div className="col-span-1">
              <input
                name="amount"
                value={entryData.amount}
                onChange={handleInputChange}
                type="number"
                min="0"
                placeholder="Amount"
                className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <div className="col-span-1">
              <select
                name="type"
                value={entryData.type}
                onChange={handleInputChange}
                placeholder="Type"
                className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>

            <div className="col-span-2 flex items-start">
              <div className="items-center h-5">
                <input
                  onChange={handleInputChange}
                  checked={entryData.is_recurring}
                  id="is_recurring"
                  name="is_recurring"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
              </div>
              <div className="ml-3 text-sm leading-5">
                <label htmlFor="is_recurring" className="font-medium text-gray-700">Is recurring</label>
              </div>
            </div>

          </div>


          <div className="mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit()
              }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default withRouter(AddEntry)
