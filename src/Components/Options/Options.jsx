import React, { useState, useEffect } from 'react'
import GetModel from '../GetModel/GetModel';
import axios from 'axios';
export default function Options() {

  const [selectedOption, setSelectedOption] = useState('');
  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('../GetModel/GetModel'); 
      setDataset(response.data);
    } catch (error) {
      console.error('Error fetching dataset:', error);
    }
  };



  const handleOptions = (event) => {
    const clickedOption = event.target.innerHTML;
    setSelectedOption(clickedOption);
  };
  const handleSubmit = () => {
   
    console.log('Form submitted:', selectedOption);
  };

  return (
    <div  id='option' className=' py-2 options-container'  >
        <div className="container  p-3 my-4 rounded shadow bg-white">
        <div className="row">
            <div className="col-md-3">
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Outliers</button>
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Nulls</button>
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Normalize</button>
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Low varience</button>
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Encode Categorical Columns</button>
            <button onClick={handleOptions} className='btn btn-danger w-100 my-2 d-block m-auto text-capitalize'>Feature Detection</button>
            </div>
            <div className="col-md-6">
               <div>
                    {dataset && (
                      <div>
                        <pre>{JSON.stringify(dataset, null, 2)}</pre>
                      </div>
                    )}
               </div>
            </div>
            <div className="col-md-3 text-capitalize bg-danger rounded">
                <p>column name </p>
                <div id='Outliers' className={selectedOption === 'Outliers' ? 'options' : 'options d-none'}>
                  
                  <select defaultValue=''  className='mb-2 form-control text-capitalize' name="statistical measure" id="statistical measure">
                    <option value=""disabled  hidden >statistical measure</option>
                    <option value="">  z-score</option>
                    <option value="">IQR</option>
                    
                </select>
                <select defaultValue=''  className='mb-2 form-control text-capitalize' name="Handling method" id="Handling method">
                  <option value=""disabled  hidden>Handling method</option>
                    <option>auto</option>
                    <option value="">mean</option>
                    <option value="">median </option>
                    <option value="">delete </option>
                    
                </select>
                <input className='mb-2 form-control' type="text" name="threshold" id="threshold" placeholder='threshold'/>
                
                </div>

                <div id="Normalize" className={selectedOption === 'Normalize' ? 'options' : 'options d-none'}>
                  <select defaultValue='' className='mb-2 form-control text-capitalize' name="scaler options " id="scaler options">
                    <option value=""disabled  hidden >scaler options</option>
                   
                    <option value="">auto </option>
                    <option value="">standard scaler </option>
                    <option value="">minimax scaler </option>
                  </select>
                </div>
                

                <div id="Low varience" className={selectedOption === 'Low varience' ? 'options' : 'options d-none'}>
                  <select defaultValue='' className='mb-2 form-control text-capitalize' name=" low varience" id="low varience">
                    <option value=""disabled  hidden >low varience</option>
                    <option value="">remove  </option>
                    <option value="">keep </option>
                  </select>
                </div>

                <div id="Encode Categorical Columns" className={selectedOption === 'Encode Categorical Columns' ? 'options' : 'options d-none'}>
                  <select defaultValue='' className='mb-2 form-control text-capitalize' name=" Encode  Categorical Columns" id="Encode  Categorical Columns">
                    <option value=""disabled  hidden >Encode  Categorical Columns</option>
                    <option value="">auto </option>
                    <option value="">one hot encoding </option>
                    <option value="">label encoding  </option>
                  </select>
                </div>

                <div id="Feature Detection" className={selectedOption === 'Feature Detection' ? 'options' : 'options d-none'}>
                <input className='mb-2 form-control' type="text" name="number of components " id="number of components " placeholder='Number Of Components '/>
                </div>

                <div id="Nulls" className={selectedOption === 'Nulls' ? 'options' : 'options d-none'}>
                  <select defaultValue='' className='mb-2 form-control text-capitalize' name=" nulls" id="nulls">
                    <option value=""disabled  hidden >Encode  Categorical Columns</option>
                    <option value="">auto </option>
                    <option value="">one hot encoding </option>
                    <option value="">label encoding  </option>
                  </select>
                </div>

                <div>


                </div>
                <button onClick={handleSubmit} className=' btn btn-danger mt-3 mb-1 d-block m-auto shadow-sm 'style={{ backgroundColor: 'white', color: 'black',fontSize:'20px' }}>
                Submit
                </button>
            </div>
        </div>

        </div>
                
            

      
    </div>
    
  )
}
