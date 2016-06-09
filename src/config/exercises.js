const exercises = [
  {
    title: '1. Basic data binding and reactivity',
    examples: [
      {
        title: 'Example 1.1: Basic working Vue app',
        url: 'http://jsbin.com/xujeyutuwa/1/edit?html,output',
        code: `
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
        ]
      },
      {
        title: 'Example 1.2: Data binding',
        url: 'http://jsbin.com/dezebekuze/1/edit?html,output',
        code: `
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
      },
      {
        title: 'Example 1.3: What <code>v-model</code> is doing',
        url: 'http://jsbin.com/lebijiyege/1/edit?html,output',
        code: `
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
        ]
      }
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
    url: 'http://jsbin.com/kimavikeyi/1/edit?html,output',
    examples: [
      {
        title: 'Example 2.1: Derived/computed values in a calculator',
        url: 'http://jsbin.com/wenewititu/1/edit?html,output',
        code: `
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
      }
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
      {
        title: 'Example 3.1: Very simple todo app',
        url: 'http://jsbin.com/piheyafice/1/edit?html,output',
        code: `
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
        ]
      }
    ],
    modification: `
      <p>Building on example 3.1, add a new property to new todos called <code>isComplete</code>, which should default to <code>false</code>. Then add a checkbox input next to each item, which is bound to that item's <code>isComplete</code> property with <code>v-model</code>.</p>
      <p>Finally, add two buttons button below the list of todos. The first will be called "Clear all" and it will reset todos to an empty array when clicked. The second button will be called "Clear completed" and it will set <code>todos</code> to a new array, with all the completed ones filtered out.</p>
    `,
    buildFromScratch: `
      <h4>Build a raffle app</h4>
      <p>Add an input for people to be adding to the list of entrants in the raffle. These entrants should be displayed on the screen right after adding and the input should be cleared.</p>
      <p>There should also be a button called "Pick winner" which will fire an alert with the name of a random entrant. This entrant should then be removed from the list of entrants, so that they can't win again on the next drawing.</p>
    `
  },
  {
    title: '4. Lifecycle methods, conditional rendering, and ajax fetching',
    examples: [
      {
        title: 'Example 4.1: Fetching posts via Ajax',
        url: 'http://jsbin.com/recazu/1/edit?html,output',
        code: `
          <!--
          It's recommended to add the line below to your head, right next to
          where you're pulling in the Vue core library.
          -->
          <script src="https://cdn.jsdelivr.net/vue.resource/latest/vue-resource.min.js"></script>

          <h1>Posts</h1>
          <!--
          v-if ensures that an element only renders when a condition is true
          -->
          <p v-if="posts.length === 0">
            Loading posts...
          </p>
          <div v-for="post in posts">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
          </div>

          <script>
            // Registers the VueResource plugin with Vue
            Vue.use(VueResource)

            new Vue({
              el: 'body',

              data: {
                posts: []
              },

              // created is a "lifecycle hook" - it runs once the app or
              // component has been created, but before it finishes rendering.
              // In the new concepts section, we'll link to a full list of
              // lifecycle methods.
              created () {
                // $http is made available to all app or component instances,
                // courtesy of vue-resource.
                this.$http.get('http://jsonplaceholder.typicode.com/posts')
                  .then(function (response) {
                    this.posts = response.data
                  })
              }
            })
          </script>
        `,
        itsWorkingWhen: 'posts load in via Ajax when the page loads and then are displayed',
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
        ]
      },
      {
        title: 'Example 4.2: Searching for upcoming events with the Lansing.Codes API',
        url: 'http://jsbin.com/vayosukovu/1/edit?html,output',
        code: `
          <!--
          It's recommended to add the line below to your head, right next to
          where you're pulling in the Vue core library.
          -->
          <script src="https://cdn.jsdelivr.net/vue.resource/latest/vue-resource.min.js"></script>

          <h1>
             Next
             <!--
             When used with v-model, the debounce attribute parameter waits until
             the user has stopped typing for the specified number of milliseconds
             before actually updating state. It is being deprecated in Vue 2.0 and
             the link below contains an explanation as to why, as well as
             strategies and examples for how to do even more powerful debouncing!
             https://gist.github.com/chrisvfritz/b45f74dc3742a8a224410d177e5fbd5d
             -->
             <input v-model="topic" debounce="500">
             event
          </h1>
          <p v-if="nextEvent">
            This next {{ topic }} event is
            <a v-bind:href="nextEvent.links.self" target="_blank">
              {{ nextEvent.attributes.name }}
            </a>
          </p>

          <script>
            Vue.use(VueResource)

            new Vue({
              el: 'body',

              data: {
                topic: '',
                nextEvent: null
              },

              // When making Ajax requests based on user input, it's
              // often useful to "watch" that data and run a function
              // to fetch new data every time that data changes.
              watch: {
                topic: function () {
                  this.$http.get(
                    'http://api.lansing.codes/v1/events/upcoming/search/' + this.topic
                  ).then(function (response) {
                    this.nextEvent = response.data.data[0]
                  })
                }
              }
            })
          </script>
        `,
        itsWorkingWhen: 'typing something like "javascript" into the input results in an event link being fetched and displayed',
        newConcepts: [
          {
            title: '<code>v-model</code> with <code>debounce</code>',
            url: 'http://vuejs.org/guide/forms.html#debounce'
          },
          {
            title: 'Debouncing in Vue 2.0',
            url: 'https://gist.github.com/chrisvfritz/b45f74dc3742a8a224410d177e5fbd5d'
          },
          {
            title: '<code>watch</code>',
            url: 'http://vuejs.org/api/#watch'
          }
        ]
      }
    ],
    modification: `
      <p>Update example 4.2 to display "..." when searching has started, but new results have not yet been returned. If no next event is found, a message should be displayed saying so.</p>
      <p>Use <code>{{ nextEvent | json }}</code> in your code to inspect the contents of <code>nextEvent</code> and display more information about the event on the page, such as which meetup it's from and the relative time until the event starts.</p>
    `,
    buildFromScratch: `
      <h4>Build an app that answers yes/no questions</h4>
      <p>We won't just answer yes or no however. We'll display funny gifs using <a href="http://yesno.wtf/api" target="_blank">yesno.wtf/api</a>. Display the gif on the page once you've pulled it in. Remember that <code>v-bind</code> will be useful for binding data in your app to an image's <code>src</code> attribute.</p>
    `
  }
]

const noramilizeExampleCodeWhitespace = exercises => {
  return exercises.map(exercise => {
    return {
      ...exercise,
      examples: exercise.examples.map(example => {
        return {
          ...example,
          code: example.code
            .replace(/^\s+/, '')
            .replace(/\s+$/, '')
            .replace(/\n {10}/g, '\n')
        }
      })
    }
  })
}

export default noramilizeExampleCodeWhitespace(exercises)
