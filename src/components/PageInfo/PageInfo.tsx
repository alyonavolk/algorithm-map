import * as React from 'react';
import './pageInfo.scss';

import { NavLink } from 'react-router-dom';

interface IPageInfoProps {
    title: string;
    children: React.ReactNode;
    link: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const PageInfo: React.FC<IPageInfoProps> = ({title, children, link, onClick}) => {
  return (
    <div className='page'>
        <h2 className='page__title'><NavLink to='/' onClick={onClick}>{'<'}</NavLink>{title}</h2>
        <div className='page__content'>
            {children}
        </div>
        <a href={link} className={'page__link'}>Пройти тест</a>
    </div>
  );
};

export default PageInfo;
