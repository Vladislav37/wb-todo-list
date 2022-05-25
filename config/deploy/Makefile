frontend_complex:
	npm ci --no-audit --legacy-peer-deps
	node cli/_utils/ci-utils/precommit-runner/runner.js

frontend_build_and_cdn:
	npm ci --no-audit --legacy-peer-deps
	node cli/_utils/ci-utils/precommit-runner/runner.js
	rm -rf build/umd/*.css.map
	node node_modules/@wildberries/service-cdn-uploader/index.js ./build
	node config/deploy/build-public-paths.js
	rm -rf build/umd/*.css.map
