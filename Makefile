js: webassembly/crc64_ecma_182.cc webassembly/crc64_ecma_182.h
	@./scripts/emcc_check.js
	@emcc \
		-o dist/crc.js \
		webassembly/crc64_ecma_182.cc \
		-s EXPORTED_FUNCTIONS="[\
			'_crc64_init',\
			'_crc64',\
			'_str_to_uint64',\
			'_uint64_to_str',\
			'_malloc',\
			'_free'\
		]" \
		-s EXPORTED_RUNTIME_METHODS="[\
			'stringToUTF8',\
			'writeArrayToMemory',\
			'UTF8ToString'\
		]" \
		-s WASM=0 \
		-s WASM_ASYNC_COMPILATION=0 && echo 'WebAssembly done.'

test:
	@./node_modules/.bin/_mocha

.PHONY: test
