function formatFn(val, rules, data) {
  if (!data.ybstoreList[0]) data.ybstoreList[0] = {};
  if (!data.ybstoreList[0].ybstorevolumeList) data.ybstoreList[0].ybstorevolumeList = [];
  let arr = val.split(/\s+/);
  arr.reduce((p, v) => {
    let obj = {};
    v = v.split('/');
    obj.piece = v[1];
    v = v[0].split('*');
    obj.longs = v[0];
    obj.widths = v[1];
    obj.heights = v[2];
    p.push(obj);
    return p;
  }, data.ybstoreList[0].ybstorevolumeList);
}

let data = {
  a: '123',
  b: '456'
}

let rules = {
  field: 'longs,widths,heights,piece',
  level: '4,4,4,4',
  split: ' ',
  formatFn: ``
}

formatFn('115*100*119/1  1120*95*102/1  120*95*72/1', rules, data)

console.log(data)