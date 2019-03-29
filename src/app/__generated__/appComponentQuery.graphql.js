/**
 * @flow
 * @relayHash d3e740666086c586d2af048e2d1b915c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appComponentQueryVariables = {||};
export type appComponentQueryResponse = {|
  +hello: ?string
|};
export type appComponentQuery = {|
  variables: appComponentQueryVariables,
  response: appComponentQueryResponse,
|};
*/


/*
query appComponentQuery {
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appComponentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "appComponentQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "appComponentQuery",
    "id": null,
    "text": "query appComponentQuery {\n  hello\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7dc94e0d050354bf853d5c33d29bf94';
module.exports = node;
