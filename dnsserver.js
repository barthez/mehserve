// Generated by CoffeeScript 1.9.3
var dns, server;

dns = require('native-dns');

server = dns.createServer();

server.on('request', function(req, res) {
  if (req.question[0].name.match(/\.(meh|dev)/)) {
    res.answer.push(dns.A({
      name: req.question[0].name,
      address: '127.0.0.1',
      ttl: 600
    }));
    res.answer.push(dns.AAAA({
      name: req.question[0].name,
      address: '::1',
      ttl: 600
    }));
    return res.send();
  }
});

module.exports = server;

//# sourceMappingURL=dnsserver.js.map
