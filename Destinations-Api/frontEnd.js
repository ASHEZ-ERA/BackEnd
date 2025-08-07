
res = await fetch("https://example.org/post", {
    method: "POST",
    body: JSON.stringify({username: "user_1"}),
    headers: {
        "Content-Type": "applications/json"
    }

})