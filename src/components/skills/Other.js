import React from 'react'

const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">General</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Version Control (Git)</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Testing and Debugging</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Continuous Deployment </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Other