"use strict";
const server = require("./app.js");
const routes = require("./routes/index.js");
/*** use Routes ***/ server.use("/api", routes);
const port = Number(process.env.PORT || 8080)(async ()=>{
    try {
        /*** run server ***/ server.listen(port, async ()=>{
            console.log(`server listening at http://localhost:${port}`);
        });
    } catch (err) {
        /*** handle error ***/ console.error(err);
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZXJ2ZXIgPSByZXF1aXJlKCcuL2FwcC5qcycpXG5jb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9pbmRleC5qcycpXG5cbi8qKiogdXNlIFJvdXRlcyAqKiovXG5zZXJ2ZXIudXNlKCcvYXBpJywgcm91dGVzKVxuXG5jb25zdCBwb3J0ID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MClcblxuKGFzeW5jICgpPT4ge1xuXHR0cnkge1xuXHRcdC8qKiogcnVuIHNlcnZlciAqKiovXG5cdFx0c2VydmVyLmxpc3Rlbihwb3J0LCBhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhgc2VydmVyIGxpc3RlbmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gKVxuXHRcdH0pXG5cdFx0XHRcblx0fWNhdGNoIChlcnIpIHtcblx0XHQvKioqIGhhbmRsZSBlcnJvciAqKiovXG5cdFx0Y29uc29sZS5lcnJvcihlcnIpXG5cdH1cbn0pKClcbiJdLCJuYW1lcyI6WyJzZXJ2ZXIiLCJyZXF1aXJlIiwicm91dGVzIiwidXNlIiwicG9ydCIsIk51bWJlciIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsU0FBU0MsUUFBUTtBQUN2QixNQUFNQyxTQUFTRCxRQUFRO0FBRXZCLGtCQUFrQixHQUNsQkQsT0FBT0csR0FBRyxDQUFDLFFBQVFEO0FBRW5CLE1BQU1FLE9BQU9DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJLE1BRXZDLFVBQVc7SUFDWCxJQUFJO1FBQ0gsa0JBQWtCLEdBQ2xCUixPQUFPUyxNQUFNLENBQUNMLE1BQU0sVUFBWTtZQUMvQk0sUUFBUUMsR0FBRyxDQUFDLENBQUMscUNBQXFDLEVBQUVQLEtBQUssQ0FBQztRQUMzRDtJQUVELEVBQUMsT0FBT1EsS0FBSztRQUNaLG9CQUFvQixHQUNwQkYsUUFBUUcsS0FBSyxDQUFDRDtJQUNmO0FBQ0QifQ==