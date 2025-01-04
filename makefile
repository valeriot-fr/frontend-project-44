install:
	npm ci
brain-games: 
	node bin/brain-games.js
brain-even: 
	node src/index.js brain-even
brain-calc:
	node src/index.js brain-calc
brain-gcd:
	node src/index.js brain-gcd
brain-progression:
	node src/index.js brain-progression
brain-prime:
	node src/index.js brain-prime
publish:
	npm publish --dry-run
lint:
	npx eslint .