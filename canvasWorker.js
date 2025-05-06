self.onmessage = function(event) {
    const { text, canvasId } = event.data;
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 24px Inter, sans-serif';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.transform(1, 0, 0, 1, 150, 25); // Center the text
    ctx.fillText(text, 0, 0);

    const dataUrl = canvas.toDataURL();
    self.postMessage(dataUrl);
};
