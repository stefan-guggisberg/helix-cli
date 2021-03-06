/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-env mocha */

const path = require('path');
const assert = require('assert');
const fs = require('fs-extra');
const include = require('../src/include-util');

const PRE = path.resolve(__dirname, 'fixtures', 'preinclude.vcl');
const POST = path.resolve(__dirname, 'fixtures', 'postinclude.vcl');

describe('Testing include-util', () => {
  it('HTML can be included in VCL', () => {
    assert.equal(include(PRE), fs.readFileSync(POST).toString());
  });
});
