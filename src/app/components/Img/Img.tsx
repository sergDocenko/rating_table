import React, { FC } from 'react';
import Image from 'next/image';
import styles from "./img.module.css";
import clsx from 'clsx';


type ImgProps={
className?:string;
src:string;
alt:string;
}

const Img:FC<ImgProps> = (props) => {
    const {className:classNameProp,src, alt}=props
    const className=clsx(classNameProp,styles.img)
  return (
    <div className={className}><Image src={src} alt={alt} fill={true}/></div>
  )
}

export default Img