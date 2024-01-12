import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import { useNavigate } from 'react-router-dom';


const ReportShow = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/incidents/get")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  return (
    <div>
      <button type="button" class="btn btn-primary d-flex flex-column bd-highlight mt-2 mb-3  ms-5 " onClick={()=>navigate('/')}>Primary</button>
      <div className='container shadow m'>
        <h4>Recent Reports:</h4>
        {data?.length > 0 ? (
          <div className='ps-5 pt-3'>
            {data.map((e) => (
              <ReportCard data={e} key={e.id} />
            ))}
          </div>
        ) : (
          <div className=''>
            <h1>No events</h1>
          </div>
        )}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ReportShow;
