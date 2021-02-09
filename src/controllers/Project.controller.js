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
    const name = req.params.name;
    const date = req.params.date;
    const projects = data.filter(
      (pro) =>
        pro.proyecto.toLowerCase() === name.toLowerCase() ||
        pro.timestamp.split(" ", 1)[0] == date
    );
    
    if (projects.length == 0) {
      return res.status(400).json({
        code: 400,
        msg: `no projects with ${name} or ${date} parameter`,
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
