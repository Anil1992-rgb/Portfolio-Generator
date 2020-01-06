const colors = {
    green: {
        wrapperBackground: "#E6E1C3",
        headerBackground: "#C1C72C",
        headerColor: "black",
        photoBorderColor: "black"
    },
    blue: {
        wrapperBackground: "#5F64D3",
        headerBackground: "#26175A",
        headerColor: "white",
        photoBorderColor: "#73448C"
    },
    pink: {
        wrapperBackground: "#879CDF",
        headerBackground: "#FF8374",
        headerColor: "white",
        photoBorderColor: "#FEE24C"
    },
    red: {
        wrapperBackground: "#DE9967",
        headerBackground: "#870603",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(res, stars) {
    return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[res.data.color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[res.data.color].headerBackground};
         color: ${colors[res.data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[res.data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[res.data.color].headerBackground};
           color: ${colors[res.data.color].headerColor};
           margin: 20px;
           width: 40%;
         }

    
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      
      <body>
      <div class="wrapper">
  
          <div class="photo-header">
              <img class="" src="${res.data.avatar_url}">
              <h1>Hi!</h1>
              <h1>My name is ${res.data.name}</h1>
              <h4>Currently @ ${res.data.company}</h4>
              <div class="links-nav">
                  <h6 class="nav-link"><i class="fas fa-map-marker-alt"></i> ${res.data.location}</h6>
                  <a class="nav-link" href="${res.data.html_url}"><i
                          class="fab fa-github"></i> GitHub</a>
                  <a class="nav-link" href="${res.data.blog}"><i class="fas fa-rss"></i> Blog</a>
              </div>
          </div>
  
          <main>
              <div class="container">
  
                  <h1 class="col">${res.data.bio}</h1>
  
                  <div class="card-deck">
                      <div class="card col col-sm-6">
                          <h2>Followers</h2>
                          <h3>${res.data.followers}</h3>
                      </div>
                      <div class="card col col-sm-6">
                          <h2>Following</h2>
                          <h3>${res.data.following}</h3>
                      </div>
                  </div>
                  <br>
                  <div class="card-deck">
                      <div class="card col col-sm-6">
                          <h2>GitHub stars</h2>
                          <h3>${stars.data.length}</h3>
                      </div>
                      <div class="card col col-sm-6">
                          <h2>Public Repos</h2>
                          <h3>${res.data.public_repos}</h3>
                      </div>
                  </div>
                  <br>
              </div>
          </main>
      </div>
  </body>
  
</html>`
}

module.exports = generateHTML;