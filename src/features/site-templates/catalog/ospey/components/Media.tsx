'use client';
import {useEffect,useRef,useState} from 'react';
import {useReducedMotion} from 'framer-motion';
export const media=(file:string)=>'/templates/ospey/media/'+file;
export function Video({file,poster,active=true,rate=1,className=''}:{file:string;poster?:string;active?:boolean;rate?:number;className?:string}){
 const ref=useRef<HTMLVideoElement>(null);const reduced=useReducedMotion();const[failed,setFailed]=useState(false);
 useEffect(()=>{const video=ref.current;if(!video)return;video.playbackRate=rate;
  // 离屏、后台标签页与减少动态效果均暂停；播放失败向用户显式显示控制入口。
  let visible=false;const update=()=>{if(visible&&active&&!reduced&&!document.hidden){void video.play().catch(error=>{if(error instanceof DOMException&&error.name==='AbortError')return;console.warn('[ospey:video] playback blocked',{file,name:error instanceof Error?error.name:'unknown'});setFailed(true)})}else video.pause()};
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;update()},{threshold:.1});observer.observe(video);document.addEventListener('visibilitychange',update);
  return()=>{observer.disconnect();document.removeEventListener('visibilitychange',update);video.pause()};
 },[file,active,reduced,rate]);
 return <div className={'op-video '+className}><video ref={ref} src={media(file)} poster={poster?media(poster):undefined} muted loop playsInline preload="metadata" controls={failed||!!reduced} onError={()=>{setFailed(true);console.error('[ospey:video] media failed',{file})}}/>{failed&&<span className="op-media-error" role="status">视频暂不可用 / Video unavailable</span>}</div>;
}
