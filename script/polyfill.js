//Promise
import { Promise } from "es6-promise";
window.Promise = Promise;

//finally
import promiseFinally from "promise.prototype.finally";
promiseFinally.shim();
