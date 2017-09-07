const cheeses = require('../data/cheeses.js');

/**
 * @module Cheeses
 */
module.exports = {
    /**
     * getAll
     * Returnere et JSON objekt med alle oste fra kartoteket
     * 
     * @returns {Objekt}
     */
    'getAll': () => cheeses,
    
    /**
     * getOne
     * Returnere et JSON objekt med en enkelt ost fra kartoteket
     * @param {string} varenr - varenummeret på en ost
     * @returns {Object}
     */
    'getOne': (varenr) => {
        let currentCheese = null;
        cheeses.forEach((cheese) => {
            if (cheese.varenr == varenr) {
                currentCheese = JSON.stringify(cheese);
            }
        });

        if(currentCheese !== null){
            return currentCheese;
        }else{
            return { 
                "code": "ResourceNotFound", 
                "message": `${varenr} does not exist` 
            };
        }
    }
}; 