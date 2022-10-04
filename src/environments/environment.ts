// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  country: "uy",
  api_siemprepago: "https://testapi.siemprepago.com/v1/Scripts/PWCheckout.js?key=2lEydQvgd-PT6ptmndeagG_I56ONV7HQ",
  API_URL: "https://grupoemi-test-portalclientesyventas.azure-api.net/",
  startPageUrl: "http://ucm.com.uy/",
  ig_payment: "../assets/js/ig-payment.js",
  baseStyles: "../assets/css/styles-uy.css",
  suscriptionKey: "46023e2bbb87407fbd7c10765183500c",
  ambiente: "UyVal",
  RecaptKey: "6LdWNDgUAAAAAM8ERiTjNAOlJlc8PUdM79zXijvf",
  recaptchaDisable: false,
  imagesRoute: "../../../assets/uy/images/",
  alertImage: "../../../assets/images-uy/Alert.png",
  checkImage: "../../../assets/images-uy/check.png",
  warningImage: "../../assets/images/warning.png",
  nombre: "ucm",
  codePassport: "2",
  lengthCell: "9",
  regexStartCellPhoneNumber: "^09",
  startNumberCell: "09",
  regularExpressionDocument: "^[0-9][0-9]{4,15}$",
  lengthPhone: "8",
  regexStartPhoneNumber: "^1",
  startNumberPhone: "1",
  countryName: "Uruguay",
  lengthPassword: 8,
  adultAge: 18,
  paymentMethodDebitInvoiceCode: "OF03",
  cityName: "localidad",
  mapCode: "UCM",
  softwareVersionCode: "Version Web",
  apiKeyMaps: "AIzaSyCjLDebVboXGKpEa4C9E3i00yCgZo5yv9g",
  title: "Portal Clientes ucm",
  gtmURL: "",
  gtmConfig: "",
  shopOnline: "https://grupoemi-test-shoponline-uy.azurewebsites.net/",
  videoCallRecallTime: 30,
  browserVersionAvailable: {
    chrome: ">63",
    edge: ">13",
    firefox: ">57",
    safari: ">11",
    opera: ">=22",
    mobile: {
      androidBrowser: ">3.10"
    }
  },
  inactivityTime: 15,
  videoCallChangeStatusAvailable: true,
  useSentry: false
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
