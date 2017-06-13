import $ from 'jquery';
import Rx from 'rxjs/Rx';
const btn = $('#btn');
const output = $('#output');
const input = $('#input');

const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');

btnStream$.subscribe(
    function (e) {},
    function (err) {
        console.log('error');
    },
    function () {
        console.log('completed');
    });

inputStream$.subscribe(
    function (e) {
        debugger;
        output.append(e.target.value);
    },
    function (err) {
        console.log('error');
    },
    function () {
        console.log('completed');
    });