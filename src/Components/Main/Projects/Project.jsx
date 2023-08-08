import React from 'react'

export const Project = ({ projects, onSelectItem }) => {
  return (
    <div className="projects">
      {projects.map(p =>
        <label key={p.id} onClick={() => onSelectItem(p.id)}>
          <img
            src={p.img}
            alt="screen"
            className={`imgProject ${p.isActive ? 'imgProjectActive' : ''}`}
          />
        </label>)
      }
    </div>
  )
}
