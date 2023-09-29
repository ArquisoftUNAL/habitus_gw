build-gateway:
	docker build -t habitus_gw .

run-gateway:
	docker run -d -p 4000:4000 --name habitus_gw habitus_gw