/*
  Copyright 2013 Raffaele Rossi <rossi.raffaele@gmail.com>
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
  http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

test("Should create img element", function() {
    // setup
    var expected = document.createElement("img");
    // exercise
    var actual = JAMAL.img();
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create img element with src attribute", function() {
    // setup
    var expected = document.createElement("img");
    expected.setAttribute("src", "/dummy.png");
    // exercise
    var actual = JAMAL.img("/dummy.png");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should add class name to img element with src attribute", function() {
    // setup
    var expected = document.createElement("img");
    expected.setAttribute("src", "/dummy.png");
    expected.className = "dummy-class";
    // exercise
    var actual = JAMAL.img("/dummy.png")
                      .addClassName("dummy-class");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create anchor elements", function() {
    // setup
    var expected = document.createElement("a");
    // exercise
    var actual = JAMAL.a();
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create anchor elements with href", function() {
    // setup
    var expected = document.createElement("a");
    expected.setAttribute("href", "#");
    // exercise
    var actual = JAMAL.a("#");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should append img to anchor element", function() {
    // setup
    var expected = document.createElement("a");
    expected.appendChild(document.createElement("img"));
    // exercise
    var actual = JAMAL.a().img().parentNode;
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create h1 elements", function() {
    // setup
    var expected = document.createElement("h1");
    // exercise
    var actual = JAMAL.h1();
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create h1 elements with text content", function() {
    // setup
    var expected = document.createElement("h1");
    expected.textContent = "dummy";
    // exercise
    var actual = JAMAL.h1("dummy");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should nest chain of children elements", function() {
    // setup
    var expected = document.createElement("h1");
    var a = document.createElement("a");
    var img = document.createElement("img");
    expected.appendChild(a);
    a.appendChild(img);
    // exercise
    var actual = JAMAL.h1().a().img().parentNode.parentNode;
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should add multiple class name", function() {
    // setup
    var expected = document.createElement("a");
    expected.setAttribute("class", "class-1 class-2");
    // exercise
    var actual = JAMAL.a().addClassName("class-1")
                          .addClassName("class-2");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create p elements", function() {
    // setup
    var expected = document.createElement("p");
    // exercise
    var actual = JAMAL.p();
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should create p elements with a text content", function() {
    // setup
    var expected = document.createElement("p");
    expected.textContent = "dummy";
    // exercise
    var actual = JAMAL.p("dummy");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should add class name to last child of a chain", function() {
    // setup
    var expected = document.createElement("p");
    var a = document.createElement("a");
    expected.appendChild(a);
    expected.className = "class-1";
    a.className = "class-2";
    // exercise
    var actual = JAMAL.p().addClassName("class-1")
                      .a().addClassName("class-2").parentNode;
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should add multiple data content name", function() {
    // setup
    var expected = document.createElement("p");
    expected.setAttribute("data-1", "value-1");
    expected.setAttribute("data-2", "value-2");
    // exercise
    var actual = JAMAL.p().addData("1", "value-1")
                          .addData("2", "value-2");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should support unordered lists", function() {
    // setup
    var expected = document.createElement("ul");
    var item1 = document.createElement("li");
    var item2 = document.createElement("li");
    item1.textContent = "dummy1";
    item2.textContent = "dummy2";
    expected.appendChild(item1);
    expected.appendChild(item2);
    // exercise
    var actual = JAMAL.ul();
    actual.li("dummy1");
    actual.li("dummy2");
    // verify
    ok(actual.isEqualNode(expected));
});

test("Should append child to list item", function() {
    // setup
    var expected = document.createElement("ul");
    var item = document.createElement("li");
    var p = document.createElement("p");
    var a = document.createElement("a");
    expected.appendChild(item);
    item.appendChild(p);
    p.textContent = "dummy";
    // exercise
    var actual = JAMAL.ul();
    actual.li().p("dummy");
    // verify
    ok(actual.isEqualNode(expected));
});

