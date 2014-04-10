/*
curl --data "__VIEWSTATE=%2FwEPDwUKLTE3MTQ0MDQ4OQ9kFgICAw9kFgQCBQ8PFgIeBFRleHQFCjEwLzA0LzIwMTRkZAIHDw8WAh8ABVdTZSBlbmNvbnRyw7MgOCBkb2N1bWVudG9zKHMpIHBlbmRpZW50ZXMgZGUgcGFnby4gPGJyPk1vbnRvIHRvdGFsIGEgcGFnYXI6IFMvLiAxNSw5NjMuMzJkZBgCBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAgUOYnRuQnVzY2FyUGxhY2EFEWJ0bkJ1c2NhclBhcGVsZXRhBQ9ncmRFc3RhZG9DdWVudGEPPCsACgEIAgFkVuam%2FiiajHhy4BCjxdAxh1sr5M8%3D&__EVENTVALIDATION=%2FwEWBQLX7qmeBQL31tvdDAK96MO7BAL6kYStCALltraID6a3UvEP6jQ1Mk%2F%2BxmCJ6q%2FSEyqG&txtPlaca=Z1J710&btnBuscarPlaca.x=24&btnBuscarPlaca.y=12&txtPapeleta=" https://www.pit.gob.pe/pit2007/EstadoCuenta.aspx
*/

var request = require('request');
var options = {
  method: 'POST',
  url: 'https://www.pit.gob.pe/pit2007/EstadoCuenta.aspx',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    "__VIEWSTATE":"/wEPDwUKLTE3MTQ0MDQ4OQ9kFgICAw9kFgQCBQ8PFgIeBFRleHQFCjEwLzA0LzIwMTRkZAIHDw8WAh8ABVdTZSBlbmNvbnRyw7MgOCBkb2N1bWVudG9zKHMpIHBlbmRpZW50ZXMgZGUgcGFnby4gPGJyPk1vbnRvIHRvdGFsIGEgcGFnYXI6IFMvLiAxNSw5NjMuMzJkZBgCBR5fX0NvbnRyb2xzUmVxdWlyZVBvc3RCYWNrS2V5X18WAgUOYnRuQnVzY2FyUGxhY2EFEWJ0bkJ1c2NhclBhcGVsZXRhBQ9ncmRFc3RhZG9DdWVudGEPPCsACgEIAgFkVuam/iiajHhy4BCjxdAxh1sr5M8=",
    "__EVENTVALIDATION":"/wEWBQLX7qmeBQL31tvdDAK96MO7BAL6kYStCALltraID6a3UvEP6jQ1Mk/+xmCJ6q/SEyqG",
    "txtPlaca":"Y1C795",
    "btnBuscarPlaca.x":"24",
    "btnBuscarPlaca.y":"12",
    "txtPapeleta":""
  }
};

request.post(options, function (error, response, body) {
  console.log(body);
});