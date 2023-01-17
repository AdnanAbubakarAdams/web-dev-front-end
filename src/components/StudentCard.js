import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

const StudentCard = ({ student }) => {

  const {firstName, lastName, email, company, skill, pic, grades } = student

  const [showGrades, setShowGrades] = useState(false);

  const toggleGrades = () => {
    if(!showGrades) {
      setShowGrades(true);
    } else {
      setShowGrades(false);
    }
  }

  return (
    <div className='flex column-gap-4 bg-white min-h-40 border-b-gray-700 px-5 py-2'>
        <div className='w-1/4 h-40'>
            <img src={pic} alt="" className='rounded-full w-full h-full border-2'/>
        </div>
        <div className='w-3/4 pl-4'>
          <div className='text-lg font-semibold uppercase tracking-wider ml-4 mt-6 mb-2'>
            {firstName} {lastName}
          </div>
          <div className='text-gray-600 ml-7 text-sm pb-1'>
              <div> Email: {email}</div>
              <div> Company: {company}</div>
              <div> Skill: {skill}</div>
              <div className='mt-2' style={{"display" : showGrades ? "block" : "none"}}>
                  {grades.map((grade, index) => {
                    return <div className='flex w-24 justify-between' key={index + 1}><span>Test {index + 1}:</span><span>{grade}%</span></div>
                  })}
              </div>
          </div>
        </div>
        <div className='text-gray-600 text-4xl font-semibold mt-6 hover:text-black'>
          {!showGrades && <GrAdd onClick={toggleGrades} />}
          {showGrades && <IoMdRemove onClick={toggleGrades} />}
        </div>
    </div>
  )
}

export default StudentCard