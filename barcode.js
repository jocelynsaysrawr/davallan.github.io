$(document).ready(function(){

    Quagga.init({
        numOfWorkers: 4,
        locate: true,
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#ls')    // Or '#yourElement' (optional)
        },
        decoder : {
            readers : ["code_128_reader","upc_e","upca_a"]
        },
        debug: {
            drawBoundingBox: false,
            showFrequency: false,
            drawScanline: true,
            showPattern: false
        }
        }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
    });

});
