import React from 'react';

import './Account.scss';


const Account = () => {

    return(
        <>
        <div className='div-account'>
            <div className='div-account__title'>
                <span className='lblAcctAcontent'>
                    <img className='avatarAcct'
                    src={require('../../../Assets/images/Mohan-muruge.jpg')}  />
                </span>

                <span className='lblAcctAcontent'>
                    <h1>Welcome, Mohan Muruge</h1>
                </span>
                
                <span className='lblAcctAcontent'>
                    <p>Manage your info, privacy, and security to make Brainflix work better for you. <a href='#'>Learn more</a></p>
                </span>
            </div>

            <div className='div-account__card'>
                <div className='div-account__item'>
                    <div className='div-account__box'>
                        <div className='div-account__box--item'>
                            <span className='lblBoxTitle'>Privacy &amp; personalization</span>

                            <p>See the data in your Brainflix Account and choose
                            what activity is saved to personalize your Brainflix experience</p>

                            <p><a href='#'>Manage your data &amp; privacy</a></p>
                        </div>
                    </div>
                </div>

                <div className='div-account__item'>
                    <div className='div-account__box'>
                        <div className='div-account__box--item'>
                            <span className='lblBoxTitle'>You have security recommendations</span>

                            <p>Recommended actions found in the Security Checkup</p>

                            <p><a href='#'>Protect your account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Account;