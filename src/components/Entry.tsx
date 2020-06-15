import React, { ReactElement } from 'react'

interface Props {
  title: String,
  value: number,
  balance: number
}

export default function Entry({ title, value, balance }: Props): ReactElement {
  return (
    <div className="row">
      <div className="col-2 d-flex py-2">
        <div className="float-right text-muted">Jan 9th</div>
      </div>


      <div className="col-auto text-center flex-column d-none d-sm-flex">
        <h5 className="m-2">
          <span className="badge badge-pill bg-light border">&nbsp;</span>
        </h5>
        <div className="row h-100">
          <div className="col border-right">&nbsp;</div>
          <div className="col">&nbsp;</div>
        </div>
      </div>

      <div className="col-7 pb-2 pt-2">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-6 p-2">
              <div className="text-muted">{title}</div>
            </div>
            <div className="col-3 p-2">
              <div className="float-right text-muted">{value}</div>
            </div>
            <div className="col-3 p-2 border-left">
              <div className="text-right">{balance}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
