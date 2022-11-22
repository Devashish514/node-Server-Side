var dns = require("dns");

//performing lookup

var domain = "3.109.93.126";

dns.reverse(domain, 4, (err, address) => {
    if (err) {
        console.error(err.code);
    } else {
        console.log(domain + "->" + address);
    }
});