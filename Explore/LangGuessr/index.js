import {franc, francAll} from 'franc';
import langs from 'langs';
import colors from 'colors';

// const colors = require('colors')
const input = process.argv[2];
const langCode = franc(input)
if(langCode === 'und'){
    console.log("Sorry, try more".red)
}else{
    const language = langs.where("3", langCode);
console.log(`the name is: ${language.name}`.green)

}


