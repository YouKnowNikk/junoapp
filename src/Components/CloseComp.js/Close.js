import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Close.css'
const portalRoot = document.getElementById('close-account')
function Close(props) {
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [closer, setCloser] = useState(false);
    const [note, setNote] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        updateFormValidity();
    }, );

    const updateFormValidity = () => {
        const isEmailValid = email.trim() !== '';
        const isReasonValid = reason.trim() !== '';
        const isNoteValid = note.trim() !== '';
        setIsFormValid(isEmailValid && isReasonValid && isNoteValid && closer);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        updateFormValidity();
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
        updateFormValidity();
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
        updateFormValidity();
    };

    const handleCloserChange = () => {
        setCloser(!closer);
        updateFormValidity();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.closeCloseSetter();
    };
    return ReactDOM.createPortal(
        <>
            <div className='popUpStyle'>
                <div className='heading'>
                    <h2>Close Account</h2>
                    <h3 onClick={props.closeCloseSetter}>X</h3>
                </div>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label style={{ marginLeft: '2%' }}>Email</label>
                        <input
                            style={{ width: '96%', margin: '0.3rem 2%', padding: '4px', borderRadius: '6px' }}
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div style={{ display: 'flex', margin: '0.4rem 0' }}>
                        <label style={{ marginLeft: '2%', marginRight: '4%' }}>Want to file UAR</label>
                        <div>
                            <input
                                type='radio'
                                id='option1'
                                name='reasonOption'
                                value='Option 1'
                                checked={selectedOption === 'Option 1'}
                                onChange={() => setSelectedOption('Option 1')}
                            />
                            <label htmlFor='option1'>Yes</label>
                        </div>
                        <div style={{ marginLeft: '2%' }}>
                            <input
                                type='radio'
                                id='option2'
                                name='reasonOption'
                                value='Option 2'
                                checked={selectedOption === 'Option 2'}
                                onChange={() => setSelectedOption('Option 2')}
                            />
                            <label htmlFor='option2'>No</label>
                        </div>

                    </div>
                    <div>
                        <label style={{ marginLeft: '2%' }}>Reason</label>
                        <input
                            style={{ width: '96%', margin: '0.3rem 2%', padding: '4px', borderRadius: '6px', marginBottom: '2%' }}
                            type='text'
                            value={reason}
                            onChange={handleReasonChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='note' style={{ marginLeft: '2%' }}>Note</label>
                        <textarea
                            id='note'
                            style={{ width: '96%', minHeight: '50px', margin: '0.3rem 2%', padding: '4px', borderRadius: '6px' }}
                            value={note}
                            onChange={handleNoteChange}
                        />
                    </div>
                    <div style={{ marginTop: '4%', display:'flex', justifyContent:'space-between' }}>
                        <div style={{display:'flex' ,flexDirection:'row',width:'100%',alignItems:'center'}}>
                            <input
                                style={{ marginLeft: '2%' ,}}
                                type='radio'
                                id='option3'
                                name='closer'
                                value='Option 3'
                                checked={closer}
                                onClick={handleCloserChange}
                            />
                            <label style={{ marginLeft: '2%', width:'100%',display:'inline-block'  }}>Charge closer fee</label>
                        </div>
                        <button type="submit" disabled={!isFormValid} style={{width:'25%',marginRight:'3%',padding:'6px',borderRadius:'6px',backgroundColor:isFormValid?'#4643ee':'',color:isFormValid?'white':''}}>Close Account</button>
                    </div>
                </form>
            </div>
        </>,
        portalRoot
    )
}

export default Close