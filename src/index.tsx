/**
 * @file: entry
 * @author: zhangyadi@baidu.com
 * @Date: 2020-04-27 16:38:27
 * @Last Modified by: zhangyadi@baidu.com
 * @Last Modified time: 2020-04-28 20:40:51
 */

import * as ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import First from './components/first';
import Home from './components/home';
import Second from './components/second';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/first">
                    <First />
                </Route>
                <Route path="/second">
                    <Second />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
