const noramilizeExampleCodeWhitespace = (code, indent = 0) => {
  const baseIndent = 10

  return code
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')
    .replace(new RegExp(`\n {${baseIndent - indent}}`, 'g'), '\n')
}

const generateCodeProperties = (options) => {
  let headAndBodyCode = ''
  if (options.headCode) {
    headAndBodyCode += '<!-- Add the code below to your head, after the Vue core library -->\n' + noramilizeExampleCodeWhitespace(options.headCode) +
      '\n<!-- End of head code -->\n\n'
  }
  headAndBodyCode += noramilizeExampleCodeWhitespace(options.bodyCode)

  const encodedFullHTML = encodeURIComponent(
`<!DOCTYPE html>
<html>
<head>
  <title>My Vue App</title>
  <script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>${options.headCode ? '\n  ' + noramilizeExampleCodeWhitespace(options.headCode, 2) : ''}
</head>
<body>
  ${noramilizeExampleCodeWhitespace(options.bodyCode, 2)}
</body>
</html>`
  )

  return {
    title: `Example ${options.exerciseId}.${options.exampleId}: ${options.title}`,
    code: headAndBodyCode,
    url: 'http://jsbin.com/?html,output&html=' + encodedFullHTML,
    itsWorkingWhen: options.itsWorkingWhen,
    newConcepts: options.newConcepts
  }
}

export default [
  {
    title: '1. Basic data binding and reactivity',
    examples: [
      generateCodeProperties({
        exerciseId: 1,
        exampleId: 1,
        title: 'Basic working Vue app',
        bodyCode: `
          <p>{{ greeting }} world!</p>

          <script>
            new Vue({
              // We're defining the app as the entire body
              el: 'body',

              // This is the data we're using in our app
              data: {
                greeting: 'Hello'
              }
            })
          </script>
        `,
        itsWorkingWhen: 'you see "Hello world!" in the browser.',
        newConcepts: [
          {
            title: 'Hello world example',
            url: 'http://vuejs.org/guide/index.html'
          },
          {
            title: 'Data binding',
            url: 'http://vuejs.org/guide/syntax.html'
          }
        ],
        newPrereqJavaScript: [
          {
            title: 'Strings',
            url: 'http://www.w3schools.com/jsref/jsref_obj_string.asp'
          },
          {
            title: 'Objects',
            url: 'http://www.w3schools.com/js/js_objects.asp'
          }
        ]
      }),
      generateCodeProperties({
        exerciseId: 1,
        exampleId: 2,
        title: 'Data binding',
        bodyCode: `
          <!--
          v-model binds data to a form input
          -->
          <input v-model="greeting">
          <p>{{ greeting }} world!</p>

          <script>
            new Vue({
              el: 'body',
              data: {
                greeting: 'Hello'
              }
            })
          </script>
        `,
        itsWorkingWhen: 'the page updates with what you type into the input',
        newConcepts: [
          {
            title: 'Form input bindings',
            url: 'http://vuejs.org/guide/forms.html'
          }
        ]
      }),
      generateCodeProperties({
        exerciseId: 1,
        exampleId: 3,
        title: 'What <code>v-model</code> is doing',
        bodyCode: `
          <!--
          This code does exactly the same thing as the previous code
          example, but without v-model. This is to demonstrate what
          v-model is actually doing, so it doesn't seem like magic.
          -->
          <input v-bind:value="message" v-on:input="updateMessage">
          <p>{{ message }}</p>

          <script>
            new Vue({
              el: 'body',
              data: {
                message: 'Hello world!'
              },
              methods: {
                updateMessage: function (event) {
                  this.message = event.target.value
                }
              }
            })
          </script>
        `,
        itsWorkingWhen: 'it works exactly like the previous example',
        newConcepts: [
          {
            title: 'Intro to methods and events',
            url: 'http://vuejs.org/guide/events.html'
          },
          {
            title: '<code>v-on</code> in depth',
            url: 'http://vuejs.org/api/#v-on'
          },
          {
            title: '<code>v-bind</code> in depth',
            url: 'http://vuejs.org/api/#v-bind'
          },
          {
            title: 'Methods in depth',
            url: 'http://vuejs.org/api/#methods'
          }
        ],
        newPrereqJavaScript: [
          {
            title: 'Functions',
            url: 'http://www.w3schools.com/js/js_functions.asp'
          },
          {
            title: 'Events',
            url: 'http://www.w3schools.com/js/js_events.asp'
          }
        ]
      }),
      generateCodeProperties({
        exerciseId: 1,
        exampleId: 4,
        title: 'Markdown generator',
        headCode: `
          <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.min.js"></script>
          <!--
          The library above will help us convert markdown to HTML in
          JavaScript. Don't know what Markdown is? It's a simple
          markup language that's often used to write rich content
          that will be hosted online, such as comments (like on
          GitHub issues), README files, or blog posts.

          Check out this link to learn more:
          https://guides.github.com/features/mastering-markdown/
          -->

          <style>
            textarea {
              display: block;
              width: 300px;
            }
          </style>
        `,
        bodyCode: `
          <h1>Markdown to HTML Converter</h1>

          <textarea v-model="markdown" rows="10"></textarea>
          <button v-on:click="generateHTML">
            Generate HTML
          </button>

          <pre><code>{{ html }}</code></pre>

          <script>
            new Vue({
              el: 'body',
              data: {
                markdown: '# This is some markdown\\n\\n- here\\'s\\n- a\\n- list\\n\\nClick the button below to turn me into HTML!',
                html: '',
              },
              methods: {
                generateHTML: function (event) {
                  this.html = marked(this.markdown)
                }
              }
            })
          </script>
        `,
        itsWorkingWhen: 'you can click the button and it generates HTML that corresponds to content in the textarea',
        newConcepts: []
      })
    ],
    modification: `
      <p>You work on a social messaging site and people keep yelling at each other in all caps. Then the CEO had a great idea. If everything users type is translated to lower case, they won't be able to yell and everyone will be friendly and happy. Perfect solution, right? Use example 1.3 to build a proof-of-concept for an input that automatically translates everything to lower case.</p>
    `,
    buildFromScratch: `
      <h4>Option 1: Build a chatbot</h4>
      <p>Build an input that elicits a response anytime you <a target="_blank" href="http://vuejs.org/guide/events.html#Key-Modifiers">press enter within the input</a>. The response generated should be different depending on what the user entered. For example:</p>
      <ul>
        <li>if the user types "hi" or "hello", the response should be "Greetings human!"</li>
        <li>if the user types "how are you?", the response should be "I am operating at 100% efficiency."</li>
      </ul>
      <p>Make up at least one more response. Fro anything you don't explicitly check for, display a random response from an a list of generic active listening phrases, such as "Interesting! Tell me more." or "I see...".</p>
      <p>After the response is generated, the user's input should also clear so that they're free to type something else.</p>

      <h4>Option 2: Build a username generator</h4>
      <p>A lot of sites have limits on what characters are acceptable for a username. Build a simple app that allows users to type their full name into an input and when they press a "Generate username" button, it will turn their full name into what might be a valid username - for example, replacing spaces with dashes, lowercasing everything, removing special characters, etc. <strong>Note</strong>: It'll be useful to know how to use regular expressions for this one.</p>
    `
  },
  {
    title: '2. Computed values',
    examples: [
      generateCodeProperties({
        exerciseId: 2,
        exampleId: 1,
        title: 'Derived/computed values in a calculator',
        bodyCode: `
          <input v-model="firstNumber" type="number" >
          <!--
          v-model works on other form inputs types as well,
          such as the select element below!
          -->
          <select v-model="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input v-model="secondNumber" type="number" >
          =
          {{ result }}

          <script>
            new Vue({
              el: 'body',
              data: {
                firstNumber: 0,
                secondNumber: 0,
                operator: '+'
              },
              computed: {
                // Whenever firstNumber, operator, or secondNumber changes,
                // result will automatically update using the provided function.
                // Otherwise, it will remain cached.
                result: function () {
                  return eval(this.firstNumber + this.operator + this.secondNumber)
                }
              }
            })
          </script>
        `,
        itsWorkingWhen: 'updating the form inputs results in correct calculations',
        newConcepts: [
          {
            title: 'Computed values',
            url: 'http://vuejs.org/guide/computed.html'
          }
        ]
      })
    ],
    modification: `
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" target="_blank">Using a try/catch</a>, update the computed value in example 2.1 so that if eval throws an error from an invalid value, such as a blank input, the result is set to a useful error message, rather than just being blank.</p>
    `,
    buildFromScratch: `
      <h4>Option 1: Build a funny tip calculator</h4>
      <p>Build about 3 form inputs for a customer in a restaurant, asking them questions such as whether they brought a baby with them, if they tried to hit on any of the wait staff, how many substitutions they asked for, etc. Using this information, as well as the total of their bill, calculate a recommended tip in a computed value and display it on the page.</p>

      <h4>Option 2: Build a CSS color previewer</h4>
      <p>Have an input for a user to enter a valid CSS color, then in a color swatch below the input, show the user what the color they entered actually looks like. <strong>Note</strong>: You'll find <a href="http://vuejs.org/guide/class-and-style.html#Binding-Inline-Styles" target="_blank">inline style binding</a> very useful, so check out those docs!</p>
    `
  },
  {
    title: '3. Lists',
    examples: [
      generateCodeProperties({
        exerciseId: 3,
        exampleId: 1,
        title: 'Very simple todo app',
        bodyCode: `
          <input v-model="newTodoText" v-on:keyup.enter="addTodo">
          <ul>
            <!--
            v-for allows you to repeat an element for each item
            in an array, using the value of that item in the contents
            of the element.
            -->
            <li v-for="(index, todo) in todos">
              <span>{{ todo.text }}</span>
              <button @click="removeTodo(index)">X</button>
            </li>
          </ul>

          <script>
            new Vue({
              el: 'body',

              data: {
                newTodoText: '',
                todos: []
              },

              methods: {
                addTodo: function () {
                  if (this.newTodoText) {
                    this.todos.push({ text: this.newTodoText })
                    this.newTodoText = ''
                  }
                },
                removeTodo: function (index) {
                  this.todos.splice(index, 1)
                }
              }
            })
          </script>
        `,
        itsWorkingWhen: 'you\'re able to add and remove todos in the browser',
        newConcepts: [
          {
            title: 'List rendering',
            url: 'http://vuejs.org/guide/list.html'
          },
          {
            title: 'Array change detection',
            url: 'http://vuejs.org/guide/list.html#Array-Change-Detection'
          }
        ],
        newPrereqJavaScript: [
          {
            title: 'Arrays',
            url: 'http://www.w3schools.com/js/js_arrays.asp'
          }
        ]
      })
    ],
    modification: `
      <p>Building on example 3.1, add a new property to new todos called <code>isComplete</code>, which should start as <code>false</code>. Then add a checkbox input next to each item, which is bound to that item's <code>isComplete</code> property with <code>v-model</code>.</p>
      <p>Finally, add two buttons below the list of todos. The first will be called "Clear all" and it will reset todos to an empty array when clicked. The second button will be called "Clear completed" and it will set <code>todos</code> to a new array of todos, with all the completed ones <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Examples" target="_blank">filtered</a> out.</p>
    `,
    buildFromScratch: `
      <h4>Build a raffle app</h4>
      <p>Add an input for people to be adding to the list of entrants in the raffle. Once added, these entrants should be displayed in a list and the input should be cleared.</p>
      <p>There should also be a button called "Pick winner" which will fire an alert with the name of a <a href="http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array" target="_blank">random</a> entrant. This entrant should then be removed from the list, so that they can't win again on the next drawing.</p>
    `
  },
  {
    title: '4. Lifecycle hooks, conditional rendering, and Ajax fetching',
    examples: [
      generateCodeProperties({
        exerciseId: 4,
        exampleId: 1,
        title: 'Fetching Star Wars planets from an API',
        headCode: `
          <script src="https://cdn.jsdelivr.net/vue.resource/latest/vue-resource.min.js"></script>
        `,
        bodyCode: `
          <h1>Planets in Star Wars</h1>
          <!--
          v-if ensures that an element only renders when a condition is true
          -->
          <p v-if="planets.length === 0">
            Loading planets...
          </p>
          <div v-for="planet in planets">
            <h2>{{ planet.name }}</h2>
            <ul>
              <li>Terrain: {{ planet.terrain }}</li>
              <li>Population: {{ planet.population }}</li>
            </ul>
          </div>

          <script>
            // Registers the VueResource plugin with Vue
            Vue.use(VueResource)

            new Vue({
              el: 'body',

              data: {
                planets: []
              },

              // created is a "lifecycle hook" - it runs once the app or
              // component has been created, but before it finishes rendering.
              // In the new concepts section, we'll link to a full list of
              // lifecycle methods.
              created: function () {
                // $http is made available to all app or component instances,
                // courtesy of vue-resource.
                this.$http.get('http://swapi.co/api/planets')
                  .then(function (response) {
                    this.planets = response.data.results
                  })
              }
            })
          </script>
        `,
        itsWorkingWhen: 'planets display shortly after the page loads',
        newConcepts: [
          {
            title: 'vue-resource',
            url: 'https://github.com/vuejs/vue-resource/blob/master/docs/http.md'
          },
          {
            title: 'Conditional rendering',
            url: 'http://vuejs.org/guide/conditional.html'
          },
          {
            title: 'Lifecycle hook',
            url: 'http://vuejs.org/api/#Options-Lifecycle-Hooks'
          }
        ],
        newPrereqJavaScript: [
          {
            title: 'Promises',
            url: 'http://www.html5rocks.com/en/tutorials/es6/promises/'
          }
        ]
      }),
      generateCodeProperties({
        exerciseId: 4,
        exampleId: 2,
        title: 'Searching for upcoming events with the Lansing.Codes API',
        headCode: `
          <script src="https://cdn.jsdelivr.net/vue.resource/latest/vue-resource.min.js"></script>
          <script src="https://cdn.jsdelivr.net/lodash/4.13.1/lodash.min.js"></script>
        `,
        bodyCode: `
          <h1>
            Next
            <input v-model="topic" placeholder="event topic">
            event
          </h1>
          <p>
            <span v-if="fetchStatus === 'done'">
              <span v-if="nextEvent">
                The next {{ topic }} event is
                <a v-bind:href="nextEvent.links.self" target="_blank">
                  {{ nextEvent.attributes.name }}
                </a>
              </span>
              <span v-else>
                No meetups found for that topic.
              </span>
            </span>
            <span v-else>{{ fetchStatus }}</span>
          </p>

          <script>
            Vue.use(VueResource)

            new Vue({
              el: 'body',

              data: {
                topic: '',
                fetchStatus: 'waiting for input...',
                nextEvent: null
              },

              // When making Ajax requests based on user input, it's often
              // useful to "watch" the data bound to that input and trigger
              // a function when it changes.
              watch: {
                topic: function () {
                  this.fetchStatus = 'typing...'
                  this.fetchPlanets()
                }
              },

              methods: {
                // _.debounce is a function provided by lodash to limit how
                // often a particularly expensive operation can be run.
                // In this case, we want to limit how often we hit the
                // Lansing.Codes API, waiting until the user has completely
                // finished typing before making the actual Ajax request.
                // To learn more about the _.debounce function (and its
                // cousin _.throttle), visit:
                // https://lodash.com/docs#debounce
                fetchPlanets: _.debounce(
                  function () {
                    if (this.topic.trim().length === 0) {
                      this.fetchStatus = 'waiting for input...'
                    } else {
                      this.fetchStatus = 'loading...'
                    }

                    this.$http.get(
                      'http://api.lansing.codes/v1/events/upcoming/search/' + this.topic
                    ).then(function (response) {
                      this.nextEvent = response.data.data[0]
                      this.fetchStatus = 'done'
                    })
                  },
                  // This is the number of milliseconds we wait for the user
                  // to stop typing. There are 1000 milliseconds in 1 second.
                  500
                )
              }
            })
          </script>
        `,
        itsWorkingWhen: 'typing something like "javascript" into the input results in an event link being displayed',
        newConcepts: [
          {
            title: '<code>watch</code>',
            url: 'http://vuejs.org/api/#watch'
          }
        ]
      })
    ],
    modification: `
      <p>In example 4.2, use <code>{{ nextEvent | json }}</code> in your HTML to inspect the contents of <code>nextEvent</code> and display more information about the event on the page, such as which meetup it's from and the relative time until the event starts.</p>
    `,
    buildFromScratch: `
      <h4>Build an app that answers yes/no questions</h4>
      <p>We won't just answer yes or no however. We'll display funny gifs using <a href="http://yesno.wtf/api" target="_blank">yesno.wtf/api</a>. Display the gif on the page once you've pulled it in. Remember that <code>v-bind</code> will be useful for binding data in your app to an image's <code>src</code> attribute.</p>
    `
  }
]
