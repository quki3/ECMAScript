** doc **
[next()//mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)
[next()//w3cub](https://docs.w3cub.com/javascript/global_objects/generator/next)
** use **
```js
/**
 * Only allows the page to be accessed if the user is an admin.
 * Requires use of `loadUser` middleware.
 */
function requireAdmin(req, res, next) {
  if (!req.user || !req.user.admin) {
    next(new Error("Permission denied."));
    return;
  }

  next();
}

app.get('/top/secret', loadUser, requireAdmin, function(req, res) {
  res.send('blahblahblah');
});

```
