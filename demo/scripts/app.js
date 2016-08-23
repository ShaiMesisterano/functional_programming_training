/* global define */
define([
    'jquery'
    , 'ramda'
    , 'pointfree'
    , 'Maybe'
    , 'player'
    , 'io'
    , 'bacon'
    , 'http'
], function($, _, P, Maybe, Player, io, bacon, http) {
    'use strict';
    io.extendFn();

    var compose = P.compose;
    var map = P.map;
    var log = function(x) { console.log(x); return x; };
    var fork = _.curry(function(err, success, future) { return future.fork(err, success); });
    // var setHtml = _.curry(function(sel, x) { return $(sel).html(x); });
    var setHtml = _.curry(function(sel, x) { $(sel).html(x.base); console.warn(x.base); });

    // PURE
    var listen = _.curry(function(type, el){
	return Bacon.fromEventTarget(el, type);
    });

    var keypressStream = listen('keyup');
    
    var eventValue = compose(_.get('value'), _.get('target'));
    
    var valueStream = compose(map(eventValue), keypressStream);

    var termUrl = function(term){
	return 'http://api.openweathermap.org/data/2.5/weather?' + $.param({q: 'London,uk', appid: '44db6a862fba0b067b1930da0d769e98'});
    };
    
    var urlStream = compose(map(termUrl), valueStream);

    var searchStream = compose(map(http.getJSON), urlStream);

    var entryToLi = function(el){
	return $('<li />', {"data-youtubeid": el.id.$t, "text": el.title.$t});
    };

    var liStream = compose(map(entryToLi), searchStream);

    var getDom = $.toIO();

    // IMPURE /////////////////////////////////////////////////////
//    getDom('#search').map(searchStream).runIO().onValue(fork(log, log));
        getDom('#search').map(searchStream).runIO().onValue(fork(log, setHtml('#results')));

});
