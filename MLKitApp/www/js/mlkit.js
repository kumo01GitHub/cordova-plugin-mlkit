function onButtonClick(name) {
    if (name === 'TextRecognition') {
        cordova.plugins.mlkit.textrecognition.coolMethod(
            "Awesome!",
            function(result) {
                alert(`${name} fired! Result: ${result}`);
            },
            function(error) {
                alert(`${name} failed! Error: ${error}`);
            }
        );
    } else {
        alert(`${name} fired!`);
    }
}
