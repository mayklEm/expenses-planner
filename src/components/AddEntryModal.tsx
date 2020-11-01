import React, {useState, Fragment} from 'react';
import {useRealmApp} from "../RealmApp";
import {useMutation} from "@apollo/client";
import {ADD_ENTRY} from "../graphql/entryMutations";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

const classNames = require('classnames');

library.add(faCircleNotch);

interface Props {
  setShowModal: Function,
}

const AddEntryModal = (props: Props) => {
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    addEntry({
      variables: {
        data: entryData
      }
    }).then(response => {
      console.log(response);
      props.setShowModal(false);
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    <Fragment>

      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"/>
          </div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"/>​

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  Add new entry
                </h3>
                <div className="mt-2">
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

                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit()
                  }}
                  className={classNames("inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5", {
                    'loading': loading
                  })}
                >
                  {loading &&
                    <span className="animate-spin h-5 w-5 mr-3">
                      <FontAwesomeIcon icon={["fas", "circle-notch"]}/>
                    </span>
                  }
                  Add
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={() => {
                    props.setShowModal(false);
                  }}
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  Cancel
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default AddEntryModal;