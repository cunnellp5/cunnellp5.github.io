console.log('Starting animation...');
var brainviv = new Vivus('my-div', {type: 'sync', duration: 400, file: 'pages/svg/philly.svg'}, myCallBack);
function myCallBack() {
  brainviv
    .stop()
    .reset()
    .destroy();
    console.log('Animation finished.');
}
