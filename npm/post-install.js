const fs = require('fs')

class PrepareProyect {
    constructor() {
        this.pathToastAndroid = 'node_modules/nativescript-toast/toast.android.js'
    }

    handleToastFile() {
        if (fs.existsSync(this.pathToastAndroid)) {
            let fileRead = fs.readFileSync(this.pathToastAndroid).toString()
            fileRead = fileRead.replace('var application = require("application")', 'var Utils = require("@nativescript/core/utils")')
            fileRead = fileRead.replace('application.android.context', 'Utils.ad.getApplicationContext()')
            fs.writeFileSync(this.pathToastAndroid, fileRead, 'utf-8')
        }
    }
}

const prepareProyect = new PrepareProyect()

prepareProyect.handleToastFile()