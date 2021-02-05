const { Router } = require('express');
const projectRouter = Router();

const { 
    showProjects, 
    findProjectByName,
    findProjectByDate
} = require('../controllers/Project.controller');

projectRouter.get('/', showProjects);
projectRouter.get('/project/:name', findProjectByName);
projectRouter.get('/filter-data/:date', findProjectByDate);

module.exports = projectRouter;