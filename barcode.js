$(document).ready(function(){

    Quagga.init({
        numOfWorkers: 4,
        locate: true,
        inputStream : {
          name : "Live",
          type : "LiveStream",
          constraints: {
               facingMode: "environment",
         },
         area: { // defines rectangle of the detection/localization area
            top: "0%",    // top offset
            right: "0%",  // right offset
            left: "0%",   // left offset
            bottom: "0%"  // bottom offset
          },
          singleChannel: false, // true: only the red color-channel is read
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
