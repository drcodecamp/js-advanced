const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const progress = document.getElementById('progress');
const progressText = document.getElementById('progress-text');
const statusDiv = document.getElementById('status');

fileInput.addEventListener('change', () => {
    uploadBtn.disabled = !fileInput.value;
});

uploadBtn.addEventListener('click', () => {
    const file = fileInput.files[0];
    uploadFile(file);
});

function uploadFile(file) {
    statusDiv.textContent = 'Upload in progress...';
    progress.value = 0;
    progressText.textContent = '0%';

    const fileSize = file.size;
    const chunkSize = 1024 * 1024; // 1 MB chunk size
    const numChunks = Math.ceil(fileSize / chunkSize);

    let uploadedChunks = 0;

    function uploadNextChunk() {
        const start = uploadedChunks * chunkSize;
        const end = start + chunkSize;
        const chunk = file.slice(start, end);

        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                // Simulating upload delay
                setTimeout(() => {
                    uploadedChunks++;
                    const percentComplete = Math.round((uploadedChunks / numChunks) * 100);
                    progress.value = percentComplete;
                    progressText.textContent = `${percentComplete}%`;

                    if (percentComplete === 100) {
                        statusDiv.textContent = 'File uploaded successfully!';
                    } else {
                        resolve();
                    }
                }, 500);
            };

            reader.onerror = reject;
            reader.readAsArrayBuffer(chunk);
        });
    }

    function uploadChunks() {
        if (uploadedChunks < numChunks) {
            return uploadNextChunk().then(uploadChunks);
        }
        return Promise.resolve();
    }

    uploadChunks();
}