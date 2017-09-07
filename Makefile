js: webassembly/crc64_ecma_182.cc webassembly/crc64_ecma_182.h
	@emcc --bind -o dist/crc.js webassembly/crc64_ecma_182.cc -s \
		EXPORTED_FUNCTIONS="[\
			'_crc64_init',\
			'_crc64',\
			'_str_to_uint64',\
			'_uint64_to_str'\
		]" && echo 'WebAssembly done.'

test:
	@./node_modules/.bin/_mocha

.PHONY: test
