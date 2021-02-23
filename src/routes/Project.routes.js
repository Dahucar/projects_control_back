const { Router } = require('express');
const projectRouter = Router();

const { 
    showProjects, 
    findProjectByName,
} = require('../controllers/Project.controller');

projectRouter.get('/', showProjects);
projectRouter.get('/project/:name/:dateInit/:dateFinish', findProjectByName);

module.exports = projectRouter;