'use strict';
import Model from './model';

// tsconfig.json の esModuleInterop がtrueであれば以下の記述も可能
// import * as $ from 'jquery';
import $ = require('jquery');

let user = new Model.Person("Mike");

$(() => {
    $("#name").html(user.getName());

});
