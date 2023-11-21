import React, { useState } from 'react'
import './monitoring.css'
import { CloseCircleOutlined } from '@ant-design/icons'
import Close from '../CloseComp.js/Close';
import { Input, Select } from 'antd';
import UserTable from '../userTable/UserTable';
const { Search } = Input;
function Monitoring() {
    const userArray = [
        {
            username: "JohnDoe",
            useremail: "john.doe@example.com",
            risklevel: "low",
            triggerReason: "ip change",
            inQueueFor: 3,
            dateAddedOn: new Date("2023-11-10"),
            previousReviewed: "yes",
            reviewedDate: new Date("2023-11-13"),
            status: "complete",
        },
        {
            username: "JaneSmith",
            useremail: "jane.smith@example.com",
            risklevel: "medium",
            triggerReason: "fifo",
            inQueueFor: 5,
            dateAddedOn: new Date("2023-11-08"),
            previousReviewed: "no",
            reviewedDate: null,
            status: "pending",
        },
        {
            username: "BobJohnson",
            useremail: "bob.johnson@example.com",
            risklevel: "high",
            triggerReason: "ip change",
            inQueueFor: 2,
            dateAddedOn: new Date("2023-11-09"),
            previousReviewed: "yes",
            reviewedDate: new Date("2023-11-11"),
            status: "complete",
        },
        {
            username: "AliceWilliams",
            useremail: "alice.williams@example.com",
            risklevel: "medium",
            triggerReason: "fifo",
            inQueueFor: 4,
            dateAddedOn: new Date("2023-11-07"),
            previousReviewed: "yes",
            reviewedDate: new Date("2023-11-12"),
            status: "complete",
        },
        {
            username: "CharlieBrown",
            useremail: "charlie.brown@example.com",
            risklevel: "low",
            triggerReason: "ip change",
            inQueueFor: 1,
            dateAddedOn: new Date("2023-11-10"),
            previousReviewed: "no",
            reviewedDate: null,
            status: "pending",
        },
        {
            username: "EvaDavis",
            useremail: "eva.davis@example.com",
            risklevel: "high",
            triggerReason: "fifo",
            inQueueFor: 6,
            dateAddedOn: new Date("2023-11-06"),
            previousReviewed: "yes",
            reviewedDate: new Date("2023-11-14"),
            status: "complete",
        },
    ];

    const [pending, setPending] = useState(false);
    const [completed, setCompleted] = useState(false)
    const [showclose, setShowClose] = useState(false)
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedRiskLevel, setSelectedRiskLevel] = useState("");
    const [selectedTriggerReason, setSelectedTriggerReason] = useState("");
    // const [filteredUserArray, setFilteredUserArray] = useState([]);
    const setPendingState = () => {
        setPending(!pending)
        setCompleted(false)
    }
    const setCompletedState = () => {
        setCompleted(!completed);
        setPending(false)
    }
    const ShowCloseSetter = () => {
        setShowClose(true);
        setOverlayVisible(true);
    }
    const closeCloseSetter = () => {
        setShowClose(false);
        setOverlayVisible(false);
    }
    const handleRiskLevelChange = (value) => {
        setSelectedRiskLevel(value);
    };
    const handleTriggerReasonChange = (value) => {
        setSelectedTriggerReason(value);
    };
    const handleSearch = (value) => {
        setSearchText(value);
    };
    let filteredArray = userArray.filter((user) => {
        const matchesCompleted = completed ? user.status === 'complete' : true;
        const matchesPending = pending ? user.status === 'pending' : true;
        const matchesRiskLevel = selectedRiskLevel !== '' ? user.risklevel === selectedRiskLevel : true;
        const matchesTriggerReason = selectedTriggerReason !== '' ? user.triggerReason === selectedTriggerReason : true;
        const matchesUsername = user.username.toLowerCase().includes(searchText.toLowerCase());

        return matchesCompleted && matchesPending && matchesRiskLevel && matchesTriggerReason && matchesUsername;
    });

    

    return (
        <>
            <div>
                {overlayVisible && <div className="overlay" />}
                <h2 className='title'>Monitoring</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '2%', marginTop: '2%' }}>
                    <div style={{ display: 'flex' }} >
                        <p className='offSet' style={{ marginLeft: '10%', color: pending ? 'blue' : 'grey', textDecoration: pending ? 'underline' : 'none', textUnderlineOffset: '37px', textDecorationThickness: '4px', zIndex: '5', cursor: 'pointer' }} onClick={setPendingState}>Pending</p>
                        <p className='offSet' style={{ marginLeft: '10%', color: completed ? 'blue' : 'grey', textDecoration: completed ? 'underline' : 'none', textUnderlineOffset: '37px', textDecorationThickness: '4px', zIndex: '5', cursor: 'pointer' }} onClick={setCompletedState}>Completed</p>
                    </div>
                    <div style={{ backgroundColor: '#f6d8d8', marginRight: '2%', borderRadius: '10px' }} onClick={ShowCloseSetter} >
                        <p style={{ margin: '2px', padding: '6px', color: '#d13b3b', cursor: 'pointer' }}><CloseCircleOutlined /> Close account</p>
                    </div>

                </div>
                <hr style={{ marginLeft: '3%', marginTop: '2%' }} />
                {showclose ? <Close closeCloseSetter={closeCloseSetter} /> : null}
                <div className='selectionDiv'>
                    <Search
                        className="search"
                        placeholder="search user"
                        value={searchText}
                        onChange={(e) => handleSearch(e.target.value)}
                        style={{ width: 300, marginBottom: '2%' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div >
                            <Select
                                className='selection'
                                defaultValue=""
                                style={{ width: 140 }}
                                onChange={handleTriggerReasonChange}
                                options={[
                                    { value: '', label: 'Trigger-Reason' },
                                    { value: 'Hard Flag', label: 'Hard Flag' },
                                    { value: 'Temp Flag', label: 'Temp Flag' },
                                    { value: 'Restricted Unflag', label: 'Restricted Unflag' },
                                    { value: 'unflag', label: 'unflag' },
                                    { value: 'Reviewd', label: 'Reviewd' },

                                ]}
                            />
                        </div>
                        <div >
                            <Select

                                defaultValue=""
                                style={{ width: 140, marginLeft: '20%' }}
                                onChange={handleRiskLevelChange}
                                options={[
                                    { value: '', label: 'Risk Level' },
                                    { value: 'high', label: 'High' },
                                    { value: 'medium', label: 'Medium' },
                                    { value: 'low', label: 'Low' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '4%' }}>
                    <UserTable data={filteredArray} />
                </div>

            </div>
        </>
    )
}

export default Monitoring