import React, { useRef, useState, useEffect } from 'react';
import { withContext } from 'react-dims';
import ThePattern from './ThePattern';

const ReactNode = ({dims, data})=>{
  const domNode = useRef(null);
  const [canvas, createCanvas] = useState(null);
  const [vizInitialized, setVizInitialized]= useState(false);

  useEffect(()=>{
    createCanvas(()=>new ThePattern(domNode.current))
  },[]);

  useEffect(()=>{
    if(data.length>1 && dims.width && vizInitialized===false){
      canvas.init(data, dims);
      setVizInitialized(()=>true);
    };
  },[data, dims]);

  return (
    <div ref={domNode} style={{display: 'grid', height: '100%'}}/>
  )
};

export default withContext(ReactNode);
