import { useState } from "react";
import './main.scss';

import Button from "../subComponents/Button/Button";
import Step from "../subComponents/Step/Step";

import { ROUTES } from "../Routes";

interface IMainProps {
}

const Main: React.FC<IMainProps> = (props) => {
    const [name, setName] = useState('');


  return (
    <div className='main'>
        <h1 className="main__title">Представление алгоритмов</h1>
        <div className='main__progres'>
            <p>Всего пройдено</p>
            <p>0 %</p>
        </div>
        <div className='main__info'>
            <div className='main__form'>
                <input className='main__form_input' 
                    placeholder='Введите имя'
                    value={name} 
                    onChange={(e) => setName(e.target.value)} />
                <Button onClick={() => console.log('+')}>Начать</Button>
            </div>
            <p className="main__info_descr">
                Два пути ведут к прохождению теста: можно ознакомиться с графическим представлением алгоритмов или изучить алгоритмы и их запись более подробно.
            </p>
        </div>
        <div className="main__content">
            <div><Step link={ROUTES.gp_first} active="">1</Step></div>
            <div><Step link={ROUTES.gp_second} active="">2</Step></div>
            <div><Step link={ROUTES.first} active="">1</Step></div>
            <div><Step link={ROUTES.second} active="">2</Step></div>
            <div><Step link={ROUTES.third} active="">3</Step></div>
            <div><Step link={ROUTES.fourth} active="">4</Step></div>
            <p className="main__content_gr">
                Графическая представление
            </p>
            <p className="main__content_wr">
                Запись алгоритмов
            </p>
        </div>
    </div>
  );
};

export default Main;
