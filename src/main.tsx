import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Application from './Presentation/Application';

ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
  <React.StrictMode>
    <Application.ApplicationController />
  </React.StrictMode>,
)
