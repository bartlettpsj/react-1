import React from 'react';
import { render } from 'react-dom';
import People from './People'

window.React = React;

const people = [ 
    { name: 'mohammed', detail: { yob: '570', yod: '632', order: 1}, wives: ['khadija', 'sawda', 'aisha', 'hafsa', 'zaynab', 'umm salama', 'zaynab', 'juwayriya', 'umm habiba', 'safiyya', 'maymuna'] }, 
    { name: 'abu bakr', detail: { yob: '573', yod: '634', order: 2} }, 
    { name: 'umar ibn al-khattab', detail: { yob: '584', yod: '644', order: 3} }, 
    { name:'uthman', detail: { yob: '579', yod: '656', order: 4} }, 
    { name: 'ali ibn abi talib', detail: { yob: '601', yod: '661', order: 5} }
];


render(<People title='Islamic People' items={people}/>, document.getElementById('react-container'));
