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
    const name = req.params.name;
    const date = req.params.data;
    //TODO: mejorar filtro 
    const projects = data.filter(project => {
        let nameP = project.proyecto.toLowerCase();
        if(nameP === name.toLowerCase() || project.timestamp == date){
            return project;
        }
        // project.proyecto.toLowerCase() === name.toLowerCase()
    });
    if (projects.length == 0) {
        return res.status(400).json({
            code: 400,
            msg: `no projects with ${name} parameter` 
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
