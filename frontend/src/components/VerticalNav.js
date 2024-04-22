import React from 'react'

export default function VerticalNav() {
  return (
    <div className="mx-3">
      <ul className="nav flex-column bg-warning bg-gradient mx-auto" >

        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Link with href
          </a>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-secondary btn-lg">Large button</button>
        </li>
      </ul>
    </div >
  )
}
