class Util {
    constructor() {}

    static log() {
        return Promise.resolve()
        .then(() => {
           console.log("I'm log from Util.log();");
        })
    }
}

export default Util;