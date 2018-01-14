Meteor.startup(function(){	
    const textInit = `
    *******************************************
    *           Starting homeSystem           *
    *         Author: Augusto Alvarez         *
    *    Email: augustoalvarez05@gmail.com    *
    * https://github.com/laugustol/homeSystem *
    * URL: ${process.env.ROOT_URL}            *
    *           PORT: ${process.env.PORT}     *
    *******************************************\n`;
    console.log(textInit);
});
   