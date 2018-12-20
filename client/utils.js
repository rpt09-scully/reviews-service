const isProduction = (trailId, nodeEnv, cb) => {
  if (nodeEnv) {
    let obj = {
      reviews: 'http://reviewservice.jsxvmg3wq3.us-west-1.elasticbeanstalk.com',
      trails: 'http://trail-env.8jhbbn2nrv.us-west-2.elasticbeanstalk.com',
      profiles: 'http://localhost:3002/CHANGETOPRODUCTIONROUTE'
    };
    cb(obj);
  } else {
    let obj = {
      reviews: 'http://localhost:3004',
      trails: 'http://localhost:3001',
      profiles: 'http://localhost:3002'
    };
    cb(obj);
  }
};

const determineId = () => {
  if (window.location.pathname.length > 1) {
    return parseInt(window.location.pathname.substring(1));
  } else {
    return 1;
  }
};

export { isProduction, determineId };
