import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Student from './Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <table border={1}>
      <tr>
        <th>Student Name </th>
        <th>Student Spi </th>
      </tr>
      <Student />
    </table>

    <div class="card" style={{width: "18rem"}}>
      <div class="card-header">
        Faculty
      </div>
      <ul class="list-group list-group-flush">
        <App/>
        
      </ul>
    </div>

  </StrictMode>
)
