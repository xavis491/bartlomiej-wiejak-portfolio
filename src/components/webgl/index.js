import React, { useContext, useEffect } from 'react';
import { Canvas } from 'react-three-fiber';
import { useLocation } from 'react-router';

import Project from './Project';
import { LoadingContext, RoutingContext } from '../../context';
import projectsData from '../../data/projects';

const WebGLRenderer = () => {
  const { loaded } = useContext(LoadingContext);
  const { currentScrollIndex, path, setCurrentScrollIndex, lastProject } = useContext(RoutingContext);
  const location = useLocation();

  useEffect(() => {
    return () => {
      setCurrentScrollIndex(null);
    }
  }, [setCurrentScrollIndex])

  return (
    <div className='WebGLRenderer'>
      <Canvas>
        {projectsData.map(({ index, texture, url }) => <Project key={index} index={index} texture={texture} url={url} loaded={loaded} currentScrollIndex={currentScrollIndex} path={path} pathname={location.pathname} lastProject={lastProject} />)}
      </Canvas>
    </div>
  )
}

export default WebGLRenderer;