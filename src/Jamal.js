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
JAMAL = (function() {
    /**
     * Create and append a child DOM element to the given parent. 
     *  
     * @param parent The parent DOM element to append the child to. 
     * @param tag The tag name of the child DOM element to create.
     * @param properties A set of properties to set to the child DOM 
     *                   element. Only truthy properties will be set.
     *  
     * @return The child object. 
     */
    function _appendChild(parent, tag, properties) {
        var child = _createElement(tag);
        if (parent !== JAMAL) {
            parent.appendChild(child);
        }
        child.setTruthyProperties(properties);
        return child;
    }

    /**
     * Create a DOM element and add JAMAL specific functions to it. 
     *  
     * @param tag The tag name of the child DOM element to create. 
     *  
     * @return The element created. 
     */
    function _createElement(tag) {
        var element = document.createElement(tag);
        _injectMethods(element);

        /**
         * Add an HTML class attribute to this element. 
         * @param clazz The class attribute to add. 
         */
        element.addClassName = function(clazz) {
            if (! this.className) {
                this.className = clazz;
            } else {
                this.className += " "+clazz;
            }
            return this;
        }

        /**
         * Set the properties of this object, but only if they're truthy. 
         * @param properties The properties to set. 
         */
        element.setTruthyProperties = function(properties) {
            for (var i in properties) {
                if (properties[i]) this[i] = properties[i];
            }
            return this;
        }

        /**
         * Add an HTML5 "data" attribute. 
         * @param name The suffix to the desired "data-" attribute. 
         * @param value The value of the data attribute. 
         */
        element.addData = function(name, value) {
            element.setAttribute("data-"+name, value);
            return element;
        }

        return element;
    }

    /**
     * Inject the JAMAL methods to the given object, in order to
     * provide method chaining. 
     * @param object The object to inject the methods to. 
     */
    function _injectMethods(object) {
        for (var i in JAMAL) {
            object[i] = JAMAL[i];
        }
    }

    /**
     * Create an "A" HTML element. 
     * @param href An optional value for the href attribute.
     */
    this.a = function(href) {
        return _appendChild(this, "a", {"href" : href});
    };

    /**
     * Create a "DIV" HTML element.
     */
    this.div = function() {
        return _appendChild(this, "div");
    }

    /**
     * Create a jamal flow layout.
     */
    this.flowLayout = function() {
        var child = _appendChild(this, "div", {"className": "jamal-flow-layout"});

        /**
         * Create an item into a flow layout
         */
        child.nextItem = function() {
            return _appendChild(this, "div", {"className": "jamal-flow-layout-item"});
        }
        return child;
    }

    /**
     * Create an "IMG" HTML element. 
     * @param src An optional value for the src attribute. 
     */
    this.img = function(src) {
        return _appendChild(this, "img", {"src" : src});
    };

    /**
     * Create an "H1" HTML element. 
     * @param content An optional textual content. 
     */
    this.h1 = function(content) {
        return _appendChild(this, "h1", {"textContent": content});
    };

    /**
     * Create a "P" HTML element. 
     * @param content An optional textual content. 
     */
    this.p = function(content) {
        return _appendChild(this, "p", {"textContent": content});
    }

    /**
     * Create an "UL" HTML element.
     */
    this.ul = function() {
        return _appendChild(this, "ul");
    }

    /**
     * Create an "LI" HTML element.
     */
    this.li = function(content) {
        return _appendChild(this, "li", {"textContent": content});
    }

    /**
     * Create a jamal widget.
     */
    this.widget = function() {
        return _appendChild(this, "div", {"className": "jamal-widget"});
    }

    return this;
}).call({});

