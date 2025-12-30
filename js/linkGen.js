function generateLink() {
    const input = document.getElementById("urlInput").value.trim();
    const protocol = document.getElementById("protocolSelect").value;
    const output = document.getElementById("output");

    if (!input) {
        output.innerHTML = "<span class='error'>Please enter a URL or IP.</span>";
        return;
    }

    let url;

    if (protocol === "custom") {
        url = input;
    } else {
        url = protocol + input;
    }

    output.innerHTML = `
        <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>
    `;
}
