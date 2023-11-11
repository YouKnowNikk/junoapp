import React, { useState } from 'react';
import { Table } from 'antd';
import { format } from 'date-fns';
import './userTable.css'
const UserTable = ({ data }) => {
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };
  const formatDate = (date) => {
    return format(new Date(date), 'dd MMM, yyyy');
  };
  
  const columns = [
    {
        title: 'User',
        dataIndex: 'username',
        key: 'user',
        render: (text, record) => (
          <div>
            <p>{record.username}</p>
            <p>{record.useremail}</p>
          </div>
        ),
        fixed: 'left',
      },
      {
        title: 'Risk Level',
        dataIndex: 'risklevel',
        key: 'risklevel',
        render: (text) => (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                backgroundColor:
                  text === 'low'
                    ? '#006540'
                    : text === 'medium'
                    ? '#88670f'
                    : text === 'high'
                    ? '#7d2424'
                    : '',
                borderRadius: '50%',
                marginRight: '10px',
              }}
            />
            <div style={{ color: text === 'low' ? '#006540' : text === 'medium' ? '#88670f' : text === 'high' ? '#7d2424' : '' }}>
              {text}
            </div>
          </div>
        ),
        sorter: (a, b) => {
          const riskLevelOrder = { low: 1, medium: 2, high: 3 };
          return riskLevelOrder[a.risklevel.toLowerCase()] - riskLevelOrder[b.risklevel.toLowerCase()];
        },
        sortOrder: sortedInfo.columnKey === 'risklevel' && sortedInfo.order,
      },
    {  
        title: 'Trigger Reason',
        dataIndex: 'triggerReason', 
        key: 'triggerReason',
      },
    {
      title: 'In Queue For',
      dataIndex: 'inQueueFor',
      key: 'inQueueFor',
      sorter: (a, b) => a.inQueueFor - b.inQueueFor,
      sortOrder: sortedInfo.columnKey === 'inQueueFor' && sortedInfo.order,
    },
    {
        title: 'Date Added On',
        dataIndex: 'dateAddedOn',
        key: 'dateAddedOn',
        sorter: (a, b) => new Date(a.dateAddedOn) - new Date(b.dateAddedOn),
        sortOrder: sortedInfo.columnKey === 'dateAddedOn' && sortedInfo.order,
        render: (date) => formatDate(date), 
    },
    {
        title: 'Previously Reviewed',
        dataIndex: 'previousReviewed',
        key: 'previousReviewed',
        render: (text, record) => (
          <div style={{textAlign:'center'}}>
            <p>{text}</p>
            {record.reviewedDate && <p>{formatDate(record.reviewedDate)}</p>}
          </div>
        ),
      },
  ];

  return (
    <Table
    className='table'
        style={{maxWidth:'98%',fontSize:'0.4rem',marginLeft:'2%'}}
      dataSource={data}
      columns={columns}
      onChange={handleChange}
      pagination={false}
      scroll={{x:true}}
     
      responsive={{
        lg: 768,  
        md: 768,  
        sm: 468,  
      }}
    />
  );
};

export default UserTable;
