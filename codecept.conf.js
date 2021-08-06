exports.config = {
  output: './output',
  timeout: 30000,
  helpers: {
    Playwright: {
      url: 'https://www.bbva.mx/personas/productos/creditos/credito-auto/simulador-credito-automotriz.html',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/calculo_steps.js'],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs',

}