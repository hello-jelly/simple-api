const get = (req, res) => {
  res.end(JSON.stringify([
    { name: 'whachamacallit' },
    { name: 'violet-crumble' },
    { name: 'lion-bar' },
    { name: 'crunky'}
  ]));
};

const post = (req, res) => {
  res.end(JSON.stringify(
    { name: 'whachamacallit' }
  ));
};

const methods = {
  GET: get,
  POST: post
};

module.exports = (req, res) => {
  const handler = methods[req.method];
  handler(req, res);
};