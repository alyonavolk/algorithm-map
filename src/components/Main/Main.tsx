import { useEffect, useState } from "react";
import './main.scss';

import Button from "../subComponents/Button/Button";
import Step from "../subComponents/Step/Step";

import { ROUTES } from "../Routes";

interface IMainProps {
}

const map = {
    route1: true,
    route2: true,
    route3: true,
    route4: true,
    gh_route1: true,
    gh_route2: true
} 

const Main: React.FC<IMainProps> = (props) => {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [entry, setEntry] = useState(true);

    const [mapValue, setMapValue] = useState(map);

    useEffect(() => {
        parseMap()
    }, [])


    const parseMap = () => {
        const local  = localStorage.getItem('map');
        if (typeof local === 'string') {
            const parse = JSON.parse(local)
            setMapValue(parse);
        }
    }

    const local = (name: string, local: object | string) => {
        localStorage.setItem(name, JSON.stringify(local))
    }

    const startMap = () => {
        if (name === '' || name.length > 50) {
            return 
        }
        setEntry(false);
        setMapValue(val => ({...val, route1: true, gh_route1: true}))
        local('name', name)
        local('map',mapValue)
        // setTimeout(() => {local('map',mapValue); console.log(mapValue)}, 5000)
    }

    const ClearMap = () => {
        setEntry(true);
        setMapValue(map);
        localStorage.clear();
    }

    useEffect(() => {
        // console.log(mapValue)
    }, [mapValue])

  return (
    <div className='main'>
        <h1 className="main__title">Представление алгоритмов</h1>
        <div className='main__progres'>
            <p>Всего пройдено</p>
            <p>0 %</p>
        </div>
        <div className='main__info'>
            <div className='main__form'>
                {entry ?  <>
                    <input className='main__form_input' 
                    placeholder='Введите имя'
                    value={name} 
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
