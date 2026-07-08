async function sendDrawReq(offsetX, offsetY, isDrawing) {

    const canvas = document.getElementById('canvas');

    if (offsetX < 0 || offsetY < 0 || offsetX > canvas.width || offsetY > canvas.height) {
        console.error('Error: You can\'t draw outside the whiteboard');
        return;
    }

    const drawData = {
        x: offsetX,
        y: offsetY,
        isDrawing: isDrawing
    };

    try {
        const response = await fetch('http://127.0.0.1:5501/whiteboard.html', {
            method: 'POST',
            headers: {
                'Content-Type':'application-json'
            },
            body: JSON.stringify(drawData)
        });

        if(!response.ok) {
            throw new Error('HTTP Error! Status: ${response.status}');
        }

        const result = await response.json();
    }

    catch (error) {
        console.log('Error in sending draw request:', error);
        return;
    }
}
