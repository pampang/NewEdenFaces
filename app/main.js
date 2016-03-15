import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Routre.HistoryLocation, function (Handler) {
    React.render(<Handler />, doucment.getElementById('app'));
});