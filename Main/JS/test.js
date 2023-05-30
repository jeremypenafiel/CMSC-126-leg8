const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

  <link rel="stylesheet" href="CSS/account.css">
  <script defer src="JS/nav.js"></script>
  <title>Account Page</title>
  <script defer src="JS/accountPage.js" type="module"></script>
</head>

<body>
  <div class="navbar"></div>

  <img src="place.jpg" id="account_img">

  <table id="AccountDetails">
    <td>
      <p>Personal Info</p>
      <P>Name:</P>
      <p id="name"></p>
      <p>Email:</p>
      <p id="email"></p>

    </td>

  </table>

  <a href="ProductUpload.html"><button id="upload"> Product Upload</button></a>


  <table id="Transaction">
    <td>Recent Transactions</td>
    <tr>
      <td>Transaction Number</td>
      <td>Date</td>
      <td>Item</td>
      <td>Bartered For</td>
    </tr>
    <tr>
      <td>4</td>
      <td>03/10/2023</td>
      <td>555 Sardines(2)</td>
      <td>Purefoods Corned Beef(1)</td>
    </tr>
    <tr>
      <td>3</td>
      <td>03/05/2023</td>
      <td>Shades(1)</td>
      <td>Cap(1)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>02/18/2023</td>
      <td>T-shirt(1)</td>
      <td>Shorts(1)</td>
    </tr>
    <tr>
      <td>1</td>
      <td>02/8/2023</td>
      <td>Century Tuna(1)</td>
      <td>555 Asahi</td>
    </tr>
  </table>
  <div id="footer"></div>
</body>

</html>`;

const blob = new Blob([html], {type: "text/html"});
let url = URL.createObjectURL(blob);