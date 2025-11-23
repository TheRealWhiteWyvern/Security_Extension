console.log("Detecting cookies...");

async function detectCookies() {
    cookie_list = []
    const cookies = await cookieStore.getAll();
    if (cookies.length > 0) {
        console.log(`getAll(): ${cookies.length}:`);
        cookies.forEach((cookie) => console.log(cookie));
    } else {
        console.log("Cookies not found");
    }
}
detectCookies();