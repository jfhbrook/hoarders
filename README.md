# hoarders

## node.js's most complete "utility grab-bag".
### Dedicated to substack.

![](http://i.imgur.com/WPB5l.jpg)

## Example:

```js
josh@onix:~/dev/hoarders$ node
> require('hoarders')
undefined
> async
{ noConflict: [Function],
  nextTick: [Function],
  forEach: [Function],
  forEachSeries: [Function],
  forEachLimit: [Function],
  map: [Function],
  mapSeries: [Function],
  reduce: [Function],
  inject: [Function],
  foldl: [Function],
  reduceRight: [Function],
  foldr: [Function],
  filter: [Function],
  filterSeries: [Function],
  select: [Function],
  selectSeries: [Function],
  reject: [Function],
  rejectSeries: [Function],
  detect: [Function],
  detectSeries: [Function],
  some: [Function],
  any: [Function],
  every: [Function],
  all: [Function],
  sortBy: [Function],
  auto: [Function],
  waterfall: [Function],
  parallel: [Function],
  series: [Function],
  iterator: [Function],
  apply: [Function],
  concat: [Function],
  concatSeries: [Function],
  whilst: [Function],
  until: [Function],
  queue: [Function],
  log: [Function],
  dir: [Function],
  memoize: [Function],
  unmemoize: [Function] }
> colors
{ mode: 'console',
  bold: [Function],
  underline: [Function],
  italic: [Function],
  inverse: [Function],
  grey: [Function],
  black: [Function],
  yellow: [Function],
  red: [Function],
  green: [Function],
  blue: [Function],
  white: [Function],
  cyan: [Function],
  magenta: [Function],
  addSequencer: [Function],
  rainbow: [Function],
  zebra: [Function],
  setTheme: [Function],
  zalgo: [Function],
  stripColors: [Function] }
> browserify
{ [Function] bundle: [Function] }
> // AND THE LIST GOES ON!
undefined
> 
```

## install

    $ git clone git@github.com:jesusabdullah/hoarders.git
    $ cd hoarders
    $ sudo npm link --gangsta

Then to add hoarders to ANY project:

    $ npm link hoarders

## building

    node build.js

## Seriously?

maybe.

## License:

Hey, it felt right.

```
                               Tumbolia Public License
 
    Copyright Joshua Holbrook, 2012 
 
    Copying and distribution of this file, with or without modification, are
    permitted in any medium without royalty provided the copyright notice and
    this notice are preserved.
 
    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 
      0. opan saurce LOL
```

## For those of you with no sense of humor

You may "opt out" of Hoarders by modifying [the blacklist in build.js](https://github.com/jesusabdullah/hoarders/blob/master/build.js#L16-L26) and submitting a pull request.

### BEFORE DOING SO PLEASE KEEP THE FOLLOWING IN MIND:

1. **DON'T BE A DICK YOU ARE NOT ENTITLED.** By publishing your module to npm and giving it a permissive license, you are giving everybody implicit permission to depend on your module all they want. **I OFFER THIS BLACKLIST BECAUSE I AM A NICE GUY** and I just ask that you treat me kindly in return. If you're going to be passive-aggressive about it, then hey, so will I.

2. **PLEASE WRITE GOOD CODE.** Use comments to include your github name next to the blacklisted module name. Run build.js to make sure you didn't forget a comma. Write a reasonable commit message.

3. **Hoarders does not significantly affect download counts.** The build step does not download anything other than the module's name.
