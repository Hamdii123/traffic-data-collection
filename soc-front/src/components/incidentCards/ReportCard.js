import React from 'react'

const ReportCard = (props) => {
  console.log(props.data.username)
  return (
    <div>
    <div class="card border-dark mb-3" style={{"width": "1000px"}}>
      <div class="card-header d-flex justify-content-between">
        <div>{props.data.username}</div>
        <div>{props.data.email}</div>
      </div>
      <div class="card-body text-secondary">
        <h5 class="card-title">{props.data.localisation}</h5>
        <p class="card-text">{props.data.message}</p>
        <div class="card-footer bg-transparent border-dark">{props.data.dateT}</div>
      </div>
    </div>
  </div>
  

  )
}

export default ReportCard