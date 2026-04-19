const protocolSelect = document.getElementById('protocolSelect');
const domainInput = document.getElementById('domainInput');
const customProtocolGroup = document.getElementById('customProtocolGroup');
const customProtocol = document.getElementById('customProtocol');
const generateBtn = document.getElementById('generateBtn');
const outputMessage = document.getElementById('outputMessage');
const generatedLinkBox = document.getElementById('generatedLinkBox');
const generatedHypertextLink = document.getElementById('generatedHypertextLink');
const copyBtn = document.getElementById('copyBtn');

let generatedURL = '';

protocolSelect.addEventListener('change', () => {
    if (protocolSelect.value === 'custom') {
        customProtocolGroup.style.display = 'flex';
        customProtocol.focus();
    } else {
        customProtocolGroup.style.display = 'none';
    }
});

generateBtn.addEventListener('click', generateLink);
domainInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateLink();
    }
});

customProtocol.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateLink();
    }
});

function generateLink() {
    let protocol = protocolSelect.value;
    const domain = domainInput.value.trim();

    if (!domain) {
        outputMessage.textContent = 'Please enter a domain or IP address.';
        outputMessage.style.display = 'block';
        generatedLinkBox.style.display = 'none';
        return;
    }

    if (protocol === 'custom') {
        protocol = customProtocol.value.trim();
        if (!protocol) {
            outputMessage.textContent = 'Please enter a custom protocol.';
            outputMessage.style.display = 'block';
            generatedLinkBox.style.display = 'none';
            return;
        }
        if (!protocol.endsWith('://')) {
            protocol += '://';
        }
    }

    generatedURL = protocol + domain;

    generatedHypertextLink.href = generatedURL;
    generatedHypertextLink.textContent = generatedURL;

    outputMessage.style.display = 'none';
    generatedLinkBox.style.display = 'flex';
}

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedURL).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(() => {
        const tempInput = document.createElement('input');
        tempInput.value = generatedURL;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});
