import React, { useState } from 'react'
import './RechargeUpload.css'

const RechargeUpload = () => {
  const [file,setFile] = useState('');
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className='recharge-upload'>
        <div className="recharge-upload-header">
          <p>Recharge Image Upload</p>
        </div>
        <div className="recharge-upload-info">
          <p>
            Kindly provide a screenshot of the SMS confirming the successful deduction and include 
            the transaction code. In the event that your account does not reflect the transaction 
            within thirty minutes, please reach out to customer care.
          </p>
        </div>
        <div className="recharge-upload-competion">
          <input type="text" placeholder='Enter Transaction code here' />
          <div className="uploads">
            <h3>Add Image:</h3>
            <input type="file" onChange={handleChange} />
            <img src={file} />
          </div>
          
          <button>Submit</button>
        </div>
    </div>
  )
}

export default RechargeUpload
