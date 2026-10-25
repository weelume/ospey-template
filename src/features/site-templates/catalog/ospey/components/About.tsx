'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {useReducedMotion} from 'framer-motion';
import {useOspeyHost} from '../host';
import {text,type Locale} from '../content/data';
import {media} from './Media';
export function Tag({children}:{children:React.ReactNode}){return <div className="op-tag"><i/>{children}</div>}
function Counter({value,prefix='',suffix=''}:{value:number;prefix?:string;suffix?:string}){
 const ref=useRef<HTMLSpanElement>(null);const[count,setCount]=useState(value);const reduced=useReducedMotion();
 useEffect(()=>{if(reduced)return;let frame=0;const observer=new IntersectionObserver(entries=>{cancelAnimationFrame(frame);if(!entries[0].isIntersecting){setCount(0);return}const start=performance.now();const tick=(now:number)=>{const progress=Math.min((now-start)/2000,1);setCount(Math.floor((1-Math.pow(1-progress,3))*value));if(progress<1)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick)},{threshold:.1});if(ref.current)observer.observe(ref.current);return()=>{observer.disconnect();cancelAnimationFrame(frame)}},[value,reduced]);
 return <span ref={ref} aria-label={prefix+value+suffix}>{prefix}{count}{suffix}</span>;
}
export function About({locale}:{locale:Locale}){const host=useOspeyHost();return <section className="op-section op-about" id="about"><div className="op-container"><div className="op-split-heading"><Tag>{text(locale,'关于我们','About us')}</Tag><div><h2>{text(locale,`${host.brandName.zh} 连接人、空间与生活，以创新科技和专业经验，帮助每个人找到契合生活方式与未来愿景的理想居所。`,`${host.brandName.en} Is A Modern Real Estate Platform Dedicated To Connecting People With Properties That Truly Fit Their Lifestyle And Goals. We 🌍 Combine Innovative Technology With Expert Industry Knowledge To Simplify The Process Of Buying, Selling.`)}</h2><Link href="#services" className="op-button">{text(locale,'了解我们的服务','More About Us')}</Link></div></div><div className="op-stats">{[[245,'+','','项目交付','Projects Completed','以每一次专业交付，积累长久信赖。','Delivering excellence with every project, ensuring trust and satisfaction.'],[99,'','%','客户满意度','Satisfied Clients','陪伴每一位客户，从容走过置业旅程。','Our clients trust us to guide them through their real estate journey with ease.'],[15,'+','','年行业经验','Years Experience','以持续的市场洞察，回应每一次托付。','Providing expert market insights and dedication since the day we started.']].map(([n,p,s,zh,en,descZh,descEn],i)=><article className="op-stat op-glass" key={String(en)}><img src={media(`house-${i+1}.jpg`)} alt=""/><strong><Counter value={Number(n)} prefix={String(p)} suffix={String(s)}/></strong><h3>{text(locale,String(zh),String(en))}</h3><p>{text(locale,String(descZh),String(descEn))}</p></article>)}</div></div></section>}
