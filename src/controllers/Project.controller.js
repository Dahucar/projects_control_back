const { request, response } = require("express");
let { data } = require("../db/bbdd.json");

const showProjects = (req = request, res = response) => {
  try {
    const information = {
      proyecto: "All",
      subproyecto: data,
    };

    return res.status(200).json({
      code: 200,
      information,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      msg: "Unexpected error detected in your request",
    });
  }
};

const findProjectByName = (req = request, res = response) => {
  try {
    // puede llevar con valor string 'empty'
    const {name, dateInit, dateFinish} = req.params;
    // validación basica de parametros de url
    if(!name || !dateInit || !dateFinish){
      return res.status(500).json({
        code: 500,
        msg: `The name, init data and finish date cannot be empty.`,
      });
    }

    //generar filtro de datos
    const projects = data.filter((pro) => {
      if(pro.proyecto.toLowerCase() === name.toLowerCase()){
        return pro;
      }
      let proDate = new Date(pro.timestamp).getTime();
      if((proDate >= new Date(dateInit).getTime()) && (proDate <= new Date(dateFinish).getTime())){
        return pro;
      }
    });
    
    if (projects.length == 0) {
      return res.status(400).json({
        code: 400,
        msg: `no projects with ${name} or ${dateInit} ${dateFinish} parameter`,
      });
    }

    const information = {
      proyecto: name,
      subproyecto: projects,
    };

    return res.status(200).json({
      code: 200,
      information,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      msg: "Unexpected error detected in your request",
    });
  }
};

module.exports = {
  showProjects,
  findProjectByName,
};
