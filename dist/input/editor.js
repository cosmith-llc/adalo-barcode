import {
  Barcode
} from '../../index.js'

export const components = {
  Barcode
}

export const config = {"author":"cosmith.io","description":"Barcode Generator","logo":"./logo.png","displayName":"Barcode","iosInstallScript":"./scripts/install_ios.sh","androidInstallScript":"./scripts/install_android.sh","name":"@cosmith/adalo-barcode-generator","version":"0.0.7","components":[{"name":"Barcode","displayName":"Barcode","icon":"./logo.png","defaultWidth":200,"defaultHeight":75,"props":[{"name":"type","displayName":"Select type barcode algorithm:","type":"text","default":"code128","control":{"type":"menu","options":[{"label":"CODE 128","value":"code128"},{"label":"EAN-13","value":"ean13"},{"label":"EAN-8","value":"ean8"},{"label":"EAN-5","value":"ean5"},{"label":"EAN-2","value":"ean2"},{"label":"UPC","value":"upc"},{"label":"CODE 39","value":"code39"},{"label":"ITF-14","value":"itf14"},{"label":"MSI","value":"msi"},{"label":"Pharmacode","value":"pharmacode"},{"label":"Codabar","value":"codabar"}]}},{"name":"data","displayName":"Value for barcode","type":"text","default":"ABC-abc-1234"},{"name":"text","displayName":"Text for barcode","type":"text","default":"ABC-abc-1234"},{"name":"widthBarcode","displayName":"Width Barcode","type":"number","default":1,"control":{"type":"slider","max":5,"min":1,"default":1}}],"resizeX":true,"resizeY":false}]}