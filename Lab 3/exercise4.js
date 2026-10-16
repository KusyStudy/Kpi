'use strict';

const introspect = (iface) => {
    const result = [];
    for (const name of Object.keys(iface)) {
        const value = iface[name];
        if (typeof value === 'function') {
            result.push([name, value.length]);
        }
    }
    return result;
};

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    version: 1
};

console.log(introspect(iface));
