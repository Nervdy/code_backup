/**
 * link: https://leetcode.com/problems/unique-email-addresses/description/
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  function emailFormat(localname) {
    localname = localname.split('+')[0]
    localname = localname.replace(/\./g, '')
    return localname
  }
  
  let result = {}
  for (let email of emails) {
    let splitEmail = email.split('@')
    result[splitEmail[1]] ? result[splitEmail[1]].add(emailFormat(splitEmail[0])) : result[splitEmail[1]] = new Set([emailFormat(splitEmail[0])])
  }
  return Object.keys(result).reduce((p, k) => {
    p += result[k].size
    return p
  }, 0)
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
)
