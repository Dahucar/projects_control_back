const { request, response } = require("express");
let { data } = require('../db/bbdd.json');  

const showProjects = ( req = request, res = response ) => {
    const information = {
        proyecto: 'All',
        subproyecto: data
    }

    return res.status(200).json({
        code: 200,
        information
    });
}

const findProjectByName = ( req = request, res = response ) => {
    //TODO: validate request body
    // puede llevar con valor string 'empty' 
    const name = req.params.name;
    const date = req.params.date;
    //TODO: mejorar filtro 
    const projects = data.filter(
        pro => pro.proyecto.toLowerCase() === name.toLowerCase() || 
        pro.timestamp.split(' ', 1)[0] == date
    );
    
    if (projects.length == 0) {
        return res.status(400).json({
            code: 400,
            msg: `no projects with ${name} or ${date} parameter` 
        });
    }

    const information = {
        proyecto: name,
        subproyecto: projects
    }

    return res.status(200).json({
        code: 200,
        information
    });
}

module.exports = {
    showProjects,
    findProjectByName,
}
