var enter = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
function subdomainVisits(cpdomains) {
  let result = [], top = {}, one = {}, two = {}
  let cache_arr = cpdomains.map(i => {
    return { count: Number(i.split(' ')[0]), host: i.split(' ')[1] }
  })
  cache_arr.forEach(i => {
    let host_arr = i.host.split('.').reverse()
    if (host_arr[0]) {
      top[host_arr[0]] ? top[host_arr[0]] += i.count : top[host_arr[0]] = i.count
    }
    if (host_arr[1]) {
      let full_host = `${host_arr[1]}.${host_arr[0]}`
      one[full_host] ? one[full_host] += i.count : one[full_host] = i.count
    }
    if (host_arr[2]) {
      let full_host = `${host_arr[2]}.${host_arr[1]}.${host_arr[0]}`
      two[full_host] ? two[full_host] += i.count : two[full_host] = i.count
    }
  });
  [top, one, two].forEach(i => {
    let host = Object.keys(i)
    for (let k in host) {
      result.push(`${i[host[k]]} ${host[k]}`)
    }
  })
  return result
}
console.log('subdomainVisits:', subdomainVisits(enter))