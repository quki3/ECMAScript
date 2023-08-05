const server = require('./app.js')
const routes = require('./routes/index.js')

/*** use Routes ***/
server.use('/api', routes)

const port = process.env.PORT || 8080

(async ()=> {
	try {
		/*** run server ***/
		server.listen(port, async () => {
			console.log(`server listening at http://localhost:${port}`)
		})
			
	}catch (err) {
		/*** handle error ***/
		console.error(err)
	}
})()
