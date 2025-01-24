import React from 'react'

export default function Education() {
  return (
    <div>
          <section className="education" id="education" >
            <h1 className='text-center text-4xl font-primaryMedium text-white underline underline-offset-8 decoration-2'>Education</h1>
            <div className="timeline-items before:h-10 justify-center">
            <div className="timeline-dot"></div>
              <div className="time mt-8">
                  <div className="timeline-date text-center m-0">(July 2015 - May 2018)</div>
                    <div className="timeline-content !text-center">
                      <h3>Vijay sai degree college, Nizamabad, Telangana</h3>
                      <p>BSc in Computer Science and engineering</p>
                    </div>     
              </div>
            </div>
        </section>
    </div>
  )
}
