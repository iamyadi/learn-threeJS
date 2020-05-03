import React from 'react';
import { Link } from 'react-router-dom';
import routeConfig from '../../routeConfig';
import style from './index.scss';

export default function Home() {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>目录</div>
            <ol className={style.ulWrap}>
                {routeConfig.map((item) => {
                    return (
                        <Link key={item.path} to={item.path}>
                            <li>{item.title}</li>
                        </Link>
                    );
                })}
            </ol>
            <div className={style.footer}>
                说明：该项目用于学习 three.js，于2020.4.29日启动，作者：迪迪同学。
            </div>
        </div>
    );
}
