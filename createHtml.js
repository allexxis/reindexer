const createHtml = () => {
   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <style>
           .container {
             height: 200px;
             position: relative;
             border: 3px solid green;
           }
           
           .center {
             margin: 0;
             position: absolute;
             top: 50%;
             left: 50%;
             -ms-transform: translate(-50%, -50%);
             transform: translate(-50%, -50%);
           }
           .button{
               height: 40px;
               width: 200px;
           }
           </style>
           
           <div class="container">
             <div class="center">
             <form method="post" action="/reindex">
             <label for="password">Contraseña:</label><br>
             <input type="text" id="password" name="password"><br>
             <input class="button" type="submit" value="Reindexar">
            </form>
            </div>
           </div>
   </body>
   </html>`;
};
module.exports = createHtml;
