import { Dispatch, SetStateAction } from "react";
import './main.scss';

import Button from "../subComponents/Button/Button";
import Step from "../subComponents/Step/Step";

import { ROUTES } from "../Routes";
import { TMap } from '../../resources/Map';

interface IMainProps {
    mapValue: TMap;
    setName: Dispatch<SetStateAction<string | boolean>>;
    name: string | boolean;
    startMap: React.MouseEventHandler<HTMLButtonElement>;
    ClearMap: React.MouseEventHandler<HTMLButtonElement>;
    entry: string | boolean;
    status: number;
}

const Main: React.FC<IMainProps> = ({mapValue, setName, name, entry, startMap, ClearMap, status}) => {
  return (
    <div className='main'>
        <h1 className="main__title">Представление алгоритмов</h1>
        <div className='main__progres'>
            <p>Всего открыто</p>
            <p>{status} %</p>
        </div>
        <div className='main__info'>
            <div className='main__form'>
                {entry ?  <>
                    <input className='main__form_input' 
                    placeholder='Введите имя'
                    value={typeof name == 'string' ? name : ''} 
                    onChange={(e) => setName(e.target.value)} />
                    <Button onClick={startMap}>Начать</Button>
                </> : <>
                    <p>Удачи, {name}</p>
                    <Button onClick={ClearMap}>Очистить</Button>
                </>}
            </div>
            <p className="main__info_descr">
                Два пути ведут к прохождению теста: можно ознакомиться с графическим представлением алгоритмов или изучить алгоритмы и их запись более подробно.
            </p>
        </div>
        <div className="main__content">
            <div>
                <Step link={mapValue.gh_route1 ? ROUTES.gp_first : ''} 
                    active={`${mapValue.gh_route1 ? 'active' : ''}`}>
                    1</Step>
            </div>
            <div>
                <Step link={mapValue.gh_route2 ? ROUTES.gp_second : ''} 
                    active={`${mapValue.gh_route2 ? 'active' : ''}`}>
                    2</Step>
            </div>
            <div>
                <Step link={mapValue.route1 ? ROUTES.first : ''} 
                    active={`${mapValue.route1 ? 'active' : ''}`}>
                    1</Step>
            </div>
            <div>
                <Step link={mapValue.route2 ? ROUTES.second : ''} 
                    active={`${mapValue.route2 ? 'active' : ''}`}>
                    2</Step>
            </div>
            <div>
                <Step link={mapValue.route3 ? ROUTES.third : ''} 
                    active={`${mapValue.route3 ? 'active' : ''}`}>
                    3</Step>
            </div>
            <div>
                <Step link={mapValue.route4 ? ROUTES.fourth : ''} 
                    active={`${mapValue.route4 ? 'active' : ''}`}>
                    4</Step>
            </div>
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
