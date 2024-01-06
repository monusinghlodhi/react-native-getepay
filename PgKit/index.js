import encryptEas from "../PgKit/component/encryptEas";
import decryptEas from "../PgKit/component/decryptEas";

const getepayPortal = (data, config) => {  
  const JsonData = JSON.stringify(data);

  var ciphertext = encryptEas(
    JsonData,
    config["GetepayKey"],
    config["GetepayIV"]
  );
  var newCipher = ciphertext.toUpperCase();

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    mid: data.mid,
    terminalId: data.terminalId,
    req: newCipher,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(config["GetepayUrl"], requestOptions)
    .then((response) => response.text())
    .then((result) => {

      var resultobj = JSON.parse(result);

      var responseurl = resultobj.response;

      var dataitem = decryptEas(
        responseurl,
        config["GetepayKey"],
        config["GetepayIV"]
      );
                       
      dataitem = JSON.parse(dataitem);

      window.location.href = dataitem.paymentUrl;

    })
    .catch((error) => console.log("error", error));
};

export default getepayPortal;