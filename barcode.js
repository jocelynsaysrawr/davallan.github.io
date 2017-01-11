$(document).ready(function(){

    Quagga.init({
        numOfWorkers: 4,
        locate: false,
        inputStream : {
          name : "Live",
          type : "LiveStream",
          constraints: {
               facingMode: "environment",
             },
          target: document.querySelector('#ls')    // Or '#yourElement' (optional)
        },
        decoder : {
            readers : ["code_128_reader","upc_e","upca_a"],
            debug: {
                drawBoundingBox: true,
                showFrequency: true,
                drawScanline: true,
                showPattern: true
            },
            multiple: false
        },
        debug: true
    }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
          Quagga.onDetected(function(result){
              var code = result.codeResult.code;
              $('#ls').html(code);
      });
    });



});
