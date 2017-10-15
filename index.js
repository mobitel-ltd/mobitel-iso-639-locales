const list = require('./list.js');

/** Adding functional for list */
class Locales {
    /** Class constructor */
    constructor() {
        this.list = list;
        this.codeList = [];

        let i;
        for (i = 0; i < this.list.length; i++) {
            this.codeList.push(this.list[i].locale);
        }

        this.codeList = Object.freeze(this.codeList);
    }

    /**
     * Search locale in list by locale code
     * @param {String} code Code for search
     * @returns {{locale:String, name:String}|Null} Object with locale data or NULL
     * @private
     */
    _search(code) {
        const self = this;

        try {
            let i;
            for (i = 0; i < self.list.length; i++) {
                if (self.list[i].locale.toLowerCase() === code.toLowerCase()) {
                    return self.list[i];
                }
            }

            throw `Not found`;
        } catch (error) {
            return null;
        }
    }

    /**
     * Validate is locale exist
     * @param {String} code Locale for validation
     * @returns {boolean} True if locale exist or False
     */
    validate(code) {
        return !!(this._search(code));
    }

    /**
     * Get locale info if exist
     * @param {String} code Locale for search
     * @returns {{locale:String, name:String}|Null} Object with locale data or NULL
     */
    get(code) {
        return this._search(code);
    }
}

module.exports = new Locales();
