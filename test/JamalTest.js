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

function wrap(content) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = content;
    return wrapper;
}

function assertEquivalentTo(equivalentHtml, actualElement) {
    var wrapper = wrap(equivalentHtml);
    ok(actualElement.isEqualNode(wrapper.childNodes[0]));
}

test("Should create img element", function() {
    // setup
    // exercise
    var actual = JAMAL.img();
    // verify
    assertEquivalentTo('<img/>', actual);
});

test("Should create img element with src attribute", function() {
    // setup
    // exercise
    var actual = JAMAL.img("/dummy.png");
    // verify
    assertEquivalentTo('<img src="/dummy.png"/>', actual);
});

test("Should add class name to img element with src attribute", function() {
    // setup
    // exercise
    var actual = JAMAL.img("/dummy.png")
                      .addClassName("dummy-class");
    // verify
    assertEquivalentTo('<img src="/dummy.png" class="dummy-class"/>', actual);
});

test("Should create anchor elements", function() {
    // setup
    // exercise
    var actual = JAMAL.a();
    // verify
    assertEquivalentTo('<a/>', actual);
});

test("Should create anchor elements with href", function() {
    // setup
    // exercise
    var actual = JAMAL.a("#");
    // verify
    assertEquivalentTo('<a href="#"/>', actual);
});

test("Should append img to anchor element", function() {
    // setup
    // exercise
    var actual = JAMAL.a().img().parentNode;
    // verify
    assertEquivalentTo('<a><img/></a>', actual);
});

test("Should create h1 elements", function() {
    // setup
    // exercise
    var actual = JAMAL.h1();
    // verify
    assertEquivalentTo('<h1/>', actual);
});

test("Should create h1 elements with text content", function() {
    // setup
    // exercise
    var actual = JAMAL.h1("dummy");
    // verify
    assertEquivalentTo('<h1>dummy</h1>', actual);
});

test("Should nest chain of children elements", function() {
    // setup
    // exercise
    var actual = JAMAL.h1().a().img().parentNode.parentNode;
    // verify
    assertEquivalentTo('<h1><a><img/></a></h1>', actual);
});

test("Should add multiple class name", function() {
    // setup
    // exercise
    var actual = JAMAL.a().addClassName("class-1")
                          .addClassName("class-2");
    // verify
    assertEquivalentTo('<a class="class-1 class-2"/>', actual);
});

test("Should create p elements", function() {
    // setup
    // exercise
    var actual = JAMAL.p();
    // verify
    assertEquivalentTo('<p/>', actual);
});

test("Should create p elements with a text content", function() {
    // setup
    // exercise
    var actual = JAMAL.p("dummy");
    // verify
    assertEquivalentTo('<p>dummy</p>', actual);
});

test("Should add class name to last child of a chain", function() {
    // setup
    // exercise
    var actual = JAMAL.p().addClassName("class-1")
                      .a().addClassName("class-2").parentNode;
    // verify
    assertEquivalentTo('<p class="class-1"><a class="class-2"/></p>', actual);
});

test("Should add multiple data content name", function() {
    // setup
    // exercise
    var actual = JAMAL.p().addData("1", "value-1")
                          .addData("2", "value-2");
    // verify
    assertEquivalentTo('<p data-1="value-1" data-2="value-2"/>', actual);
});

test("Should support unordered lists", function() {
    // setup
    // exercise
    var actual = JAMAL.ul();
    actual.li("dummy1");
    actual.li("dummy2");
    // verify
    assertEquivalentTo('<ul><li>dummy1</li><li>dummy2</li></ul>', actual);
});

test("Should append child to list item", function() {
    // setup
    // exercise
    var actual = JAMAL.ul();
    actual.li().p("dummy");
    // verify
    assertEquivalentTo('<ul><li><p>dummy</p></li></ul>', actual);
});

test("Should create div elements", function() {
    // setup
    // exercise
    var actual = JAMAL.div();
    // verify
    assertEquivalentTo('<div/>', actual);
});

test("Should create widgets", function() {
    // setup
    // exercise
    var actual = JAMAL.widget();
    // verify
    assertEquivalentTo('<div class="jamal-widget"/>', actual);
});

test("Should create flow layouts", function() {
    // setup
    // exercise
    var actual = JAMAL.flowLayout();
    // verify
    assertEquivalentTo('<div class="jamal-flow-layout"/>', actual);
});

test("Should create flow layout items", function() {
    // setup
    // exercise
    var actual = JAMAL.flowLayout();
    actual.nextItem();
    // verify
    assertEquivalentTo('<div class="jamal-flow-layout">'+
                       '<div class="jamal-flow-layout-item"/>'+
                       '</div>',
                       actual);
});

test("Should create child of layout item", function() {
    // setup
    // exercise
    var actual = JAMAL.flowLayout();
    actual.nextItem().div();
    // verify
    assertEquivalentTo('<div class="jamal-flow-layout">'+
                       '<div class="jamal-flow-layout-item">'+
                       '<div/>'+
                       '</div>'+
                       '</div>',
                       actual);
});

