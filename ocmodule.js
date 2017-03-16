var request = require('request-promise');
//var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJoZWxsby13b3JsZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJpZGUtdG9rZW4teDRjbnIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiaWRlIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiNjcxYTNkZTUtZmZmMS0xMWU2LTllYzctNTRhYjNhY2E4YjEwIiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50OmhlbGxvLXdvcmxkOmlkZSJ9.OKu-Ve1y9r00Y2bBOhZAAzJn6iMuPd_GxWlrLnqlOmSsc3hbeYZHdSC9WZ1ib1AfwCl_S5KwB7M_NJN5Vqs2HAz1xEW5BHZ82V4DSJqf4IyseqnKbP8poSE6JtDMUOk6HWoqgxill0qhMvV-hS1LFyBNqqm8sEh_1pfBNLmUh1FbtLGabMCWDJYpe1hh03FuhRW5ujhpVX3_ofbE0GNvXo_wtPedqLUR-ZHOinA9KpRjsjzlVkghBTm620cCCSjKT96ApUEWXKGe8apMpe1GZDNcb_avgh0SkBDXZaSSCkoM03W1P3oEp_RU80sMi08o0s0BASp3gctLH7TjgWp8bw";

var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJub2RlLW1vbmdvMiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJpZGUtdG9rZW4tc3ZqcHEiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiaWRlIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiZTgyNDk2OTctMDk3Zi0xMWU3LTg1NTYtNTRhYjNhY2E4YWM4Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Om5vZGUtbW9uZ28yOmlkZSJ9.YQAOW6tTWCwd99GSzEhoI4kgpQ0bCld2YDg5n8US1_IgLIt2Dstx6_nlaKyN08RSAWZick19vpvdqSdgiSvek1WAwmrHir7evNkSA9tdGt_boFjyk1xbsnaI-HCDzVBCbccN9w9s-tqIgUI_4899z3WShv3DKVoyTIghNbHMmXRUa_zWBJjzMPhrt_bB7nyW2AdaWstjGNUzqlz7jdZ2XwPHXDzo0eNwX0EK4flGVMt9qAWb7uimuwteN5xRBGcTY91A4ky7CC09vKigW1RNBJRVX0n9Z0MkVOuTtu8iqr5gAxHkHdpatJfwstWriI2aAXSZHu6quMPr3IaGAA4UGQ";

exports.getApi = function(){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1",
    method: "GET",
    strictSSL: false
  }

  return request(option);
}


exports.createBuildConfig = function(buildConfig){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1/namespaces/node-mongo2/buildconfigs",
    method: "POST",
    body: buildConfig,
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false,
    json: true
  }

  return request(option);
}

exports.getBuildConfigs = function(){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1/namespaces/node-mongo2/buildconfigs",
    method: "GET",
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false
  }

  return request(option);
}

exports.createImageStream = function(imageStream){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1/namespaces/node-mongo2/imagestreams",
    method: "POST",
    body: imageStream,
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false,
    json: true
  }

  return request(option);
}

exports.createDeploymentConfig = function(depConfig){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1/namespaces/node-mongo2/deploymentconfigs",
    method: "POST",
    body: depConfig,
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false,
    json: true
  }

  return request(option);
}

exports.createRoute = function(route){

  var option = {
    uri: "https://ocp.msv-project.com:8443/oapi/v1/namespaces/node-mongo2/routes",
    method: "POST",
    body: route,
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false,
    json: true
  }

  return request(option);
}

exports.createService = function(service){

  var option = {
    uri: "https://ocp.msv-project.com:8443/api/v1/namespaces/node-mongo2/services",
    method: "POST",
    body: service,
    headers: {
      authorization: "Bearer " + token
    },
    strictSSL: false,
    json: true
  }

  return request(option);
}
