'use client';
import {createContext,useContext,type ReactNode} from 'react';
import {brand} from './config/brand';
export interface OspeyHost {brandName:{zh:string;en:string};logo:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:{zh:string;en:string};marketplaceAriaLabel?:{zh:string;en:string};filing?:ReactNode}
const Context=createContext<OspeyHost>({brandName:brand.name,logo:brand.logo});
export function OspeyHostProvider({children,...host}:OspeyHost&{children:ReactNode}){return <Context.Provider value={host}>{children}</Context.Provider>}
export const useOspeyHost=()=>useContext(Context);
