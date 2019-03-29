const { Headers, Response, ResponseContentType } = require('@angular/http');
const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime');

const { Injectable, ReflectiveInjector } = require('@angular/core');
const { Http, HttpModule, XHRBackend, RequestOptions, BrowserXhr, 
  ResponseOptions, BaseRequestOptions, BaseResponseOptions, XSRFStrategy, 
  CookieXSRFStrategy
} = require('@angular/http');

const HTTP_PROVIDERS = [
  {
    provide: Http,
    useFactory: (xhrBackend, requestOptions) => {
      return new Http(xhrBackend, requestOptions);
    },
    deps: [XHRBackend, RequestOptions]
  },
  BrowserXhr,
  { provide: RequestOptions, useClass: BaseRequestOptions },
  { provide: ResponseOptions, useClass: BaseResponseOptions },
  XHRBackend,
  { provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy() },
];
// let resolvedProviders = ReflectiveInjector.resolve(HTTP_PROVIDERS);
// let injector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, /* this.injector (parent injector if any) */ );
// let http = injector.get(Http);
const injector = ReflectiveInjector.resolveAndCreate(HTTP_PROVIDERS);
const http = injector.get(Http);

function setupRequest(operation, variables, cacheConfig/* uploadables */) {
  let uri = "http://localhost:4200/noapi";
  let mimeType = 'application/json';
  let responseType = ResponseContentType.Json;

  let headers = new Headers({
    headers: {},
    uri,
    Accept: mimeType,
    // Add authentication and other headers here
    'Content-Type': mimeType
  });
  let options = new RequestOptions({ headers: headers, responseType });

  return http.post(
    uri,
    JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }), options).toPromise().then(response => response.json()).then(json => {
      return json;
    });
}

function createEnvironment() {
  let network = Network.create(setupRequest);

  let store = new Store(new RecordSource());

  let environment = new Environment({
    handlerProvider: null,
    network,
    store,
  });

  return environment;
}

const environment = createEnvironment();

module.exports = { environment };
