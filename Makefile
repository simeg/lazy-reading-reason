.PHONY: all build ci deploy fmt lint serve test-ci test verify-deps

BINS=$(shell npm bin)

REACT_SCRIPTS=$(BINS)/react-scripts
PRETTIER=$(BINS)/prettier
YARN=$(shell which yarn)
REFMT=$(shell which refmt)

build:
	@echo "Not implemented yet"
	#$(REACT_SCRIPTS) build

ci: verify-deps lint test-ci build

deploy: ci
	@echo "Not implemented yet"
	#git push heroku master

fmt:
	$(REFMT) --in-place src/**/*.re

lint:
	@echo "Not implemented yet"
	#$(PRETTIER) --list-different "src/**/*.js"

serve:
	$(YARN) start

test-ci:
	@echo "Not implemented yet"
	#CI=true $(REACT_SCRIPTS) test

test:
	@echo "Not implemented yet"
	#$(REACT_SCRIPTS) test

verify-deps:
	@echo "Not implemented yet"
	#$(YARN) check --integrity
