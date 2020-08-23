var config = {},
    log = false,
    debug = false;

var env = process.env.NODE_ENV || 'production',
    mode = process.env.NODE_MODE;

console.log(process.env.NODE_ENV);

var domain_formal = '/',
    domain_formal_cdn = domain_formal,
    domain_formal_api = '/api/',
    domain_formal_static = domain_formal + 'static/',

    domain_demo = './',
    domain_demo_cdn = domain_demo,
    domain_demo_api = 'http://projects.salute-interactive.com/wincafe/brian/api/',
    domain_demo_static = domain_demo + 'static/',

    domain_dev = './',
    domain_dev_cdn = domain_dev,
    domain_dev_api = 'http://projects.salute-interactive.com/wincafe/brian/api/',
    domain_dev_static = domain_dev + 'static/';


var tracking = env == 'production' ? mode == 'normal' ? true : false : false;

if(config.log) console.log('env:', env, ', mode:', mode);

config = {
  log: log,
  debug: debug,
  tracking: tracking,

  path: {
    root: env == 'production' ? mode == 'demo' ? domain_demo : domain_formal : domain_dev,
    api: env == 'production' ? mode == 'demo' ? domain_demo_api : domain_formal_api : domain_dev_api,
    static: env == 'production' ? mode == 'demo' ? domain_demo_static : domain_formal_static : domain_dev_static,
    assets: env == 'production' ? mode == 'demo' ? '/wincafe/brian/' : domain_formal_cdn : domain_dev_cdn,
    export: mode == 'demo' ? 'demo' : 'dist'
  }
};

module.exports = config;