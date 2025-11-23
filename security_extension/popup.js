function detectCookies() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = new URL(tabs[0].url);

        chrome.cookies.getAll({ domain: url.hostname }, (cookies) => {
            console.log(cookies);
        });
    });
    return cookies;
}

function listCookies(cookies){
    for (let i = 0; i < cookies.length; i++) {
        console.log(`Cookie ${i + 1}:`);
        console.log(`  Name: ${cookies[i].name}`);
    }

}
detectCookies();
listCookies(cookies);