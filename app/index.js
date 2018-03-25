
//var React = require('react');
//var App = require('./components/App.js');

import React from 'react';
var ReactDOM = require('react-dom');

import {MyComponentClass, Board, Square} from './components/App.js';

import './styles/app.scss';

ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
ReactDOM.render(<Board />, document.getElementById('app2'));



