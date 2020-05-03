/**
 * @file: first try
 * @author: zhangyadi@baidu.com
 * @Date: 2020-04-27 17:04:52
 * @Last Modified by: zhangyadi@baidu.com
 * @Last Modified time: 2020-04-28 20:55:40
 */

import * as React from 'react';
import style from './index.scss';

export default class Hello extends React.Component<{}, {}> {
    render() {
        return <h1 className={style.wrap}>Hello from</h1>;
    }
}
