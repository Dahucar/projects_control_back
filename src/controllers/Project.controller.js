const { request, response } = require("express");
let { data } = require('../db/bbdd.json');  

const showProjects = ( req = request, res = response ) => {
    return res.status(200).json({
        code: 200,
        status: 'created',
        projects: data
    });
}

const findProjectByName = ( req = request, res = response ) => {
    //TODO: validate request body 
    const name = req.params.name;
    const projects = data.filter( project => project.proyecto === name );
    return res.status(200).json({
        code: 200,
        msg: 'projects list with name: '+name,
        projects: [ ...projects ]
    });
}


const findProjectByDate = ( req = request, res = response ) => {
    //TODO: validate request body 
    const date = req.params.date;
    const projects = data.filter( project => project.timestamp === date );
    return res.status(200).json({
        code: 200,
        msg: 'projects list with timestamp: '+date,
        projects
    });
}

module.exports = {
    showProjects,
    findProjectByName,
    findProjectByDate
}
