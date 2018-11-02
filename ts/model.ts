'use strict';

namespace Model {
    export class Person {
        constructor(private name:string = 'dummy') {
        }

        public getName():string {
            return this.name
        }
    }
}
export default Model;

