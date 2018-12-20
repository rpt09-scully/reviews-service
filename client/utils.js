const isProduction = (nodeEnv, cb) => {
  if (nodeEnv) {
    let obj = {
      reviews: 'http://reviewservice.jsxvmg3wq3.us-west-1.elasticbeanstalk.com',
      trails: 'http://trail-env.8jhbbn2nrv.us-west-2.elasticbeanstalk.com',
      profiles: 'http://localhost:3002'
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



export default isProduction;

