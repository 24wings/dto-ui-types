import "reflect-metadata";
import * as Mustache from 'mustache';
export * from './decorator-parser';
export * from './meta-decorator';
export * from './ui';

var view = {
  title: "Joe",
  calc: function () {
    return 2 + 4;
  }
};

var output = Mustache.render("{{title}} spends {{calc}}", view);
console.log(output)