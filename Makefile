build:
	@git pull \
	&& cd app \
	&& yarn build \
	&& cd .. \
	&& cp -R app/build/* docs/

history:
	@git pull \
	&& git add . \
	&& git commit -m "commit all changes" \
	&& git push origin HEAD
