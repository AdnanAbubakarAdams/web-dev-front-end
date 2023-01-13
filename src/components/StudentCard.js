import React, { useState } from 'react';

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
            <img src={pic} alt="" className='rounded-full w-full'/>
        </div>
        <div className='w-[80%]'>
          <div className='student_name'>
            {firstName} {lastName}
          </div>
          <div className='student_info'>
              <div> Email: {email}</div>
              <div> Company: {company}</div>
              <div> Skill: {skill}</div>
              <div className='grades' style={{"display" : showGrades ? "block" : "none"}}>
                  {grades.map((grade, index) => {
                    return <div className='grade' key={index + 1}><span>Test {index + 1}:</span><span>{grades}%</span></div>
                  })}
              </div>
          </div>
        </div>
        {/* <div className='toggleGrades'>
          {!showGrades && <Add onClick={toggleGrades} />}
          {showGrades && <Remove onClick={toggleGrades} />}
        </div> */}
    </div>
  )
}

export default StudentCard