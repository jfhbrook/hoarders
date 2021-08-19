# hoarders

## node.js's most complete "utility grab-bag"
# back after being **CANCELED** by **isaac** for **nearly a decade**
### dedicated to substack

![](http://i.imgur.com/WPB5l.jpg)

# usage

first, install hoarders:

```bash
npm install hoarders
```

then, simply use the utilities exported by hoarders of your choice:

```js
var hoarders = require('hoarders');

var express = hoarders.express;

console.log(express);
```

and voila:

```
$ node example.js

added 49 packages, and audited 100 packages in 2s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[Function: createApplication] {
  application: {
    init: [Function: init],
    defaultConfiguration: [Function: defaultConfiguration],
    lazyrouter: [Function: lazyrouter],
    handle: [Function: handle],
    use: [Function: use],
    route: [Function: route],
    engine: [Function: engine],
    param: [Function: param],
    set: [Function: set],
    path: [Function: path],
    enabled: [Function: enabled],
    disabled: [Function: disabled],
    enable: [Function: enable],
    disable: [Function: disable],
    acl: [Function (anonymous)],
    bind: [Function (anonymous)],
    checkout: [Function (anonymous)],
    connect: [Function (anonymous)],
    copy: [Function (anonymous)],
    delete: [Function (anonymous)],
    get: [Function (anonymous)],
    head: [Function (anonymous)],
    link: [Function (anonymous)],
    lock: [Function (anonymous)],
    'm-search': [Function (anonymous)],
    merge: [Function (anonymous)],
    mkactivity: [Function (anonymous)],
    mkcalendar: [Function (anonymous)],
    mkcol: [Function (anonymous)],
    move: [Function (anonymous)],
    notify: [Function (anonymous)],
    options: [Function (anonymous)],
    patch: [Function (anonymous)],
    post: [Function (anonymous)],
    propfind: [Function (anonymous)],
    proppatch: [Function (anonymous)],
    purge: [Function (anonymous)],
    put: [Function (anonymous)],
    rebind: [Function (anonymous)],
    report: [Function (anonymous)],
    search: [Function (anonymous)],
    source: [Function (anonymous)],
    subscribe: [Function (anonymous)],
    trace: [Function (anonymous)],
    unbind: [Function (anonymous)],
    unlink: [Function (anonymous)],
    unlock: [Function (anonymous)],
    unsubscribe: [Function (anonymous)],
    all: [Function: all],
    del: [Function (anonymous)],
    render: [Function: render],
    listen: [Function: listen]
  },
  request: IncomingMessage {
    header: [Function: header],
    get: [Function: header],
    accepts: [Function (anonymous)],
    acceptsEncodings: [Function (anonymous)],
    acceptsEncoding: [Function (anonymous)],
    acceptsCharsets: [Function (anonymous)],
    acceptsCharset: [Function (anonymous)],
    acceptsLanguages: [Function (anonymous)],
    acceptsLanguage: [Function (anonymous)],
    range: [Function: range],
    param: [Function: param],
    is: [Function: is],
    protocol: [Getter],
    secure: [Getter],
    ip: [Getter],
    ips: [Getter],
    subdomains: [Getter],
    path: [Getter],
    hostname: [Getter],
    host: [Getter],
    fresh: [Getter],
    stale: [Getter],
    xhr: [Getter]
  },
  response: ServerResponse {
    status: [Function: status],
    links: [Function (anonymous)],
    send: [Function: send],
    json: [Function: json],
    jsonp: [Function: jsonp],
    sendStatus: [Function: sendStatus],
    sendFile: [Function: sendFile],
    sendfile: [Function (anonymous)],
    download: [Function: download],
    type: [Function: contentType],
    contentType: [Function: contentType],
    format: [Function (anonymous)],
    attachment: [Function: attachment],
    append: [Function: append],
    header: [Function: header],
    set: [Function: header],
    get: [Function (anonymous)],
    clearCookie: [Function: clearCookie],
    cookie: [Function (anonymous)],
    location: [Function: location],
    redirect: [Function: redirect],
    vary: [Function (anonymous)],
    render: [Function: render]
  },
  Route: [Function: Route],
  Router: [Function (anonymous)] {
    param: [Function: param],
    handle: [Function: handle],
    process_params: [Function: process_params],
    use: [Function: use],
    route: [Function: route],
    acl: [Function (anonymous)],
    bind: [Function (anonymous)],
    checkout: [Function (anonymous)],
    connect: [Function (anonymous)],
    copy: [Function (anonymous)],
    delete: [Function (anonymous)],
    get: [Function (anonymous)],
    head: [Function (anonymous)],
    link: [Function (anonymous)],
    lock: [Function (anonymous)],
    'm-search': [Function (anonymous)],
    merge: [Function (anonymous)],
    mkactivity: [Function (anonymous)],
    mkcalendar: [Function (anonymous)],
    mkcol: [Function (anonymous)],
    move: [Function (anonymous)],
    notify: [Function (anonymous)],
    options: [Function (anonymous)],
    patch: [Function (anonymous)],
    post: [Function (anonymous)],
    propfind: [Function (anonymous)],
    proppatch: [Function (anonymous)],
    purge: [Function (anonymous)],
    put: [Function (anonymous)],
    rebind: [Function (anonymous)],
    report: [Function (anonymous)],
    search: [Function (anonymous)],
    source: [Function (anonymous)],
    subscribe: [Function (anonymous)],
    trace: [Function (anonymous)],
    unbind: [Function (anonymous)],
    unlink: [Function (anonymous)],
    unlock: [Function (anonymous)],
    unsubscribe: [Function (anonymous)],
    all: [Function (anonymous)]
  },
  json: [Function: json],
  query: [Function: query],
  raw: [Function: raw],
  static: [Function: serveStatic] {
    mime: Mime {
      types: [Object: null prototype],
      extensions: [Object: null prototype],
      default_type: 'application/octet-stream',
      Mime: [Function: Mime],
      charsets: [Object]
    }
  },
  text: [Function: text],
  urlencoded: [Function: urlencoded]
}
```

## history

in june of 2012, I wrote the first version of hoarders, node.js's most
complete utility grab bag, as an answer to underscore's then-popularity. on a
ux level, the project was a raging success.

however, hoarders used to directly depend on every module on npm, which in
2012 was on the order of 20,000 modules. this caused a plethora of haters to
[come out of the woodwork](https://github.com/jfhbrook/hoarders/issues/2),
unable to contend with the raw power of the hoarders collection of utilities,
and quickly began a campaign to CANCEL hoarders.

after a year or more of fighting these slanderous claims of "not being 'cute'"
and "a layer of unnecessary complexity that permeates the whole npm ecosystem",
the death knell came from the BIGGEST HATER OF ALL, one ISAAC Z SCHLEUTER:

```
08:21 < isaacs> jfhbrook: so... bad news.
08:21 < isaacs> jfhbrook: i think we're going to have to kill hoarders.
08:21 < isaacs> jfhbrook: probably going to put a limit of like 5000 dependencies in a package.
08:22 < fotoverite> Noooo! IT's taking up too much space in the database?
08:22 < isaacs> jfhbrook: every time there's a change to teh hoarders doc, it takes like 30 seconds for views to finish recompiling.
08:22 < isaacs> fotoverite: no, not space, it's taking up too much time in the database.
08:22 < isaacs> jfhbrook: i have a bunch of views that walk through all the deps in every package, making links and such
08:22 < fotoverite> Time exists in a database. :P Wow
08:23 < isaacs> i just starred and unstarred it.
08:23 < isaacs> just because the doc was touched, couch had to do a ton of work, and it was like.. not trivial.
08:23 < isaacs> maybe 30 seconds of downtime or so.
08:23 < defunctzombie> hahaha
08:23 < ralphtheninja> lol
08:24 < isaacs> most things still would work fine, but anything that hit a view (search, stars, last updated, etc.) was awol
08:24 < chrisdickinson> split into multiple packages and then make one package that requires each hoarders subset?
08:24 < isaacs> chrisdickinson: yeah, i think jfhbrook will still be able to "install every package" just fine
08:24 < ralphtheninja> star/unstar/star/unstar/star/unstar .. the new ddos attack :)
08:24 -!- mikolalysenko [~mikolalys@76-232-30-51.lightspeed.cicril.sbcglobal.net] has quit [Ping timeout: 255 seconds]
08:24 < fotoverite> Maybe the joke has run its course though
08:24 < isaacs> but it'll have to be like a hoarders-a hoarders-b hoarders-c...
08:25 < jfhbrook> isaacs: I see
08:25 < fotoverite> I think the new one is creating the package NO that removes core things from node and put it outside itself. And then allows nothing else to be required. :P
08:25 < jfhbrook> isaacs: It's not worth it to me to do anything fancy to get around that, so like
08:25 < isaacs> jfhbrook: i'm going to push the update to limit the number of deps
08:25 < isaacs> jfhbrook: but... it's your dog. you wanna be the one to put him down?
08:25 < jfhbrook> isaacs: npm unpublish?
08:25 < isaacs> (yeah, it's not like hoarders was ever anything but a joke anyway)
08:26 < isaacs> jfhbrook: with the -f
08:26 < isaacs> or --gangsta
08:26 < jfhbrook> a'ight
08:26 < isaacs> go with --gangsta
08:26 < isaacs> it's hella tight
08:26 < fotoverite> Yes go with gangsta
08:26 < ralphtheninja> :)
08:26 < ralphtheninja> I can't watch
08:27 < isaacs> it's ok hoarders... we're gonna go out to a nice farm. and you'll have room to run.... and rabbits to chase.....
08:27 < jfhbrook> isaacs: doing my best to unpublish, internet here really sucks
08:27  * isaacs sniff
08:27 < jfhbrook> isaacs: you can pass a git url to npm yeah?
08:27 < isaacs> jfhbrook: yeah
08:27 < jfhbrook> isaacs: npm install git+ssh://and-so-on
08:28 < isaacs> jfhbrook: i'm unpublishing it
08:28 < isaacs> jesus, even just getting the doc is insane
08:29 < jfhbrook> isaacs: ouch
08:31 < isaacs> ok, i unpublished it
08:31 < isaacs> $ npm unpublish hoarders --gangsta
08:31 < isaacs> npm WARN using --force I sure hope you know what you are doing.
08:31 < isaacs> <3 that warning ^
08:31 < isaacs> i'ts so OMINOUS!
08:34 < isaacs>       if (++n > max)
08:34 < isaacs>         assert(false, "too many deps.  please be less ridiculous.")
08:34 < isaacs> lol
08:34 < isaacs> can't wait for someone to post a bug about that
08:34 < isaacs> I SHOULD BE ALLOWED TO BE AS RIDICULOUS AS I'D LIKE! WHO ARE YOU TO RESTRICT MY FREEDOM?
08:34 < LOUDBOT> GOOGLE WAVE INVITES! I'VE GOT PLENTY
```

### but now, after NINE YEARS, I've found a WORK-AROUND.

now, rather than installing the utilities as direct dependencies, hoarders
installs them lazily, on-the-fly. this change is practically seamless - simply
reach for the utility like you would normally and hoarders will do the rest!
the only requirements are `npm` and an internet connection.

## they might try to CENSOR us but they WON'T SILENCE US. :triumph:

## for the haters:

in the interest of warding off a witch hunt and :v:not violating npm's terms
of service:v:, this module continues to include the block list of utilities
which hoarders does *not* include:

```
$ node
Welcome to Node.js v16.5.0.
Type ".help" for more information.
> var hoarders = require('.');
undefined
> hoarders.mime
Uncaught Error: refusing to install mime because BROOFA is a HATER 😤!
    at getModule (/home/josh/joshiverse/public/trophies/hoarders/index.js:63:13)
    at Object.get (/home/josh/joshiverse/public/trophies/hoarders/index.js:46:12)
>
```

to those who would insist on opting out, simply send a pull request which adds
your modules to the `haters.json` file in this repo.

## license

this project is published under the well known and venerated tumbolia public
license:

```
                               Tumbolia Public License
 
    Copyright Josh Holbrook, 2021 
 
    Copying and distribution of this file, with or without modification, are
    permitted in any medium without royalty provided the copyright notice and
    this notice are preserved.
 
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 
      0. opan saurce LOL
```

enjoy.
