import React from 'react'
import { Link } from 'react-router-dom';
function Overview() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
    <div>
      <div>Overview Dashboard</div>
      <h4>View Monitoring</h4>
      <Link to="/Monitoring">
        <button style={{ marginTop: '20px' }}>Go to Monitoring</button>
      </Link>
    </div>
  </div>
  )
}

export default Overview