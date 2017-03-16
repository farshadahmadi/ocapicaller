"use strict"

var express = require('express');
var router = express.Router();
var oc = require("../ocmodule.js");
var fs = require("fs-extra-promise");
var path = require("path");
var ejs = require('ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  oc.getApi().then(function(result){
    console.log(result);
    res.render('index', { title: 'Express' });
  }).catch(function(err){
    console.log(err);
    res.status(500).send(err);
  })
});

router.get('/namespaces/hello-world/createnewapp', function(req, res, next) {

  var vars = {
    project:{
      name: "runtime-environment",
      git: {
        url: "https://github.com/farshadahmadi/liquidiot-server.git",
        ref: "oc-singleprocess"
      }
    },
    device: {
      url:null
    }
  };

  //var files = ["./routes/imagestream.json","./routes/buildconfig.json","./routes/deploymentconfig.json","./routes/service.json","./routes/route.json"];
  var files = ["./routes/imagestream.json","./routes/buildconfig.json","./routes/service.json","./routes/route.json"];

  var fileContents = files
    .map(function(file){
      var filePath = path.resolve(file);
      var fileContent = fs.readFileSync(filePath, "utf8");
      fileContent = ejs.render(fileContent, vars);
      return JSON.parse(fileContent);
    });

  //res.status(200).send(fileContents);
  
  oc.createImageStream(fileContents[0])
    .then(function(result){
      return oc.createBuildConfig(fileContents[1]);
    }).then(function(result){
      return oc.createService(fileContents[2]);
    }).then(function(result){
      vars.device.url = "http://" + result.spec.clusterIP + ":8080";
      var dcPath = path.resolve("./routes/deploymentconfig.json");
      var dcContent = fs.readFileSync(dcPath,"utf8");
      dcContent = ejs.render(dcContent, vars);
      return oc.createDeploymentConfig(JSON.parse(dcContent));
    }).then(function(result){
      return oc.createRoute(fileContents[3]);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    });
  
  /*oc.createImageStream(fileContents[0])
    .then(function(result){
      return oc.createBuildConfig(fileContents[1]);
    }).then(function(result){
      return oc.createDeploymentConfig(fileContents[2]);
    }).then(function(result){
      return oc.createService(fileContents[2]);
    }).then(function(result){
      return oc.createRoute(fileContents[3]);
    }).then(function(result){
      vars.device.url = result.spec.host;
      console.log(vars);
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    });*/

});

router.get('/namespaces/hello-world/buildconfigs', function(req, res, next) {
  oc.getBuildConfigs().then(function(result){
    var s = JSON.stringify(result);
    console.log(result);
    res.status(200).send(result);
    //res.render('index', { title: s });
  }).catch(function(err){
    console.log(JSON.stringify(err, null, 4));
    res.status(500).send(err);
  })
});

router.get('/namespaces/hello-world/createbuildconfigs', function(req, res, next) {

  var d = path.resolve("./routes/buildconfig2.json");

  fs.readFileAsync(d, "utf8")
    .then(function(buildConfig){
      var obj = JSON.parse(buildConfig);
      return oc.createBuildConfig(obj);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    })
});

router.get('/namespaces/hello-world/createimagestreams', function(req, res, next) {

  var d = path.resolve("./routes/imagestream.json");

  fs.readFileAsync(d, "utf8")
    .then(function(imageStream){
      var obj = JSON.parse(imageStream);
      //return obj;
      return oc.createImageStream(obj);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    })
});

router.get('/namespaces/hello-world/createdeploymentconfig', function(req, res, next) {

  var d = path.resolve("./routes/deploymentconfig.json");

  fs.readFileAsync(d, "utf8")
    .then(function(depConfig){
      var obj = JSON.parse(depConfig);
      //return obj;
      return oc.createDeploymentConfig(obj);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    })
});

router.get('/namespaces/hello-world/createroute', function(req, res, next) {

  var d = path.resolve("./routes/route.json");

  fs.readFileAsync(d, "utf8")
    .then(function(route){
      var obj = JSON.parse(route);
      //return obj;
      return oc.createRoute(obj);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    })
});

router.get('/namespaces/hello-world/createservice', function(req, res, next) {

  var d = path.resolve("./routes/service.json");

  fs.readFileAsync(d, "utf8")
    .then(function(service){
      var obj = JSON.parse(service);
      //return obj;
      return oc.createService(obj);
    }).then(function(result){
      console.log(result);
      res.status(200).send(result);
    }).catch(function(err){
      console.log(JSON.stringify(err, null, 4));
      res.status(500).send(err);
    })
});

module.exports = router;
