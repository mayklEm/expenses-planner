import React, {useState, Fragment} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import EntryForm from "./EntryForm";
import {iEntry} from "../types";

const classNames = require('classnames');

library.add(faCircleNotch);

interface Props {
  entry?: iEntry,
  setShowModal: Function,
}

const EntryModal = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [shouldSubmitForm, setShouldSubmitForm] = useState(false);

  const submitButtonText = props.entry ? 'Update' : 'Add';
  const headlineText = props.entry ? 'Update entry' : 'Add new entry';

  const handleSubmitClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    setShouldSubmitForm(true);
  };

  const handleClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    props.setShowModal(false);
  };

  const handleSubmitted = () => {
    props.setShowModal(false);
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
                  {headlineText}
                </h3>
                <div className="mt-2">
                  <EntryForm
                    entry={props.entry}
                    submitFromOutside={shouldSubmitForm}
                    onSubmitted={handleSubmitted}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={handleSubmitClick}
                  className={classNames("inline-flex items-center justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5", {
                    'loading': loading
                  })}
                >
                  {loading &&
                    <FontAwesomeIcon className="animate-spin h-5 w-5 mr-3" icon={["fas", "circle-notch"]}/>
                  }
                  {submitButtonText}
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  onClick={handleClose}
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

export default EntryModal;