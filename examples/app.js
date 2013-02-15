var geav = require('./../index');

var listOfEmails = [
  'postmaster@examples.com',
  'test@examples.com',
  'veryveryveryveryveryveryveryveryveryveryveryveryverylongemailadress@testdomain.com',
  'veryveryveryveryveryveryveryveryveryveryveryveryvlongemailadress@testdomain.com',
  'one@veryveryveryveryveryveryveryveryveryveryveryveryvveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvveryveryveryveryveryveryveryveryveryveryveryverylongdomainname.com',
  'niceandsimple@example.com',
  'very.common@example.com',
  'a.little.lengthy.but.fine@dept.example.com',
  'disposable.style.email.with+symbol@example.com',
  'user@[IPv6:2001:db8:1ff::a0b:dbd0]',
  '"much.more unusual"@example.com',
  '"very.unusual.@.unusual.com"@example.com',
  '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com',
  'postbox@com (top-level domains are valid hostnames)',
  'admin@mailserver1 (local domain name with no TLD)',
  '" "@example.org (space between the quotes)'
];

for (var i = 0; i < listOfEmails.length; i++) {
  console.log(listOfEmails[i] + ' is:', geav.isValid(listOfEmails[i]));
}