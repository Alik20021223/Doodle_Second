import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { SwiperItem } from '../../Components/Main/Projects/SwiperItem';
import { Project } from '../../Components/Main/Projects/Project';


function Slides() {
    const project = useSelector(state => state.menuBar.projectDataFirst)
    const {tech} = project
    const [imgResult, setImgResult] = useState(() => project?.imgResult);

    const handleSelectImgItem = (id) => {
      setImgResult(prev => prev.map(p => ({ ...p, isActive: id === p.id })));
    };

    return (
      <>
        <SwiperItem swipers={imgResult} />
        <Project projects={tech} onSelectItem={handleSelectImgItem} />
      </>
    )      
}

export default Slides