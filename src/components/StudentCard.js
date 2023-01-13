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
    <div className='flex gap-x-6 bg-white min-h-160px border-b-gray-700 px-5 py-2'>
        <div className='h-full w-full'>
            <img src={pic} alt="" className='rounded-[50%] w-1/2'/>
        </div>
        <div className='w-[80%]'>
          <div className='text-lg font-semibold uppercase tracking-wider mb-2'>
            {firstName} {lastName}
          </div>
          <div className='text-gray-600 ml-3  text-sm pb-1'>
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
        <div className='text-gray-600 text-4xl font-semibold hover:text-black'>
          {!showGrades && <GrAdd onClick={toggleGrades} />}
          {showGrades && <IoMdRemove onClick={toggleGrades} />}
        </div>
    </div>
  )
}

export default StudentCard